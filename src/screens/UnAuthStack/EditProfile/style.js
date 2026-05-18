import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(20),
        gap: moderateScale(16),
        paddingBottom: moderateScale(30),
    },
    imgContainer: {

        alignItems: "center",
        gap: moderateScale(28),
        paddingTop: moderateScale(20)
    },
    profileContainer: {
        width: moderateScale(124),
        borderWidth: moderateScale(1),
        height: moderateScale(124),
        borderColor: Theme.colors.white,
        borderRadius: moderateScale(131),
        overflow: "hidden",

    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    camera: {
        position: "absolute",
        right: moderateScale(100),
        top: moderateScale(110)
    },
    inputContainer: {
        flex: 1,
    },
    btnContianer: {
        // flex:1,
        alignItems: "center",
        marginTop: "auto",
        gap: moderateScale(18)
    }
});