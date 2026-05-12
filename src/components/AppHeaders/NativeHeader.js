import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../libs'
import NativeText from '../AppTexts/NativeText'
import { SvgXml } from 'react-native-svg'
import { backBlack } from '../../assets/Svgs'
import { useNavigation } from '@react-navigation/native'

/**
 * NativeHeader
 * Props:
 *  - title: string
 *  - back: bool — show back button
 */
function NativeHeader({ title, back = false }) {
  const navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      {back && (
        <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={10}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <SvgXml xml={backBlack} width={48} height={48} />
        </TouchableOpacity>
      )}
      <NativeText style={styles.title}>{title}</NativeText>
    </View>
  )
}

export default NativeHeader

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.navyBlue,
    minHeight: moderateScale(48),
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    color: Theme.colors.white,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: moderateScale(0),
  },
})