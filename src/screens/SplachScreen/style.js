import { moderateScale } from "react-native-size-matters";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
justifyContent:"center",
        alignItems: 'center',
    },
    logoContainer:{
justifyContent:"center",
        alignItems: 'center',
        textAlign:"center",
        gap:moderateScale(10)
    },
    titleContainer:{
        alignItems:'center',
        marginTop:"auto",
        bottom:moderateScale(180),
    }
    
})