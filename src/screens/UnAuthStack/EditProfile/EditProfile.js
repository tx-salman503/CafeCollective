import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MessageCard, NativeInput, SafeFlexView } from '../../../components';
import NativeHeader from '../../../components/AppHeaders/NativeHeader';
import { styles } from './style';
import { images } from '../../../assets/images';
import { SvgXml } from 'react-native-svg';
import { CameraSvg, closeEye, openEye } from '../../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../../../components/AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfile = () => {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [profileImage, setProfileImage] = React.useState(null);

  const handleLibrary = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (result.didCancel) {
        console.log('User cancelled image picker');
        return;
      }

      if (result.errorCode) {
        console.log(result.errorMessage);
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0].uri;
        setProfileImage(selectedImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeFlexView>
      <NativeHeader title={'Edit Profile'} back />

      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imgContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={
                profileImage
                  ? { uri: profileImage }
                  : images.Avtar
              }
              style={styles.img}
            />
          </View>

          <TouchableOpacity
            style={styles.camera}
            onPress={handleLibrary}
          >
            <SvgXml
              xml={CameraSvg}
              width={moderateScale(60)}
              height={moderateScale(60)}
            />
          </TouchableOpacity>

          <NativeText
            value={'Update your Photo'}
            style={combineStyle.text16Mid}
          />
        </View>

        <View style={styles.inputContainer}>
          <NativeInput
            label={'Name/Display Name'}
            placeholder={'How should we call you?'}
            value={name}
            onChangeText={setName}
          />

          <NativeInput
            label={'Edit Username'}
            placeholder={'@coffeelover_99'}
            value={username}
            onChangeText={setUsername}
          />

          <NativeInput
            label={'Change Password'}
            placeholder={'1234567890qwerty'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            rightComponent={
              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                <SvgXml
                  xml={
                    showPassword
                      ? openEye
                      : closeEye
                  }
                  width={24}
                  height={24}
                />
              </TouchableOpacity>
            }
          />

          <View style={styles.btnContianer}>
            <MessageCard
              text="Save Profile"
              touchable={true}
              isBtn
            />

            <NativeText
              value={'Cafe Collective'}
              style={combineStyle.text14Mid}
            />

            <NativeText
              value={'Version 1.0.0 (Build 1.0.0)'}
              style={[
                combineStyle.text14Mid,
                { color: '#FFFFFF99' },
              ]}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  );
};
export default EditProfile;