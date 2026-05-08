import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,                          // 0.4 → 0.25 (kam space)
        paddingTop: moderateScale(90),
        paddingHorizontal: moderateScale(15),
        alignItems: "center",

    },

    img: {
        // position: 'absolute',
        bottom: moderateScale(35),
        width: width * 0.96,
        height: height * 0.60,
        resizeMode: 'cover',
    },
    buttonConatiner: {
        width: "100%",
       marginTop:"auto",
       bottom:moderateScale(30)

    },
    buttonConatiner2: {
        borderRadius: moderateScale(100)
    },

});