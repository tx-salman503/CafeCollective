import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeFlexView, } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'

import NativeText from '../../../components/AppTexts/NativeText'
import { HelpCenterData } from '../../../utils/export'
import { SvgXml } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'

const HelpCenter = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("FAQ");

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.rowContainer} activeOpacity={0.7} onPress={() => {}}>
            <SvgXml xml={item.icon} width={moderateScale(24)} height={moderateScale(24)} />
            <NativeText style={[styles.text,{marginBottom:moderateScale(5)}]} value={t(item.titleKey)} />
        </TouchableOpacity>
    )

    return (
        <SafeFlexView top={false}>
            <NativeHeader title={t('HelpCenterScreen.title')} back={true} />
            <View style={styles.main}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => setActiveTab("FAQ")}>
                        <NativeText style={[styles.label, activeTab === "FAQ" && styles.activeLabel]} value={t('HelpCenterScreen.faqTab')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveTab("Contact Us")}>
                        <NativeText style={[styles.label, activeTab === "Contact Us" && styles.activeLabel]} value={t('HelpCenterScreen.contactUsTab')} />
                    </TouchableOpacity>
                </View>


                {
                    activeTab === "FAQ" ?
                        <NativeText style={styles.text} value={t('HelpCenterScreen.faqContent')} />
                        :
                        <FlatList
                        data={HelpCenterData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        />
                }

            </View>

        </SafeFlexView>
    )
}

export default HelpCenter    