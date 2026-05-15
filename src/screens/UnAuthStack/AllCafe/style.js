import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: moderateScale(10),
        paddingHorizontal: moderateScale(15),
    },
    line: {
        width: moderateScale(210),
        height: moderateScale(1.5),
        borderRadius: moderateScale(10),
        backgroundColor: Theme.colors.white,
    },
    lockContainer:{
        width:"100%",
        height:moderateScale(305),
        backgroundColor:Theme.colors.black,
        borderTopLeftRadius:moderateScale(20),
        borderTopRightRadius:moderateScale(20),
        alignItems:"center",
        justifyContent:"center",
        gap:moderateScale(24),
    
    }
});