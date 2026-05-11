import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme ,Responsive} from "../../../libs";
import combineStyle from "../../../libs/combineStyle";
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
   },
   contentContainer: {
    paddingHorizontal: moderateScale(15),
    gap: moderateScale(16),
 
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
      flexDirection: 'row',
      justifyContent: 'center',
    },
    otpWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:"center",
      gap: moderateScale(8),
    },
    otpContainer: {
      width: moderateScale(50),
      height: moderateScale(50),
      borderWidth:moderateScale(1),
      borderColor:Theme.colors.lightTransparet,
      backgroundColor:Theme.colors.lightTransparet,
      borderRadius: Theme.borders.miniRadius+3,
      textAlign: 'center',
      textAlignVertical: 'center',
      ...combineStyle.text16Semi,
      justifyContent: "center",
      alignItems: "center",
    },

    btnContainer:{
      width: '100%',
      marginTop: moderateScale(10),
     },

});