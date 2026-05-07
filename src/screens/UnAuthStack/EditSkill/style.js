import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import { Responsive } from '../../../libs';
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
    main:{
        flex:1,
        paddingHorizontal: moderateScale(15),
        gap: moderateScale(4),
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
    },
    tabButton: {
        flex: 1,
        height: moderateScale(46),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.white,
      },
    
      activeTab: {
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.main,
      },
    
      tabText: {
        fontSize: AppFonts.t1,
        fontFamily: Theme.fontFamily.poppinsMedium,
        color: Theme.colors.black,
      },
      tabRow: {
        flexDirection: 'row',
        gap: moderateScale(10),
      },
      svgContainer:{
        alignSelf:"center",
      },
      btnContainer:{
        marginTop:"auto",
        bottom:moderateScale(20)
      },
      sectionLabel: {
        fontFamily: Theme.fontFamily.poppinsSemiBold,
        fontSize: AppFonts.h6,
        color: Theme.colors.black,
      },
    
});