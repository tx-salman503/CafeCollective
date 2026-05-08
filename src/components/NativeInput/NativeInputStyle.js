// NativeInputStyles.js
import {StyleSheet} from 'react-native';

import {Theme, Responsive} from '../../libs';
import { moderateScale } from 'react-native-size-matters';
import combineStyle from '../../libs/combineStyle';

const {AppFonts, getWidth, getHeight} = Responsive;
const {sizeMatter}=Responsive

const styles = StyleSheet.create({
 
   input: {
      padding: 0,
      margin: 0,
      // fontFamily: body.regular,
      minHeight: sizeMatter.moderateScale(56),
      flex: 1,
      color: Theme.colors.white,
      fontSize: AppFonts.h6,

    },
  errorText: {
    color: "red",
    marginLeft: getWidth(2),
    marginTop: getHeight(0.4),
    fontSize: moderateScale(10),
    fontFamily:Theme.fontFamily.GlaxinRegular,
    minHeight: moderateScale(12), // Reserve space for error text
  },
   inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderColor: Theme.colors.lightTransparet,
      borderWidth: sizeMatter.moderateScale(1),
      borderRadius: Theme.borders.miniMediumRadius,
      minHeight: sizeMatter.moderateScale(50),
      paddingHorizontal: sizeMatter.scale(12),
      backgroundColor: Theme.colors.lightTransparet,
      width:"100%",
      // marginTop: moderateScale(2),
    },
     leftIcon: {
      marginRight: sizeMatter.scale(10),
    },
    inputLabel:{
 ...combineStyle.text16Mid,
      paddingHorizontal: moderateScale(4),
      marginBottom: moderateScale(5),
    }
});

export default styles;
