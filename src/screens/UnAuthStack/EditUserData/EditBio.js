import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { NativeButton, NativeInput, SafeFlexView, } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../../libs'
import { useTranslation } from 'react-i18next'

const EditBio = () => {
  const { t } = useTranslation();
  const[bio,setbio]=useState("I love skiing with friends and exploring");
  return (
   <SafeFlexView top={false}>
<NativeHeader title={t('EditBio.title')} back={true} />
<TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >

<View style={styles.main}>
<NativeInput
label={t('EditBio.label')}
placeholder={t('EditBio.placeholder')}
placeholderTextColor={Theme.colors.smokeyGray}
value={bio}
onChangeText={(text)=>setbio(text)}
ContainerStyle={{marginTop:moderateScale(20)}}
inputContainerStyle={styles.bioContainer}
multiline={true}
/>

<NativeButton
title={t('EditBio.updateButton')}
onPress={()=>{console.log("save")}}
containerStyle={styles.button}
/>
</View>

</TouchableWithoutFeedback>

   </SafeFlexView>
  )
}

export default EditBio