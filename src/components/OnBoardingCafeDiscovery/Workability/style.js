import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:moderateScale(24)
    },
    textContainer:{
        paddingTop:moderateScale(20),
        gap:moderateScale(14),
        alignItems:'center'
    },
    buttonContainer:{
        borderRadius:moderateScale(2000),
        width:"100%"
    }

});