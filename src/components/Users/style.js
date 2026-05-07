import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme ,Responsive} from '../../libs';
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
label:{
    fontSize:AppFonts.t1,
    fontFamily:Theme.fontFamily.poppinsSemiBold,
    color:Theme.colors.black
},
img:{
    width:moderateScale(53),
    height:moderateScale(53),
    borderRadius:moderateScale(30),
},
imgContainer:{
   justifyContent:"center",
   gap:moderateScale(10)
},
name:{
    fontSize:AppFonts.t2,
    fontFamily:Theme.fontFamily.poppinsMedium,
    textAlign:"center"
    
 
}

   
});