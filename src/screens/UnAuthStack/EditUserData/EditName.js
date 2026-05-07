import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { NativeButton, NativeInput, SafeFlexView, } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'
import { moderateScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'

const EditName = () => {
  const { t } = useTranslation();
  const[name,setname]=useState("Salman");
  return (
   <SafeFlexView top={false}>
<NativeHeader title={t('EditName.title')} back={true} />
<TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >

<View style={styles.main}>
<NativeInput
label={t('EditName.label')}
value={name}
onChangeText={(text)=>setname(text)}
ContainerStyle={{marginTop:moderateScale(20)}}
/>

<NativeButton
title={t('EditName.saveButton')}
onPress={()=>{console.log("save")}}
containerStyle={styles.button}
/>
</View>

</TouchableWithoutFeedback>

   </SafeFlexView>
  )
}

export default EditName