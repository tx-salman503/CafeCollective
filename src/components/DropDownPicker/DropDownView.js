import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { AppIcons, Theme } from '../../libs'
import { AppFont } from '../../libs/responsive'
import NativeText from '../AppTexts/NativeText'
import HeadingText from '../AppTexts/HeadingText'
import combineStyle from '../../libs/combineStyle'

function DropDownView({category,onPress,selectionTxt,typeText}) {

  return (
    <View>
      <HeadingText body={typeText} body2="*" />
      <TouchableOpacity style={[combineStyle.pickerWrap, {
        borderColor: category?.length > 0 ? Theme.colors.darkBlue
          : Theme.colors.lightMist
      }]} onPress={onPress}>
        <NativeText style={[combineStyle.expText, {
          color: category?.length > 0 ? Theme.colors.darkBlue
            : Theme.colors.coolGray
        }]}>{category ? category : selectionTxt}</NativeText>
        <AppIcons.DropDown
          size={AppFont.commonFont.lessMedium}
          color={category?.length > 0 ? Theme.colors.black : Theme.colors.coolGray}
        />
      </TouchableOpacity>
    </View>
  )
}

export default DropDownView