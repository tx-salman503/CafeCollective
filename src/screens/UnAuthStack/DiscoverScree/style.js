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
  alignItems: "center",
  paddingHorizontal: moderateScale(20),
   },
   main: {
      flex: 1,
    

   },
   textBox: {
    flex:1,
    width: "100%",
    paddingTop: moderateScale(90),
      alignItems: "center",
      gap: moderateScale(27)

   },
   badg: {

      gap: moderateScale(10),
      padding: moderateScale(24),
      width: "100%",
      borderWidth: 1,
      borderRadius: moderateScale(12),
      borderColor: Theme.colors.lightTransparet,
      backgroundColor: Theme.colors.lightTransparet,



   },
   qualityCard: {
      width: '100%',
      marginTop: moderateScale(16),
   },
   btnContainer: {
 
  width:"100%",
  marginTop:"auto",
  bottom: moderateScale(30)
      
   },
  


});