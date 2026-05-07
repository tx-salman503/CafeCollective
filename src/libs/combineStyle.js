import { StyleSheet } from 'react-native';
import Responsive, { AppFont } from './responsive';
import { Theme } from '.';
import { moderateScale } from 'react-native-size-matters';

const { getWidth, getHeight, AppFonts } = Responsive;

const combineStyle = StyleSheet.create({

 rowStyle:{
  flexDirection:"row",
  alignItems:"center", 
 },
 text28:{
    fontSize:moderateScale(28),
    fontFamily:Theme.fontFamily.GlaxinSemiBold,
    color:Theme.colors.white,
 },
 text18Semi:{
   fontSize:moderateScale(18),
   fontFamily:Theme.fontFamily.GlaxinSemiBold,
   color:Theme.colors.white,
 },
 text24Mid:{
   fontSize:moderateScale(24),
   fontFamily:Theme.fontFamily.GlaxinMedium,
   color:Theme.colors.white,
 },
 text24Semi:{
  fontSize:moderateScale(24),
  fontFamily:Theme.fontFamily.GlaxinSemiBold,
  color:Theme.colors.white,
 },
 text20Semi:{
  fontSize:moderateScale(20),
  fontFamily:Theme.fontFamily.GlaxinSemiBold,
  color:Theme.colors.black,
 }

});

export default combineStyle;
