import { View, } from 'react-native'
import React from 'react'
import { SafeFlexView } from '../../../components'
import SearchHeader from '../../../components/SearchHeader/SearchHeader'
import { styles } from './style'
import combineStyle from '../../../libs/combineStyle'
import { moderateScale } from 'react-native-size-matters'
import NativeText from '../../../components/AppTexts/NativeText'
import { AllCafeArray, } from '../../../utils/export'
import CafeCard from '../../../components/CafeCard/CafeCardList'
import { SvgXml } from 'react-native-svg'
import { Lock } from '../../../assets/Svgs'
const AllCafe = () => {
    return (
        <SafeFlexView>
            <SearchHeader />
            <View style={styles.container}>

                <View style={[combineStyle.rowStyle, { justifyContent: "space-between", paddingHorizontal: moderateScale(5) }]}>
                    <NativeText value={"Results"} style={combineStyle.text10Bold} />
                    <View style={styles.line} />
                    <NativeText value={"3 Cafes Found"} style={combineStyle.text10Bold} />
                </View>
                <CafeCard data={AllCafeArray} scrollEnabled={false} />

            </View>
            <View style={styles.lockContainer}>
                <SvgXml xml={Lock} width={moderateScale(64)} height={moderateScale(64)} />
                <NativeText value={"Locked Content"} style={combineStyle.text24Bold} />
                <NativeText value={"Discover more cafes to see all\ncafes in Toronto"} style={[combineStyle.text16Bold,{textAlign:"center"}]} />

            </View>
        </SafeFlexView>
    )
}

export default AllCafe