import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme, Responsive } from "../../../libs";
import combineStyle from "../../../libs/combineStyle";
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
   container: {
      flex: 1,


   },
   contentContainer: {
      paddingHorizontal: moderateScale(15),
      gap: moderateScale(16),
      paddingBottom: moderateScale(30),
   },
   main: {
      flex: 1,

   },
   btnContainer: {
      width: '100%',
      marginTop: moderateScale(10),
   },
   googleBtn: {
      ...combineStyle.text16Mid,
      color: "#334155"
   },
   deviderText: {
      fontSize: AppFonts.t3,
      color: Theme.colors.smokeyGray,
   },
   AppleButton:
   {
      ...combineStyle.text16Mid,
      color: "white"
   },
   checkBox: {
      width: moderateScale(20),
      height: moderateScale(20),
      borderWidth: 2,
      borderColor:  Theme.colors.lightTransparet,
      backgroundColor: Theme.colors.lightTransparet,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      borderRadius: 4, // optional
   },
  tick: {
  width: moderateScale(5),
  height: moderateScale(9),
  borderRightWidth: moderateScale(2),
  borderBottomWidth: moderateScale(2),
  borderColor: 'white',
  transform: [{ rotate: '45deg' }],
  marginBottom: moderateScale(1),  // nudge up so it sits centered vertically
},



});