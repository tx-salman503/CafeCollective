import { View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { NativeInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import { images } from '../../../assets/images'
import { Routes } from '../../../navigation/Routes'
import { useTranslation } from 'react-i18next'


const EditProfile = ({navigation}) => {
  const { t } = useTranslation();
  return (
    <SafeFlexView top={false}>
      <NativeHeader title={t('EditProfile.title')} back={true} />
      <View style={styles.main}>
        <View style={styles.profileContainer}>
          <Image source={images.user} style={styles.profileImage} />
          <TouchableOpacity style={styles.editIconContainer} activeOpacity={0.7} onPress={() => {navigation.navigate(Routes.EditSkill) }}>
            <Image source={images.edit} style={styles.editIcon} />
          </TouchableOpacity>
        </View>

        <NativeInput
          label={t('EditProfile.nameLabel')}
          value={t('EditProfile.nameValue')}
          rightComponent={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {navigation.navigate(Routes.EditName)}}
            >
              <Image source={images.edit} style={styles.editIcon} />
            </TouchableOpacity>
          }
          editable={false}
        />
        <NativeInput
          label={t('EditProfile.emailLabel')}
          value={t('EditProfile.emailValue')}
          editable={false}
        />
 <NativeInput
          label={t('EditProfile.passwordLabel')}
          value={t('EditProfile.passwordValue')}
          rightComponent={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {navigation.navigate(Routes.UpdatePassword)}}
            >
              <Image source={images.edit} style={styles.editIcon} />
            </TouchableOpacity>
          }
          editable={false}
        />

<NativeInput
          label={t('EditProfile.bioLabel')}
          value={t('EditProfile.bioValue')}
          rightComponent={
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {navigation.navigate(Routes.EditBio)}}
            >
              <Image source={images.edit} style={styles.editIcon} />
            </TouchableOpacity>
          }
          editable={false}
        />

      </View>
    </SafeFlexView>
  )
}

export default EditProfile