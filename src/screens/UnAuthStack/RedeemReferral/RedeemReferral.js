import { View } from 'react-native'
import React, { useState } from 'react'
import {  MessageCard, NativeInput, SafeFlexView,  } from '../../../components'
import { styles } from './style'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { Theme } from '../../../libs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScale } from 'react-native-size-matters'
import { SvgXml } from 'react-native-svg'
import { GiftSvg, referalSvg } from '../../../assets/Svgs'
import { Routes } from '../../../navigation/Routes'



const RedeemReferral = ({navigation}) => {

    const [referal,setRefral]=useState("")
 

  return (
    <SafeFlexView>
      <BackBtnHeader />
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
      >
        <NativeText
          value="Redeem Referral"
          style={[combineStyle.text30Bold, { textAlign: 'center' }]}
        />
        <NativeText
          value={"Enter friends referral code below to\nunlock 50 beans instantly"}
          style={[
            combineStyle.text16Regular,
            { textAlign: 'center', color: Theme.colors.ligtGray, marginBottom: moderateScale(27) },
          ]}
        />

        <SvgXml xml={GiftSvg} width={moderateScale(124)} height={moderateScale(124)} style={{marginBottom:moderateScale(40)}}/>

        <NativeInput 
        value={referal}
        label="Enter Referral Code"
        onChangeText={setRefral}
        leftComponent={<SvgXml xml={referalSvg} width={moderateScale(24)} height={moderateScale(24)}/>}
        placeholder="Enter Referral Code"
        />
        <MessageCard 
        text='Unlock My Bonus'
        isBtn
        touchable
        containerStyle={{marginTop:moderateScale(10)}}
        onPress={()=>{navigation.navigate(Routes.ReferalReward)}}
        />
       
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default RedeemReferral