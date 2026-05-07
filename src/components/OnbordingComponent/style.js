import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../libs";
export const styles = StyleSheet.create({
    imgcontainer: {
        flex: 0.6,
        //   backgroundColor:'red',
        justifyContent: 'flex-end',
    },
    img: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
        // alignSelf: 'flex-end',
    },
    txtContainer: {
        flex: 0.4,
        alignItems: "center",
        gap:moderateScale(60)
    },
    badge: {
        borderWidth: 1,
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: "#FFFFFF1F",
        width: moderateScale(245),
        height: moderateScale(48),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: moderateScale(100),
        marginTop:moderateScale(30)
    },
    subtxt: {
width:moderateScale(306),
textAlign:"center"
    }
})