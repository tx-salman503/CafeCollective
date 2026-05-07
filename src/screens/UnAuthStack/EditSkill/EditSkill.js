import { View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { NativeButton, NativeInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import { images } from '../../../assets/images'
import { Routes } from '../../../navigation/Routes'
import { ImageUpload } from '../../../assets/Svgs'
import { SvgXml } from 'react-native-svg'
import NativeText from '../../../components/AppTexts/NativeText'
import { useTranslation } from 'react-i18next'
import { launchImageLibrary } from 'react-native-image-picker'


const EditSkill = ({navigation}) => {
    const { t } = useTranslation();
    const [skill, setSkill] = useState('beginner');
    const [preference, setPreference] = useState('skiing');
    const [profileImage, setProfileImage] = useState(null);
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
  return (
    <SafeFlexView top={false}>
      <NativeHeader title="Edit Profile" back={true} />
      <View style={styles.main}>
        <View style={styles.profileContainer}>
            {profileImage ? (
                <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>  
                
                <Image source={{ uri: profileImage.uri }} style={styles.profileImage} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
                    <SvgXml xml={ImageUpload} width={64} height={64} style={styles.svgContainer} />
                    <NativeText value="Add profile photo" />
                </TouchableOpacity>
            )}
        </View>
        <NativeText style={styles.sectionLabel} value="SetupProfile.skillLevel" />
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

        <NativeText style={styles.sectionLabel} value="SetupProfile.iPrefer" />
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
        <NativeButton
          titleStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title={t('SetupProfile.save')}
          onPress={() => {navigation.goBack()}}
        />
      </View>
    </SafeFlexView>
  )
}

export default EditSkill