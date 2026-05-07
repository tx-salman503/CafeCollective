import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Theme } from '../../libs';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../AppTexts/NativeText';
import { SvgXml } from 'react-native-svg';
import { Bell, eye, whiteBackSvg } from '../../assets/Svgs';
import { useNavigation } from '@react-navigation/native';


function HomeHeader({bellPress}) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View>
      <NativeText style={styles.title} value={"SkiConnect"}/>
      </View>
      <View style={styles.btnWrap} >
        <View style={styles.VisibalContainer}>
<View style={styles.dot}/>
<NativeText style={styles.VisibleText} value={"Visible"}/>
<TouchableOpacity activeOpacity={0.7} >
  <SvgXml xml={eye} width={moderateScale(20)} height={moderateScale(20)}/>
</TouchableOpacity>
        </View>
<TouchableOpacity activeOpacity={0.7} onPress={bellPress} >
<SvgXml xml={Bell} width={moderateScale(40)} height={moderateScale(40)}/>
</TouchableOpacity>
      </View>
     
    </View>
  );
}

export default HomeHeader;
 const styles = StyleSheet.create({
  headerContainer: {
    flexDirection:"row",
    height: moderateScale(110),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.navyBlue,
    paddingTop: moderateScale(25),
    paddingHorizontal: moderateScale(20),
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
  },
  VisibalContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height: moderateScale(40),
    width: moderateScale(100),
    backgroundColor: Theme.colors.white,
    borderRadius: moderateScale(8),
    gap: moderateScale(10),
  },
  btnWrap:{
    flexDirection:"row",
    gap: moderateScale(10),
    alignItems:"center",
    justifyContent:"center",
  },
  VisibleText:{
    fontSize: moderateScale(12),
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    color: Theme.colors.navyBlue,
    marginTop : moderateScale(3),
  },
  dot:{
    width: moderateScale(6),
    height: moderateScale(6),
    backgroundColor: Theme.colors.dot,
    borderRadius: moderateScale(5),
  },
});