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
  paddingHorizontal: moderateScale(15),
  gap: moderateScale(16),
  paddingBottom: moderateScale(30),
},
   main:{
    flex:1,
    
   },
   btnContainer:{
    width: '100%',
    marginTop: moderateScale(10),
   },
   googleBtn:{
     ...combineStyle.text16Mid,
     color:"#334155"
   },
   deviderText:{
      fontSize: AppFonts.t3,
      color: Theme.colors.smokeyGray,
   },
   AppleButton:
   {
       ...combineStyle.text16Mid,
     color:"white",
   }
  


});