import { Platform, StyleSheet } from 'react-native';
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
    titel:{
        fontSize:moderateScale(16),
        color:Theme.colors.black,
        fontFamily:Theme.fontFamily.poppinsSemiBold,
        paddingHorizontal:moderateScale(2)
    },
    row:{
height:moderateScale(47),
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
    },
    skillBox:{
        backgroundColor:Theme.colors.white,
        height:moderateScale(47),
        minWidth:moderateScale(80),
        borderRadius:moderateScale(6),
        justifyContent:"center",
        alignItems:"center",
    },
    skilltext:{
fontSize:AppFonts.h6,
fontFamily:Theme.fontFamily.poppinsMedium,
color:Theme.colors.gray,
paddingHorizontal:moderateScale(10)
    },
    ActiveTab:{
        borderWidth:moderateScale(1),
        borderColor:Theme.colors.navyBlue
    },
    description:{
        height: moderateScale(100),
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingVertical: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(0)
      },
        activeSkillText:{   
            color: Theme.colors.black,
        }
  
});