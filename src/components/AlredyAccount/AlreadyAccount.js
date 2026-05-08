import { View,  TouchableOpacity } from 'react-native'
import React from 'react'
import combineStyle from '../../libs/combineStyle'
import NativeText from '../AppTexts/NativeText'
import { Theme } from '../../libs'

const AlreadyAccount = ({firstTxt,secondTxt,onPress}) => {
  return (
    <View style={combineStyle.rowStyle2}>
     <NativeText value={firstTxt} style={[combineStyle.text16Regular,{color:Theme.colors.darkGray}]}/>
     <TouchableOpacity onPress={onPress} hitSlop={6}>
       <NativeText value={secondTxt} style={[combineStyle.text16Regular]}/>
     </TouchableOpacity>
    </View>
  )
}

export default AlreadyAccount