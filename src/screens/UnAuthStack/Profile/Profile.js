import { View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeFlexView } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import { ProfileData } from '../../../utils/export'
import { SvgXml } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import { eye, go } from '../../../assets/Svgs'
import { images } from '../../../assets/images'
import AccountModal from '../../../components/AccountModal/AccountModal'
import { useDispatch } from 'react-redux'
import { dispatchisAuth, dispatchOnbording } from '../../../redux/slices/userSlice'
import { Routes } from '../../../navigation/Routes'
import { useTranslation } from 'react-i18next'

const Profile = ({ navigation }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const[deleteAccountVisible, setDeleteAccountVisible] = useState(false);

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(dispatchisAuth(false));
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.AuthStack }],
    });
    setVisible(false);
  }

  const deleteAccount = () => {
    dispatch(dispatchisAuth(false));
    dispatch(dispatchOnbording(false));
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.AuthStack }],
    });
    setDeleteAccountVisible(false);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.ItemContainer, item.titleKey === 'Profiles.logout' && { borderBottomWidth: 0 }]} activeOpacity={0.7} onPress={() => { item.titleKey === 'Profiles.logout' ? setVisible(true) : item.titleKey === 'Profiles.deleteAccount' ? setDeleteAccountVisible(true) : navigation.navigate(item.route) }}>
      <SvgXml xml={item.icon} width={moderateScale(24)} height={moderateScale(24)} />
      <NativeText style={styles.ItemText} value={t(item.titleKey)} />
      {
        item.titleKey !== 'Profiles.logout' && (
          <SvgXml xml={go} width={moderateScale(24)} height={moderateScale(24)} style={styles.goIcon} />
        )
      }
    </TouchableOpacity>
  );


  return (
    <SafeFlexView top={false}>
      <NativeHeader title={t('ProfileScreen.title')} />
      <View style={styles.main}>

        <View style={styles.profileContainer}>
          <Image
            source={images.user}
            style={styles.userImage}
          />
          <NativeText style={styles.userName} value={t('ProfileScreen.userName')} />
        </View>

        <View style={styles.SkillContainer}>
          <View style={styles.SkillBox}>
            <NativeText style={styles.SkillHeading} value={t('SetupProfile.skillLevel')} />
            <NativeText style={styles.SkillValue} value={t('SetupProfile.intermediate')} />
          </View>
          <View style={styles.SkillBox}>
            <NativeText style={styles.SkillHeading} value={t('ProfileScreen.preference')} />
            <NativeText style={styles.SkillValue} value={t('SetupProfile.skiing')} />
          </View>
        </View>

        <FlatList
          data={ProfileData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />

        <AccountModal
          visible={visible}
          onClose={() => setVisible(false)}
          svgXml={eye}
          title={t('ProfileScreen.logoutTitle')}
          description={t('ProfileScreen.logoutDescription')}
          buttonTitle={t('ProfileScreen.logoutConfirm')}
          onPress={() => { logout() }}
        />
        <AccountModal
          visible={deleteAccountVisible}
          onClose={() => setDeleteAccountVisible(false)}
          svgXml={eye}
          title={t('ProfileScreen.deleteAccountTitle')}
          description={t('ProfileScreen.deleteAccountDescription')}
          buttonTitle={t('ProfileScreen.deleteAccountConfirm')}
          onPress={() => { deleteAccount() }}
        />

      </View>
    </SafeFlexView>
  );
};

export default Profile;