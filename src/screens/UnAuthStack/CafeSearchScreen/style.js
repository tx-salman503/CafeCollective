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
      flex: 1,
      //   gap: moderateScale(16),
   },
   main: {
      flex: 1,

   },
   textBox: {
      alignItems: "center",
      gap: moderateScale(27)

   },
   badg: {
      ...combineStyle.rowStyle,
      gap: moderateScale(10),
      padding: moderateScale(16),
      width: "100%",
      borderWidth: 1,
      borderRadius: moderateScale(12),
      borderColor: Theme.colors.lightTransparet,
      backgroundColor: Theme.colors.lightTransparet,



   },
   btnContainer: {
      width: moderateScale(110),
      height:moderateScale(36),
      borderRadius:moderateScale(8),
      padding:0,
      
   },
   btnContainer2: {
      width: moderateScale(110),
      height:moderateScale(36),
      borderRadius:moderateScale(8),
      padding:0,
      
   },
   imgcontainer: {
      width: '100%',
      height: moderateScale(362),
      backgroundColor: "red"
   },
   innerContainer: {
      height: moderateScale(380),
      width: "100%",
      backgroundColor: "black",
      position: "absolute",
      bottom: moderateScale(0),
      borderTopLeftRadius: moderateScale(25),
      borderTopRightRadius: moderateScale(25),
      paddingHorizontal: moderateScale(20),
      gap: moderateScale(12),
      padding: moderateScale(30)
   },
   cafeImg: {
      width: moderateScale(56),
      height: moderateScale(56),
      resizeMode:"contain",
      borderRadius:moderateScale(8),
   },
   list: {
marginVertical:moderateScale(15)
   }


});