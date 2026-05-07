import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import { Responsive } from '../../../libs';
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
    main:{
        flex:1,
        paddingHorizontal: moderateScale(15),
        marginTop:moderateScale(15),
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:AppFonts.h6,
        fontFamily:Theme.fontFamily.poppinsMedium,
        color:Theme.colors.navyBlue,
    }
 
});