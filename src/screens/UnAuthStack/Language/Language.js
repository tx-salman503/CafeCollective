import { TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeButton, SafeFlexView, } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'

import NativeText from '../../../components/AppTexts/NativeText'
import { check, unCheck } from '../../../assets/Svgs'
import { SvgXml } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import i18n from '../../../translation/i18n'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchLanguage } from '../../../redux/slices/userSlice'

const Language = ({navigation}) => {
    const {language}=useSelector(state=>state.userReducer)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(language)

    

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language.value)
        i18n.changeLanguage(language.value)
        dispatch(dispatchLanguage(language.value));
    }
    return (
        <SafeFlexView top={false}>
            <NativeHeader title={t('Languages.title')} back={true} />
            <View style={styles.main}>
                <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => handleLanguageChange({value: 'en'})}>
                    <NativeText style={styles.text} value={t('Languages.english')} />
                    <SvgXml xml={selectedLanguage === 'en' ? check : unCheck} width={moderateScale(20)} height={moderateScale(20)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => handleLanguageChange({value: 'fr'})}>
                    <NativeText style={styles.text} value={t('Languages.french')} />
                    <SvgXml xml={selectedLanguage === 'fr' ? check : unCheck} width={moderateScale(20)} height={moderateScale(20)} />
                </TouchableOpacity>
<NativeButton title={t('Languages.saveButton')} onPress={() => navigation.goBack()} containerStyle={styles.button}

    />
            </View>

        </SafeFlexView>
    )
}

export default Language