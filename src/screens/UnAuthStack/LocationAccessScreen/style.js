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
  paddingHorizontal: moderateScale(30),
  gap: moderateScale(16),
  paddingBottom: moderateScale(30),
},
   main:{
    flex:1,
    paddingTop:moderateScale(35),
    gap:moderateScale(27)
    
   },
   textBox:{
    alignItems:"center",
    gap:moderateScale(27)

   },
   badg:{
    ...combineStyle.rowStyle,
    gap:moderateScale(8),
    paddingHorizontal:moderateScale(18),
    height:moderateScale(50),
    width:"100%",
    borderWidth:1,
    borderRadius:moderateScale(1000),
    borderColor:Theme.colors.lightTransparet,
    backgroundColor:Theme.colors.lightTransparet,
    marginTop:moderateScale(17),
    

   },
   btnContainer:{
    width: '100%',
    marginTop: moderateScale(10),
   },
  


});