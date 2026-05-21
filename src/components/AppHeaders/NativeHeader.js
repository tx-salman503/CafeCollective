import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../libs'
import NativeText from '../AppTexts/NativeText'
import { SvgXml } from 'react-native-svg'
import { backBlack } from '../../assets/Svgs'
import { useNavigation } from '@react-navigation/native'
import combineStyle from '../../libs/combineStyle'


function NativeHeader({ title, back = false,isoBorder=false ,onback}) {
  const navigation = useNavigation()

  return (
    <View style={[styles.headerContainer, isoBorder && {borderBottomWidth:1,borderColor:Theme.colors.lightTransparet,   minHeight : moderateScale(55),}]}>
      {back && (
        <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={10}
        onPress={() => { onback ? onback() : navigation.goBack(); }}
          style={styles.backButton}
        >
          <SvgXml xml={backBlack} width={48} height={48} />
        </TouchableOpacity>
      )}
      <NativeText style={[styles.title, {...combineStyle.text20Bold,}]} value={title}/>
    </View>
  )
}

export default NativeHeader

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: moderateScale(48),
    // backgroundColor:"transparent"

  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    // color: Theme.colors.white,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: moderateScale(0),
  },
})