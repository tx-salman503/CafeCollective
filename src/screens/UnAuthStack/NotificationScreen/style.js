import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(20),
        gap: moderateScale(16),
        marginTop: moderateScale(20)
    },
    label: {
        padding: moderateScale(16),
        borderWidth: 1,
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(12),
        gap: moderateScale(16),
    },

});