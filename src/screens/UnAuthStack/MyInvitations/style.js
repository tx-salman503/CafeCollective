import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";
import combineStyle from "../../../libs/combineStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(15),
        paddingBottom: moderateScale(78),
        flexGrow: 1,
        gap: moderateScale(12),
    },

    sectionTitle: {
        ...combineStyle.text20Bold,
    },

    card: {
        marginBottom: moderateScale(8),
    },
    cardContent: {
        backgroundColor: Theme.colors.lightTransparet,
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(14),
        paddingVertical: moderateScale(4),
        overflow: "hidden",
    },

    separator: {
        height: moderateScale(1),
        backgroundColor: Theme.colors.lightTransparet,
    },

    statRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
    },
    rowLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: moderateScale(10),
    },
    rowLabel: {
        ...combineStyle.text16Mid,
    },
    rowValue: {
        ...combineStyle.text24Bold,
    },

    personRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
        gap: moderateScale(12),
    },

    avatar: {
        width: moderateScale(42),
        height: moderateScale(42),
        backgroundColor: Theme.colors.white,
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.white,
        borderRadius: moderateScale(121),
        
        alignItems: "center",
        justifyContent: "center",
    },
    avatarText: {
        ...combineStyle.text16Semi,
        color: Theme.colors.black,
    },

    personInfo: {
        flex: 1,
        gap: moderateScale(2),
    },
    personName: {
        ...combineStyle.text14Bold,
        color: Theme.colors.white,
    },
    personTime: {
        ...combineStyle.text10Regular,
        color: Theme.colors.placecHolderColor,
    },

    resendBtn: {
        borderWidth: moderateScale(1),
        backgroundColor: Theme.colors.white,
        borderColor: Theme.colors.white,
        borderRadius: moderateScale(100),
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(6),
    },
    resendBtnText: {
        ...combineStyle.text12Bold,
        color: Theme.colors.black,
    },

    acceptedText: {
        ...combineStyle.text14Semi,
        color: Theme.colors.white,
    },
    InvitFrindsContainer:{
        padding:moderateScale(16),
        backgroundColor:Theme.colors.black,
        gap:moderateScale(16),
        borderRadius:moderateScale(16),
    },
    shearContainer:{
        width:moderateScale(50),
        height:moderateScale(50),
        borderRadius:moderateScale(20),
        backgroundColor:"#FFFFFF1F",
        justifyContent:"center",
        alignItems:"center"
    }
});