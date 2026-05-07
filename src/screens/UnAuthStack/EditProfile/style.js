import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import { Responsive } from '../../../libs';
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
    main:{
        flex:1,
        paddingHorizontal: moderateScale(15),
        gap: moderateScale(10),
    },
    profileContainer:{
        alignItems:"center",
justifyContent:"center",   
marginVertical : moderateScale(10),
    },
    profileImage:{
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(50),
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.navyBlue,
    },
    editIcon:{
        width: moderateScale(24),
        height: moderateScale(24),
    },
    editIconContainer:{
        position:"absolute",
        right: moderateScale(120),
        top: moderateScale(72),
    }
});