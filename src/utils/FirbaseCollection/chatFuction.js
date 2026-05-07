
import firestore from '@react-native-firebase/firestore';

// helper to keep code tidy
const now = () => firestore.FieldValue.serverTimestamp();

export const sendMessage = async (chatRoomId, message, sender, receiver, order) => {
  try {
    if (!chatRoomId || !message?.text?.trim() || !sender?.uid) {
      console.error('Missing required fields for sending message');
      return;
    }

    const timestamp = firestore.Timestamp.now();

    const messageData = {
      _id: new Date().getTime().toString(),
      text: message.text.trim(),
      senderId: sender.uid,
      createdAt: timestamp,
      user: {
        _id: sender.uid,
        name: sender.displayName || 'User',
        avatar: sender.photoURL || null
      },
      readBy: [sender.uid],
      isRead: false
    };

    console.log('Sending message data:', messageData);

    const messageRef = firestore()
      .collection('chats')
      .doc(chatRoomId)
      .collection('messages')
      .doc(messageData._id);

    await messageRef.set(messageData);
    console.log('Message written to messages collection');

    // Prepare chat update with explicit fields
    const lastMessageText = messageData.text;
    const chatUpdate = {
      users: [sender.uid, receiver.uid || receiver?.id],
      lastMessage: {
        text: lastMessageText,
        senderId: sender.uid,
        createdAt: timestamp
      },
      lastMessageText: lastMessageText,
      updatedAt: timestamp,
      receiver: {
        id: receiver.uid || receiver?.id,
        name: receiver.displayName || receiver?.name || 'User',
        avatar: receiver.photoURL || receiver?.avatar || null
      },
      sender: {
        id: sender.uid,
        name: sender.displayName || 'User',
        avatar: sender.photoURL || null
      },
      order: order || 0,
    };

    console.log('Chat update object:', JSON.stringify(chatUpdate, null, 2));
    await firestore().collection('chats').doc(chatRoomId).set(chatUpdate, { merge: true });
    console.log('Chat document updated successfully');

    // Verify the update
    const verifyDoc = await firestore().collection('chats').doc(chatRoomId).get();
    console.log('Verified chat document:', verifyDoc.data());

    return { success: true, id: messageRef.id };
  } catch (error) {
    console.error('Error sending message: ', error);
    return { success: false, error };
  }
};

  export const getChatRooms = (userId, setChatList, setIsLoader) => {
    return firestore()
      .collection('chats')
      .where('users', 'array-contains', userId)
      .orderBy('updatedAt', 'desc')
      .onSnapshot(
        async (snapshot) => {
          setIsLoader(true);
          const chatRooms = await Promise.all(
            snapshot.docs.map(async (doc) => {
              const messagesSnapshot = await firestore()
                .collection('chats')
                .doc(doc.id)
                .collection('messages')
                .get();
              const unreadMessages = messagesSnapshot.docs.filter(
                (messageDoc) => !messageDoc.data().readBy.includes(userId)
              ).length;
              return {
                chatRoomId: doc.id,
                ...doc.data(),
                unreadMessages,
              };
            })
          );
          setChatList(chatRooms);
          setIsLoader(false);
        },
        (error) => {
          console.error('Error fetching chat list: ', error);
          // toastUtils.showError(t('allTxts.error'), error);
          setIsLoader(false);
        }
      );
  };
export const getUnreadMessages = (userId, setTotalUnread) => {
  return firestore()
    .collection('chats')
    .where('users', 'array-contains', userId)
    .orderBy('updatedAt', 'desc')
    .onSnapshot(
      async (snapshot) => {
        let totalUnread = 0;
        await Promise.all(
          snapshot.docs.map(async (doc) => {
            const messagesSnapshot = await firestore()
              .collection('chats')
              .doc(doc.id)
              .collection('messages')
              .get();
            const unreadMessages = messagesSnapshot.docs.filter(
              (messageDoc) => !messageDoc.data().readBy.includes(userId)
            ).length;
            totalUnread += unreadMessages;
          })
        );
        setTotalUnread(totalUnread); // Update the unread count
      },
      (error) => {
        console.error('Error fetching unread messages: ', error);
      }
    );
};

  export const markMessagesAsRead = async (chatRoomId, userId) => {
  try {
    const messagesSnapshot = await firestore()
      .collection('chats')
      .doc(chatRoomId)
      .collection('messages')
      .where('senderId', '!=', userId) // Only mark messages not sent by current user
      .get();
    
    if (messagesSnapshot.empty) {
      console.log('No messages to mark as read');
      return;
    }

    const batch = firestore().batch();
    messagesSnapshot.docs.forEach((doc) => {
      const messageData = doc.data();
      // Only update if user hasn't already read it
      if (!messageData.readBy?.includes(userId)) {
        const messageRef = firestore()
          .collection('chats')
          .doc(chatRoomId)
          .collection('messages')
          .doc(doc.id);
        batch.update(messageRef, {
          readBy: firestore.FieldValue.arrayUnion(userId), // Mark the message as read by the user
        });
      }
    });
    
    await batch.commit();

    // Check if chat document exists before updating
    const chatDoc = await firestore().collection('chats').doc(chatRoomId).get();
    if (chatDoc.exists) {
      await firestore().collection('chats').doc(chatRoomId).update({
        unreadCount: 0
      });
    }
    
    console.log('Messages marked as read for chatRoomId:', chatRoomId);
  } catch (error) {
    console.error('Error marking messages as read: ', error);
  }
};

  export const uploadImage = async (uploadKey, imagePath) => {
    try {
      const filename = imagePath.substring(imagePath.lastIndexOf('/') + 1);
      const storage = getStorage(); // Modular access
      const fileRef = ref(storage, `${uploadKey}/${filename}`);
      // Upload file
      await fileRef.putFile(imagePath); // still valid for now
      // Get download URL
      const url = await fileRef.getDownloadURL();
      return url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };
  export const deleteChat = async (chatRoomId) => {
    try {
      const messagesRef = firestore().collection('chats').doc(chatRoomId).collection('messages');
      // Delete all messages in the chat room
      const messagesSnapshot = await messagesRef.get();
      const batch = firestore().batch();
      messagesSnapshot.docs.forEach((doc) => {
        batch.delete(messagesRef.doc(doc.id));
      });
      await batch.commit(); // Delete all messages first
      // Now delete the chat room document
      await firestore().collection('chats').doc(chatRoomId).delete();
    } catch (error) {
      console.error("Error deleting chat room:", error);
    }
  };
  export const deleteMessage = async (chatRoomId, message) => {
      try {
        if (!chatRoomId || !message?._id) return;
        await firestore()
          .collection("chats")
          .doc(chatRoomId)
          .collection("messages")
          .doc(message._id)
          .delete();
        console.log("Message deleted:", message._id);
      } catch (error) {
        console.error("Error deleting message:", error);
        Alert.alert("Error", "Failed to delete message. Try again.");
      }
    };