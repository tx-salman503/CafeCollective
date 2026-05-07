import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { SvgXml } from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-element-dropdown';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';
import i18n from '../../../translation/i18n';

import NativeText from '../../../components/AppTexts/NativeText';
import { NativeButton, NativeInput, SafeFlexView } from '../../../components';

import { styles } from './style';
import { moderateScale } from 'react-native-size-matters';

import { ImageUpload, Logo, person } from '../../../assets/Svgs';
import { languageData } from '../../../utils/export';
import { Theme } from '../../../libs';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../navigation/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchLanguage, dispatchSetupProfile } from '../../../redux/slices/userSlice';

const SetupProfile = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [skill, setSkill] = useState('beginner');
  const [preference, setPreference] = useState('skiing');
  const [language, setLanguage] = useState(null);
  const [bio, setBio] = useState('');
const dispatch = useDispatch();

const {SetUpProfileDone} =useSelector(state=>state.userReducer);
 

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
      },
      (response) => {
        if (response.didCancel || response.errorCode) return;
        setProfileImage(response.assets?.[0]);
      }
    );
  };

  const handleLanguageChange = (item) => {
    setLanguage(item.value);
    i18n.changeLanguage(item.value);
    dispatch(dispatchLanguage(item.value));

  };

  const TabButton = ({ title, active, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        active && styles.activeTab,
      ]}
    >
      <NativeText
        style={[
          styles.tabText,
          active ,
        ]}
      >
        {title}
      </NativeText>
    </TouchableOpacity>
  );

  return (
    <SafeFlexView bar={true}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.main, { flexGrow: 1, paddingBottom: moderateScale(30) }]}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={180}
        keyboardShouldPersistTaps="handled"
        enableAutomaticScroll={true}
        extraHeight={160}
       
      >
        <View style={styles.header}>
          <SvgXml xml={Logo} width={moderateScale(242)} height={moderateScale(131)} />
        </View>

        <NativeText style={styles.title} value="SetupProfile.title" />
        <NativeText style={styles.subtitle} value="SetupProfile.subtitle" />

  <View style={styles.uploadContainer}>
  <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
    {profileImage ? (
      <Image
        source={{ uri: profileImage.uri }}
        style={styles.profileImage}
      />
    ) : (
      <SvgXml xml={ImageUpload} width={64} height={64} />
    )}
  </TouchableOpacity>

  {!profileImage && (
    <NativeText
      style={styles.uploadText}
      value="SetupProfile.addProfilePhoto"
    />
  )}
</View>
       

        <NativeText style={styles.sectionLabel}>{t('SetupProfile.skillLevel')}</NativeText>
        <View style={styles.tabRow}>
          {['beginner', 'intermediate', 'advanced'].map(item => (
            <TabButton
              key={item}
              title={t(`SetupProfile.${item}`)}
              active={skill === item}
              onPress={() => setSkill(item)}
            />
          ))}
        </View>

        <NativeText style={styles.sectionLabel}>{t('SetupProfile.iPrefer')}</NativeText>
        <View style={styles.tabRow}>
          {['skiing', 'snowboarding'].map(item => (
            <TabButton
              key={item}
              title={t(`SetupProfile.${item}`)}
              active={preference === item}
              onPress={() => setPreference(item)}
            />
          ))}
        </View>

        <NativeText style={styles.sectionLabel}>{t('SetupProfile.language')}</NativeText>
        <Dropdown
          style={styles.dropdown}
          data={languageData}
          labelField="label"
          valueField="value"
          placeholder={t('SetupProfile.selectLanguage')}
          value={language}
          onChange={handleLanguageChange}
        />
        <NativeInput
          label={t('SetupProfile.addBioLabel')}
          placeholder={t('SetupProfile.addBioPlaceholder')}
          placeholderTextColor={Theme.colors.smokeyGray}
          inputContainerStyle={styles.bioContainer}
          multiline={true}
          numberOfLines={4}
          value={bio}
          onChangeText={setBio}
        />

        <NativeButton
          titleStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title={t('SetupProfile.save')}
          onPress={() => {dispatch(dispatchSetupProfile(true));navigation.navigate(Routes.BottomStack);}}
        />

      </KeyboardAwareScrollView>
    </SafeFlexView>
  );
};

export default SetupProfile;
