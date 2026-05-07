import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow:"hidden"
    },
    characterImg: {
        position: 'absolute',
        bottom: moderateScale(-450),
        right: -width * 0.10,
        width: width * 0.96,
        height: height * 0.90,
        resizeMode: 'cover',
    },
    mcgBox: {
        width: moderateScale(290),
        height: moderateScale(300),
        position: "absolute",
        left: moderateScale(50),
        bottom: moderateScale(228),
        // backgroundColor:"red",
        
    },
    messagebox: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    txtBox:{
        width:moderateScale(237),
        height:moderateScale(169),
        position:"absolute",
        left: moderateScale(85),
        bottom: moderateScale(315),
        // backgroundColor:"red",
        // justifyContent: "center",
        // paddingHorizontal:moderateScale(8)
    },
    txtarea:{
        color:"black",
        textAlign: "center",
        fontSize:moderateScale(23)
        // lineHeight: moderateScale(17)
    }
});