import React from 'react'
import { SafeFlexView } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'
import { View } from 'react-native'
import NativeText from '../../../components/AppTexts/NativeText'
import { useTranslation } from 'react-i18next'

const Notification = () => {
  const { t } = useTranslation();
  return (
    <SafeFlexView  top={false}>
    <NativeHeader title={t('Notifications.title')} back={true} />

<View style={styles.main}>
    <NativeText
    value={t('Notifications.noNotifications')}
    style={styles.text}
    />
</View>
   </SafeFlexView>
  )
}

export default Notification