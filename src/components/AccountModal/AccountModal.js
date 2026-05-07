import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  Platform,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../libs';
import NativeInput from '../NativeInput/NativeInput';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { eye, eyelock } from '../../assets/Svgs';

const AccountModal = ({
  visible,
  onClose,
  svgXml,
  title,
  description,
  buttonTitle,
  onPress,
  showinput = false,
  password = '',
  onPasswordChange = () => {},
  error = '',
}) => {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [keyboardisshowb, setkeyboardisshowb] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setkeyboardisshowb(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setkeyboardisshowb(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleClose = () => {
    Keyboard.dismiss();
    onClose && onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={handleClose}
      >

        <TouchableOpacity
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
          style={styles.modalWrapper}
        >
          <KeyboardAwareScrollView
            contentContainerStyle={[
              styles.scrollContent,
              Platform.OS === 'ios'
                ? keyboardVisible
                  ? { paddingBottom: moderateScale(325) }
                  : null
                : null,
            ]}
            enableAutomaticScroll={true}
            extraScrollHeight={Platform.OS === 'android' ? 0 : 0}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                styles.container,
                keyboardVisible && styles.containerWithKeyboard,
              ]}
            >
            

              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>

              {showinput ? (
                <View style={styles.inputWrapper}>
                  <NativeInput
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={onPasswordChange}
                    secureTextEntry={hidePassword}
                    containerStyle={styles.inputContainerStyle}
                    rightComponent={
                      <TouchableOpacity
                        onPress={() =>
                          setHidePassword(hidePassword ? false : true)
                        }
                      >
                        <SvgXml
                          xml={hidePassword ? eyelock : eye}
                          width={25}
                          height={25}
                        />
                      </TouchableOpacity>
                    }
                  />
                  {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
              ) : null}

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={handleClose}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.actionBtn}
                  onPress={() => {
                    // Keyboard.dismiss();
                    onPress && onPress();
                  }}
                >
                  <Text style={styles.actionText}>{buttonTitle}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fallback background
  },
  modalWrapper: {
    maxHeight: '100%', 
  },
  scrollContent: {
    // flexGrow: 1,
    justifyContent: 'flex-end',
   
  },
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: moderateScale(35),
    borderTopRightRadius: moderateScale(35),
    padding: 20,
    alignItems: 'center',
  },
  containerWithKeyboard: {
    // Keyboard visible hone par extra styling (agar zarurat ho)
    paddingBottom: 10,
  },
  iconWrapper: {
    backgroundColor: '#EAF6EE',
    borderRadius: 50,
    padding: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: moderateScale(18),
    marginBottom: 6,
    color: Theme.colors.black,
    fontFamily: Theme.fontFamily.poppinsBold,
  },
  description: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: Theme.fontFamily.poppinsMedium,
    color: Theme.colors.raisinBlack,
    marginBottom: 20,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  errorText: {
    fontSize: moderateScale(12),
    color: Theme.colors.red || '#FF0000',
    fontFamily: Theme.fontFamily['Poppins-Regular'],
    marginTop: 5,
    textAlign: 'left',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelBtn: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: Theme.colors.navyBlue,
    alignItems: 'center',
    height: moderateScale(50),
  },
  cancelText: {
    fontSize: moderateScale(16),
    color: Theme.colors.navyBlue,
    fontFamily: Theme.fontFamily.poppinsSemiBold
  },
  actionBtn: {
    flex: 1,
    marginLeft: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(50),
  },
  actionText: {
    fontSize: moderateScale(16),
    color: Theme.colors.white,
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    textAlign: 'center',
  },
  inputContainerStyle: {
    width: '100%',
    height: moderateScale(50),
    marginBottom: moderateScale(25),
  },
});

export default AccountModal;
