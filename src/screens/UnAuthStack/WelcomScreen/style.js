import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";
export const styles = StyleSheet.create({
   container:{
      flex:1,
   },
   contentContainer: {
  gap: moderateScale(16),
},
   main:{
    flex:1,
    paddingTop:moderateScale(15),
    gap:moderateScale(27)
    
   },
   textBox:{
    alignItems:"center",
    gap:moderateScale(27)

   },
   badg:{
    gap:moderateScale(8),
    padding:moderateScale(12),
    width:"100%",
    borderWidth:1,
    borderRadius:moderateScale(8),
    borderColor:Theme.colors.lightTransparet,
    backgroundColor:Theme.colors.lightTransparet,

    

   },
   btnContainer:{
    width: '100%',
   },
   imgcontainer:{
      width: '100%',
      height: moderateScale(362),
     },
     innerContainer:{
      paddingHorizontal:moderateScale(20),
      gap:moderateScale(32)
     }


});