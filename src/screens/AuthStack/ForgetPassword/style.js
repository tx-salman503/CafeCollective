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
   },
   subtitle:{
    fontSize: AppFonts.t1,
    color: Theme.colors.black,
    fontFamily: Theme.fontFamily.poppinsMedium,
   },
   btnContainer:{
      position:"absolute",
      bottom: moderateScale(75),
      width: '100%',
      justifyContent:"center",
      alignItems:"center",
     },
     btnStyle:{
      fontSize: moderateScale(16),
      fontFamily: Theme.fontFamily.poppinsBold,
      color:Theme.colors.white,
   },
   


});