
import auth from '@react-native-firebase/auth';
import firestore, { doc } from '@react-native-firebase/firestore';
import { dispatchUser } from '../../redux/slices/userSlice';
import { getStorage } from '@react-native-firebase/storage';
// export const signUpUser = async (name, email, phone, password, currentPassword,profileImageUrl) => {
//   try {
//     const res = await auth().createUserWithEmailAndPassword(email, password);
//     await firestore().collection('users').doc(res.user.uid).set({
//       uid:res.user.uid,
//       name,
//       email,
//       password,
//       currentPassword,
//       phone: phone,
//       profileImageUrl,
//       createdAt: firestore.FieldValue.serverTimestamp(),
//     });
//     return { success: true };
//   } catch (err) {
//     return { success: false, error: err.message };
//   }
// };

// export const posts = async (description, imageUrl, caption, isPrivate = false,name) => {
//   try {
//     const user = auth().currentUser; // no await needed
//     if (!user) throw new Error("No user is signed in");

//     await firestore()
//       .collection("posts")
//       .doc(user.uid)  // ⚠️ this will overwrite per-user post doc
//       .set({
//         uid: user.uid,
//         name,
//         description,
//         imageUrl,
//         caption,
//         isPrivate,
//         createdAt: firestore.FieldValue.serverTimestamp(),
//       });

//     console.log("Post saved successfully");
//   } catch (error) {
//     console.log("Error saving post:", error);
//   }
// };

import toastUtils from '../toastUtil';

export const signUpUser = async (
  name,
  email,
  phone,
  password,
  currentPassword,
  profileImageUrl,
  countryCode = 'US',
  callingCode = '1',
  followersCount = [], // Initialize as an empty array
  followingCount = [],  // Initialize as an empty array
  fcmToken = null,
  provider = 'Email'
) => {
  try {
    // Check if the email already exists in Firebase Authentication
    const existingUser = await auth().fetchSignInMethodsForEmail(email);

    if (existingUser.length > 0) {
      // Email already exists, show a toast message
      toastUtils.showError('Email already exists', 'Please sign in instead');
      return { success: false, error: 'Email already exists' };
    }

    // If email doesn't exist, create a new user with email and password
    const res = await auth().createUserWithEmailAndPassword(email, password);

    // Save user data to Firestore
    await firestore().collection('users').doc(res.user.uid).set({
      uid: res.user.uid,
      name,
      email,
      phone,
      countryCode,
      callingCode,
      phoneFull: phone && callingCode ? `+${callingCode}${String(phone).replace(/\D/g, '')}` : phone,
      profileImageUrl: profileImageUrl , // Default profile image
      password,
      currentPassword,
      createdAt: firestore.FieldValue.serverTimestamp(),
      followers: followersCount, // Initialize the followers array (empty initially)
      following: followingCount, // Initialize the following array (empty initially)
      fcmToken,
      provider:provider,
      
    });

    // Return success after sign-up
    return { success: true };
  } catch (err) {
    // Catch and return any error that occurs during the process
    return { success: false, error: err.message };
  }
};







export const posts = async (
  userID,
  description,
  imageUrl,
  caption,
  isPrivate = false,
  name,
  dp,
  likeCounter = 0,
  commentCounter = 0,
  shareCounter = 0,
  inputBackgroundColor,
) => {
  try {
    const user = auth().currentUser;
    if (!user) throw new Error('No user is signed in');

    const docRef = await firestore()
      .collection('posts')
      .add({
        postID: user.uid,
        userID,
        name: name || user.displayName || '',
        description: description || '',
        imageUrl: imageUrl || null,
        caption: caption || '',
        isPrivate: !!isPrivate,
        createdAt: firestore.FieldValue.serverTimestamp(),
        dp: dp || null,
        likeCounter,
        commentCounter,
        shareCounter,
        inputBackgroundColor,
      });

    return { ok: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving post:', error);
    return { ok: false, error };
  }
};










export const commentCollection = async (postID, commentId, comment, imgUrl, name, uid) => {
  try {
    const user = auth().currentUser;
    if (!user) { throw new Error('No user is signed in') };
    const commentRef = await firestore().collection('Comment').add({
      postID,
      name,
      commentId: uid || user.uid, // Use uid of comment author
      comment,
      imgUrl,
      uid: uid || user.uid,
      likeCount: 0,
      repliesCount: 0,
      createdAt: firestore.FieldValue.serverTimestamp(),
    })
    // toastUtils.showSuccess("Comment added successfully")
  } catch (error) {
    toastUtils.showError("Error adding comment", error.message)
  }
}

// Add a reply to a comment
export const addCommentReply = async (commentId, replyText, imgUrl, name, uid) => {
  try {
    const user = auth().currentUser;
    if (!user) { throw new Error('No user is signed in') };
    
    const replyRef = await firestore()
      .collection('Comment')
      .doc(commentId)
      .collection('replies')
      .add({
        text: replyText,
        name,
        imgUrl,
        uid: uid || user.uid,
        likeCount: 0,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    // Update parent comment's replies count
    await firestore()
      .collection('Comment')
      .doc(commentId)
      .update({
        repliesCount: firestore.FieldValue.increment(1),
      });

    toastUtils.showSuccess("Reply added successfully")
  } catch (error) {
    toastUtils.showError("Error adding reply", error.message)
  }
}

// Like a comment
export const likeComment = async (commentId, uid, name, imgUrl) => {
  try {
    const user = auth().currentUser;
    if (!user) { throw new Error('No user is signed in') };

    const likeRef = await firestore()
      .collection('Comment')
      .doc(commentId)
      .collection('likes')
      .add({
        uid: uid || user.uid,
        name,
        imgUrl,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    // Update comment's like count
    await firestore()
      .collection('Comment')
      .doc(commentId)
      .update({
        likeCount: firestore.FieldValue.increment(1),
      });

    toastUtils.showSuccess("Comment liked")
  } catch (error) {
    toastUtils.showError("Error liking comment", error.message)
  }
}

// Unlike a comment
export const unlikeComment = async (commentId, uid) => {
  try {
    const likesSnapshot = await firestore()
      .collection('Comment')
      .doc(commentId)
      .collection('likes')
      .where('uid', '==', uid)
      .get();

    if (!likesSnapshot.empty) {
      const likeDoc = likesSnapshot.docs[0];
      await likeDoc.ref.delete();

      // Decrement comment's like count
      await firestore()
        .collection('Comment')
        .doc(commentId)
        .update({
          likeCount: firestore.FieldValue.increment(-1),
        });

      toastUtils.showSuccess("Like removed")
    }
  } catch (error) {
    toastUtils.showError("Error removing like", error.message)
  }
}










export const updateUser = async (uid, data) => {
  try {
    await firestore().collection('users').doc(uid).update(data);
    return true;
  } catch (e) {
    console.error('Update error:', e);
    return false;
  }
};


export const uploadImageToFirebase = async (uri) => {
  try {
    if (!uri) return;

    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    console.log(filename, "filename")
    const reference = getStorage().ref(`profile_images/${filename}`);

    // Show upload progress
    const task = reference.putFile(uri);

    // Wait for the upload to complete
    await task;

    // Get the download URL
    const imageUrl = await reference.getDownloadURL();
    console.log('Image uploaded to Firebase Storage, URL:', imageUrl);

    return imageUrl;
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    return null;
  }
};

export const likeCollection = async (postID, imgUrl, name, likeId) => {
  try {
    const user = auth().currentUser;
    if (!user) { throw new Error('No user is sigind') };
    const likeRef = await firestore().collection('Like').add({
      postID,
      name,
      imgUrl,
      likeId,
      createdAt: firestore.FieldValue.serverTimestamp(),
    })
    // toastUtils.showSuccess("Like add succefully")
  } catch (error) {
    toastUtils.showError("Error is following", error.message)
  }
}

// Save notification to Firestore
export const saveNotification = async ({
  userId, // User who will receive the notification
  type, // 'like' or 'comment'
  title,
  body,
  postId,
  senderId,
  senderName,
  senderImage,
  read = false,
  data = {}
}) => {
  try {
    const user = auth().currentUser;
    if (!user) { throw new Error('No user is signed in') };
    
    await firestore().collection('Notification').add({
      userId,
      type,
      title,
      body,
      postId,
      senderId,
      senderName,
      senderImage,
      read,
      data,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    
    console.log('Notification saved successfully');
  } catch (error) {
    console.error('Error saving notification:', error);
  }
}

export const AddCourse = async ({ heading, description, youtubeLink, image }) => {
  try {
    const user = auth().currentUser;
    if (!user) {
      throw new Error('No user is signed in');
    }

    const docRef = await firestore().collection('Course').add({
      heading,
      description,
      youtubeLink,
      image,
      userID: user?.uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    // Update the document with its own ID after creation
    await firestore().collection('Course').doc(docRef.id).update({
      courseID: docRef.id,
    });

    toastUtils.showSuccess('Course added successfully');
    return docRef.id;

  } catch (error) {
    toastUtils.showError('Error adding course:', error.message);
    throw error;
  }
};



export const Review = async ({
  courseID,
  parkingRating,
  golfCartRating,
  overallRating,
  imgurl,
  weatherCondition,
  pricing,
  managementText,
  courseName,
  score
}) => {
  try {
    const user = auth().currentUser;

    if (!user) {
      throw new Error('No user is signed in');
    }

    // Create the review document
    const docRef = await firestore().collection("Review").add({
      courseID,
      courseName,
      parkingRating,
      golfCartRating,
      overallRating,
      imgurl,
      weatherCondition,
      pricing,
      managementText,
      score,
      userId: user.uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    // Fixed: Changed docRef() to doc()
    await firestore().collection("Review").doc(docRef.id).update({
      postID: docRef.id,
    });

    console.log("Review added with ID: ", docRef.id);
    toastUtils.showSuccess("Review added successfully");

    return docRef.id;

  } catch (error) {
    console.log("Error adding review:", error);
    toastUtils.showError("Error adding review: " + error.message);
    throw error;
  }
};

export const Follow = async ({ followerId, followingId }) => {
  try {
    // Add a new entry to the "follows" collection
    await firestore().collection('follows').add({
      followerId,
      followingId,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    // Add the followingId to the follower's 'following' array
    await firestore().collection('users').doc(followerId).update({
      following: firestore.FieldValue.arrayUnion(followingId), // Add followingId to the following array
    });

    // Add the followerId to the following user's 'followers' array
    await firestore().collection('users').doc(followingId).update({
      followers: firestore.FieldValue.arrayUnion(followerId), // Add followerId to the followers array
    });

    // You can also update the followersCount and followingCount for each user:
    await firestore().collection('users').doc(followerId).update({
      followingCount: firestore.FieldValue.increment(1), // Increment following count
    });

    await firestore().collection('users').doc(followingId).update({
      followersCount: firestore.FieldValue.increment(1), // Increment followers count
    });

  } catch (error) {
    console.error('Error following user:', error);
  }
};





export const unfollowUser = async ({ followerId, followingId }) => {
  try {
    // Step 1: Remove the follow entry from the "follows" collection
    const querySnapshot = await firestore()
      .collection('follows')
      .where('followerId', '==', followerId)
      .where('followingId', '==', followingId)
      .get();

    querySnapshot.forEach(async (doc) => {
      await doc.ref.delete();  // Remove the follow document
    });

    // Step 2: Remove the followingId from the follower's 'following' array
    await firestore().collection('users').doc(followerId).update({
      following: firestore.FieldValue.arrayRemove(followingId),  // Remove followingId from following array
    });

    // Step 3: Remove the followerId from the following user's 'followers' array
    await firestore().collection('users').doc(followingId).update({
      followers: firestore.FieldValue.arrayRemove(followerId),  // Remove followerId from followers array
    });

    // Step 4: Decrement the followingCount for the follower
    await firestore().collection('users').doc(followerId).update({
      followingCount: firestore.FieldValue.increment(-1),  // Decrease following count for the follower
    });

    // Step 5: Decrement the followersCount for the followed user
    await firestore().collection('users').doc(followingId).update({
      followersCount: firestore.FieldValue.increment(-1),  // Decrease followers count for the followed user
    });

  } catch (error) {
    console.error('Error unfollowing user:', error);
  }
};



export const getFollowers = async (followingId) => {
  try {
    const querySnapshot = await firestore()
      .collection('follows')
      .where('followingId', '==', followingId)
      .get();
    
    const followers = [];
    querySnapshot.forEach(doc => {
      followers.push(doc.data().followerId); // Store the followerId
    });
    
    return followers; // Array of followerIds
  } catch (error) {
    console.error("Error getting followers: ", error);
  }
};


export const getFollowing = async (followerId) => {
  try {
    const querySnapshot = await firestore()
      .collection('follows')
      .where('followerId', '==', followerId)
      .get();
    
    const following = [];
    querySnapshot.forEach(doc => {
      following.push(doc.data().followingId); // Store the followingId
    });
    
    return following; // Array of followingIds
  } catch (error) {
    console.error("Error getting following: ", error);
  }
};




export const createPostOrReview = async ({
  type = 'post', // Default to 'post' if no type is provided
  userID,
  description = '',
  imageUrl = null, // Image URL will be required for both post and review
  caption = '',
  isPrivate = false,
  name,
  dp = null, // Profile image for the user
  likeCounter = 0,
  commentCounter = 0,
  shareCounter = 0,
  inputBackgroundColor = '',
  photoUrl,

  // For Review-related fields
  courseID,
  parkingRating,
  golfCartRating,
  overallRating,
  weatherCondition,
  pricing,
  managementText,
  courseName,
  score,
}) => {
  try {
    const user = auth().currentUser;
    if (!user) throw new Error('No user is signed in');

    // Create the document structure based on the type
    let docData = {
      userID,
      name: name || user.displayName || '', // If no name provided, use the user's display name
      dp: dp || user.photoURL || null, // If no dp (profile image) provided, use the user's photo URL
      createdAt: firestore.FieldValue.serverTimestamp(),
      userId: user.uid,
      type, // Store the type to differentiate between post and review
    };

    // If it's a post, add post-specific fields
    if (type === 'post') {
      docData = {
        ...docData,
        postID: user.uid,
        description,
        imageUrl,
        caption,
        isPrivate: !!isPrivate,
        likeCounter,
        commentCounter,
        shareCounter,
        inputBackgroundColor,
      };
    }

    // If it's a review, add review-specific fields
    if (type === 'review') {
      docData = {
        ...docData,
        courseID,
        courseName,
        parkingRating,
        golfCartRating,
        overallRating,
        imageUrl, // Use the same imageUrl for review
        name,
        dp,
        weatherCondition,
        pricing,
        managementText,
        score,
      };
    }

    // Add the document to the same collection for both post and review
    const collection = firestore().collection('posts_and_reviews');
    const docRef = await collection.add(docData);

    // Update document with ID if it's a review (this step is optional, but included for consistency)
    if (type === 'review') {
      await firestore().collection('posts_and_reviews').doc(docRef.id).update({
        postID: docRef.id,
      });
    }

    console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} added with ID: `, docRef.id);

    // Return success callback based on type
    if (type === 'post') {
      return { ok: true, id: docRef.id, type: 'post' };
    } else if (type === 'review') {
      // Success callback for review
      toastUtils.showSuccess('Review added successfully');
      return { ok: true, id: docRef.id, type: 'review' };
    }

  } catch (error) {
    console.log(`Error adding ${type}:`, error);
    toastUtils.showError(`Error adding ${type}: ` + error.message);
    return { ok: false, error };
  }
};
