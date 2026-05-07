import React, { useState, useCallback,useEffect } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image,Keyboard } from 'react-native';
import NativeHeader from '../../../components/AppHeaders/NativeHeader';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { moderateScale } from 'react-native-size-matters';
import { styles } from './style';
import { SvgXml } from 'react-native-svg';
import { send } from '../../../assets/Svgs';
import { initialMessages } from '../../../utils/export';
import NativeText from '../../../components/AppTexts/NativeText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeFlexView } from '../../../components';

const currentUser = { _id: 1, name: 'James' };

const ChatScreen = () => {

  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [keyboardisshowb, setkeyboardisshowb] = useState(false)



  const insets = useSafeAreaInsets()
  const tabbarHeight = 50

  const keyboardTopToolbarHeight = Platform.select({ ios: 44, default: 0 })
  const keyboardVerticalOffset = insets.bottom + tabbarHeight + keyboardTopToolbarHeight

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setkeyboardisshowb(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setkeyboardisshowb(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [])

  const handleSend = useCallback(() => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        _id: Math.random().toString(),
        text: inputText.trim(),
        createdAt: new Date(),
        user: currentUser,
      };
      setMessages(prev => GiftedChat.append(prev, [newMessage]));
      setInputText('');
    }
  }, [inputText]);

  const renderBubble = (props) => {
    const isCurrentUser = props.currentMessage.user._id === currentUser._id;
    
    return (
      <View>
        {!isCurrentUser && (
          <NativeText style={styles.usernameText}>
            {props.currentMessage.user.name}
          </NativeText>
        )}
        <Bubble
          {...props}
          wrapperStyle={{
            right: { ...styles.UserCurrentBubble },
            left: {...styles.UserOtherBubble},
          }}
          textStyle={{
            right: { ...styles.UserCurrentBubbleText },
            left: { ...styles.UserOtherBubbleText },
          }}
          timeTextStyle={{
            right: { ...styles.UserCurrentBubbleTimeText },
            left: { ...styles.UserOtherBubbleTimeText },
          }}
        />
      </View>
    );
  };
  

  const renderCustomInputToolbar = () => (
    <View style={styles.customInputContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Write hear"
          placeholderTextColor="#A0A0A0"
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={1000}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            inputText.trim().length === 0 && styles.sendButtonDisabled,
          ]}
          onPress={handleSend}
          disabled={inputText.trim().length === 0}
        >
          <SvgXml xml={send} width={moderateScale(46)} height={moderateScale(46)} />
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderAvatar = (props) => {
    return (
      <Image
        source={{ uri: props.currentMessage.user.avatar }}
        style={styles.UserAvatar}
      />
    );
  };

 

  return (
    
    <SafeFlexView top={false}>
   <KeyboardAvoidingView 
            style={[
              styles.container,
              keyboardisshowb
                ? { flex: 1 }
                : { flexGrow: 1 }
            ]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      
      >


      <NativeHeader title="Chat" back={true} />
      <GiftedChat
        messages={messages}
        user={currentUser}
        isAvatarOnTop={true}
        renderBubble={renderBubble}
        renderInputToolbar={() => null}
        minInputToolbarHeight={0}
        renderAvatar={renderAvatar}
        keyboardAvoidingViewProps={{ keyboardVerticalOffset }}

      />
   
        {renderCustomInputToolbar()}
        </KeyboardAvoidingView>
   
    </SafeFlexView>

  );
};

export default ChatScreen;