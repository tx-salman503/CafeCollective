import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    characterImg: {
        position: 'absolute',
        bottom: 0,
        left: -width * 0.25,
        width: width * 1.2,    // width baro
        height: height * 0.80,
        resizeMode: 'contain',
    },
    mcgBox: {
        width: moderateScale(192),
        height: moderateScale(192),
        position: "absolute",
        right: moderateScale(40),
        top: moderateScale(100),
    },
    messagebox: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    txtBox:{
        width:moderateScale(176),
        height:moderateScale(58),
        position:"absolute",
        right:moderateScale(40),
        top:moderateScale(165),
        paddingHorizontal:moderateScale(10)
    },
    txtarea:{
        color:"black"
    }
});