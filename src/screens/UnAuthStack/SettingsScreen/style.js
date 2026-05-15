import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(20),
    },
    section: {
        // marginBottom: moderateScale(24),
        
    },
    sectionLabel: {
        marginBottom:moderateScale(20),
        color: Theme.colors.white,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:moderateScale(10),
        width:"100%",
        height:moderateScale(56),
        borderRadius: moderateScale(12),
        paddingHorizontal:moderateScale(20),
        borderWidth: 1,
        backgroundColor:Theme.colors.lightTransparet,
        borderColor: Theme.colors.lightTransparet,
        marginBottom:moderateScale(20)
    },
    listItemText: {
        // marginLeft: moderateScale(12),
        // flex: 1,
        // color: Theme.colors.white,
    },
    endContainer:{
        position:"absolute",
        right:moderateScale(10)
    }
});