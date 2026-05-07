import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme ,Responsive} from "../../../libs";
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
   header: {
    width: '100%',
    height: moderateScale(131),
    alignItems: 'center',
    marginVertical: moderateScale(20),
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
   },
   subtitle:{
    fontSize: AppFonts.t1,
    color: Theme.colors.black,
    fontFamily: Theme.fontFamily.poppinsMedium,
   },
   row:{
    marginVertical: moderateScale(10),
    flexDirection: 'row',
    gap: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
   },
   forgotPassword:{
      fontSize: AppFonts.t4,
      color: Theme.colors.navyBlue,
      fontFamily: Theme.fontFamily.poppinsMedium,
      textAlign: 'right',
      marginTop: moderateScale(5),
      textDecorationLine:"underline"
   },
   btnStyle:{
      fontSize: AppFonts.h6,
      fontFamily: Theme.fontFamily.poppinsBold,
      color:Theme.colors.white,
   },
   dontHaveAccount:{
      fontSize: AppFonts.t3,
      color:Theme.colors.smokeyGray,
   },
   signup:{
      fontSize: AppFonts.t3,
      color:Theme.colors.navyBlue,
      fontFamily: Theme.fontFamily.poppinsBold,
      alignSelf:'center',
      marginTop: moderateScale(5),

   },
   btnContainer:{
    marginTop: moderateScale(25),
    width: '100%',
   },
   devider:{
      width: moderateScale(86),
      height: moderateScale(0.9),
      backgroundColor: Theme.colors.smokeyGray,
   },
   deviderText:{
      fontSize: AppFonts.t3,
      color: Theme.colors.smokeyGray,
   }
  


});