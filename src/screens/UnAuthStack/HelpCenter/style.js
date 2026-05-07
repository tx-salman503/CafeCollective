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
    text:{
        marginTop:moderateScale(10),
        fontSize:AppFonts.h6,
        fontFamily:Theme.fontFamily.poppinsMedium,
    },
    row:{
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop:moderateScale(20),
        borderBottomWidth:moderateScale(1),
        borderBottomColor:Theme.colors.border,
    },
    label:{
        fontSize:AppFonts.h6,
        fontFamily:Theme.fontFamily.poppinsMedium,
        color:Theme.colors.smokeyGray,
        width:moderateScale(165),
        textAlign:"center",
    },
    activeLabel:{
        color:Theme.colors.navyBlue,
        fontFamily:Theme.fontFamily.poppinsSemiBold,
        borderBottomColor:Theme.colors.navyBlue,
        borderBottomWidth:moderateScale(2),
        borderRadius:moderateScale(1),
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(10),
        height:moderateScale(50),
        borderWidth:moderateScale(1),
        borderColor:Theme.colors.border,
        borderRadius:moderateScale(10),
        paddingHorizontal:moderateScale(10),
        marginTop:moderateScale(10),
        
    }

  
});