import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme ,Responsive} from "../../../libs";
import combineStyle from "../../../libs/combineStyle";
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
   container:{
      flex:1,
      
   },
   contentContainer: {
    paddingTop: moderateScale(10),
  paddingHorizontal: moderateScale(20),
  gap: moderateScale(16),
  paddingBottom: moderateScale(30),
},
   main:{
    flex:1,
    gap:moderateScale(27)
    
   },
  


});