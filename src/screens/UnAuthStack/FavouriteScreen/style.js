import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        gap:moderateScale(10),
        // paddingBottom:moderateScale(70)
    },
    scrollContainer:{
       flex:1,
        gap:moderateScale(10),
        paddingHorizontal:moderateScale(15),
       

    }
})