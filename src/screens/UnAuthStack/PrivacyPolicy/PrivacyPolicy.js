import { ScrollView, View } from 'react-native'
import React from 'react'
import {  SafeFlexView, } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'

import NativeText from '../../../components/AppTexts/NativeText'
import { useTranslation } from 'react-i18next'

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
   <SafeFlexView top={false}>
<NativeHeader title={t('PrivacyPolicy.title')} back={true} />
<View style={styles.main}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <NativeText style={styles.text} value={t('PrivacyPolicy.content1')} />
<NativeText style={styles.text} value={t('PrivacyPolicy.content2')} />
<NativeText style={styles.text} value={t('PrivacyPolicy.content3')} />
<NativeText style={styles.text} value={t('PrivacyPolicy.content4')} />
    </ScrollView>

</View>

   </SafeFlexView>
  )
}

export default PrivacyPolicy