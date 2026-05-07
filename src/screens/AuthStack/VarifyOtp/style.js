import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme ,Responsive} from "../../../libs";
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
   header: {
    width: '100%',
    height: moderateScale(131),
    alignItems: 'center',
    marginTop: moderateScale(50),
   },
   main:{
    flex:1,
    paddingHorizontal: moderateScale(20),
   },
   title:{
    fontSize: AppFonts.h4,
    color: Theme.colors.black,
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(4),
   },
   subtitle:{
    fontSize: AppFonts.t1,
    color: Theme.colors.black,
    fontFamily: Theme.fontFamily.poppinsMedium,
    paddingHorizontal: moderateScale(4),

   },
   btnContainer:{
      position:"absolute",
      bottom: moderateScale(75),
      width: '100%',
      justifyContent:"center",
      alignItems:"center",
     },
     btnStyle:{
      fontSize: AppFonts.h6,
      fontFamily: Theme.fontFamily.poppinsBold,
      color:Theme.colors.white,
   },
   row:{
      flexDirection: 'row',
      alignItems: 'center',
   
   },
   otpcontainer: {
      marginTop: moderateScale(20),
      marginBottom: moderateScale(8),
      flexDirection: 'row',
      justifyContent: 'center',
    },
    otpWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: moderateScale(8),
    },
    otpContainer: {
      width: moderateScale(46),
      height: moderateScale(50),
      borderRadius: Theme.borders.miniRadius,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: Theme.colors.inputback,
      fontFamily: Theme.fontFamily['Poppins-SemiBold'],
      justifyContent: "center",
      alignItems: "center",
    },

    resendContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: moderateScale(7),

      // marginTop: moderateScale(12),
    },
  
    resendText: {
      fontSize: AppFonts.t3,
      fontFamily: Theme.fontFamily.poppinsMedium,
      color: Theme.colors.black,
    },
  
    resendLink: {
      fontSize: AppFonts.t3,
      fontFamily: Theme.fontFamily.poppinsSemiBold,
      color: Theme.colors.navyBlue,
      // marginLeft: 4,
    },
  
    timerText: {
      fontSize: AppFonts.t3,
      fontFamily: Theme.fontFamily.poppinsSemiBold,
      color: Theme.colors.raisinBlack,
      // marginLeft: 6,
    },
   


});