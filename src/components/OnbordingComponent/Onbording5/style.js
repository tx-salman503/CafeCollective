import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    characterImg: {
        position: 'absolute',
        bottom: moderateScale(40),
        left: -width * 0.43,
        width: width * 1.5,    // width baro
        height: height * 0.75,
        resizeMode: 'contain',
    },
    mcgBox: {
        width: moderateScale(200),
        height: moderateScale(200),
        position: "absolute",
        right: moderateScale(15),
        top: moderateScale(25),
    },
    messagebox: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    txtBox:{
        width:moderateScale(176),
        height:moderateScale(100),
        position:"absolute",
        right:moderateScale(33),
        top:moderateScale(75),
        // backgroundColor:"red",
        // padding:moderateScale(5)
    },
    txtarea:{
        color:"black",
        textAlign:"center"
    }
});