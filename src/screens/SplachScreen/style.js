import { moderateScale } from "react-native-size-matters";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
justifyContent:"center",
        alignItems: 'center',
    },
    logoContainer:{
marginTop:moderateScale(50),
    },
    titleContainer:{
        alignItems:'center',
        marginTop:"auto",
        bottom:moderateScale(180),
    }

})