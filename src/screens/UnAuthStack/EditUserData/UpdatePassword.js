import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { NativeButton, NativeInput, SafeFlexView, } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../../libs'
import { useTranslation } from 'react-i18next'

const UpdatePassword = () => {
  const { t } = useTranslation();
  const[oldPassword,setoldPassword]=useState("");
  const[newPassword,setnewPassword]=useState("");
  const[confirmPassword,setconfirmPassword]=useState("");
  return (
   <SafeFlexView top={false}>
<NativeHeader title={t('UpdatePassword.title')} back={true} />
<TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >

<View style={styles.main}>
<NativeInput
ContainerStyle={{marginTop:moderateScale(20)}}
label={t('UpdatePassword.oldPasswordLabel')}
secureTextEntry={true}
placeholder={t('UpdatePassword.oldPasswordPlaceholder')}
placeholderTextColor={Theme.colors.smokeyGray}
inputContainerStyle={styles.btnContainer}
value={oldPassword}
onChangeText={(text)=>setoldPassword(text)}
multiline={true}
/>
<NativeInput
label={t('UpdatePassword.newPasswordLabel')}
secureTextEntry={true}
placeholder={t('UpdatePassword.newPasswordPlaceholder')}
placeholderTextColor={Theme.colors.smokeyGray}
inputContainerStyle={styles.btnContainer}
value={newPassword}
onChangeText={(text)=>setnewPassword(text)}
multiline={true}
/>
<NativeInput
label={t('UpdatePassword.confirmPasswordLabel')}
secureTextEntry={true}
placeholder={t('UpdatePassword.confirmPasswordPlaceholder')}
placeholderTextColor={Theme.colors.smokeyGray}
value={confirmPassword}
onChangeText={(text)=>setconfirmPassword(text)}
inputContainerStyle={styles.btnContainer}
multiline={true}
/>

<NativeButton
title={t('UpdatePassword.updateButton')}
onPress={()=>{console.log("save")}}
containerStyle={styles.button}  
/>
</View>

</TouchableWithoutFeedback>

   </SafeFlexView>
  )
}

export default UpdatePassword