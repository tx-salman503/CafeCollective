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
  SkillContainer:{
    flexDirection:"row",
    borderRadius: moderateScale(10),
    justifyContent:"space-between",
  },
  SkillBox:{
    width: moderateScale(160),
    height: moderateScale(80),
    backgroundColor: Theme.colors.white,
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1),
    borderColor: Theme.colors.navyBlue,
    justifyContent:"center",
    alignItems:"center",
  },
  SkillHeading:{
    fontSize: AppFonts.t3,
    fontFamily: Theme.fontFamily.poppinsMedium,
    color: Theme.colors.black,
  },
  SkillValue:{
    fontSize: AppFonts.h5,
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    color: Theme.colors.navyBlue,
  },
  ItemContainer:{
    flexDirection:"row",
    alignItems:"center",
    gap: moderateScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Theme.colors.smokeyGray,
    marginVertical: moderateScale(10),
    
  },
  ItemText:{
    fontSize: AppFonts.h6,
    fontFamily: Theme.fontFamily.poppinsMedium,
    color: Theme.colors.black,
    paddingTop: moderateScale(3),
  },
  goIcon:{
    position:"absolute",
    right: moderateScale(5),
  },
  userImage:{
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
  },
  profileContainer:{
    marginTop: moderateScale(20),
    alignItems:"center",
    gap: moderateScale(10),
  },
  userName:{
    fontSize: AppFonts.h6,
    fontFamily: Theme.fontFamily.poppinsMedium,
    color: Theme.colors.black,

  }
});