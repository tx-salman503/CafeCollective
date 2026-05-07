import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Theme } from '../../libs';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../AppTexts/NativeText';
import { SvgXml } from 'react-native-svg';
import { whiteBackSvg } from '../../assets/Svgs';
import { useNavigation } from '@react-navigation/native';


function NativeHeader({ title,back = false }) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {
        back?
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={styles.backButton}>
        <SvgXml xml={whiteBackSvg} width={40} height={40} />
      </TouchableOpacity>
        :
        null
      }
<NativeText style={styles.title}>{title}</NativeText>
    </View>
  );
}

export default NativeHeader;


 const styles = StyleSheet.create({
  headerContainer: {
    height: moderateScale(110),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.navyBlue,
    paddingTop: moderateScale(25),
  },
  title: {
    fontSize: moderateScale(19),
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    color: Theme.colors.white,
  },
  backButton:{
position:'absolute',
left:moderateScale(20),
top:moderateScale(48),
  }
});