import { Platform, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme, Responsive } from '../../../libs';

const { AppFonts } = Responsive;

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: moderateScale(20),
  },

  header: {
    alignItems: 'center',
    marginVertical: moderateScale(20),
  },

  title: {
    fontSize: AppFonts.h4,
    fontFamily: Theme.fontFamily.poppinsSemiBold,
    color: Theme.colors.black,
  },

  subtitle: {
    fontSize: AppFonts.t1,
    fontFamily: Theme.fontFamily.poppinsMedium,
    color: Theme.colors.black,
    marginBottom: moderateScale(10),
  },

  uploadContainer: {
    alignItems: 'center',
    marginVertical: moderateScale(10),
  },

  uploadText: {
    marginTop: moderateScale(6),
    fontFamily: Theme.fontFamily.poppinsMedium,
  },

  profileImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
  },

  sectionLabel: {
    marginTop: moderateScale(15),
    marginBottom: moderateScale(6),
    fontFamily: Theme.fontFamily.poppinsMedium,
    fontSize: AppFonts.t1,
    color: Theme.colors.black,
  },

  tabRow: {
    flexDirection: 'row',
    gap: moderateScale(10),
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



  dropdown: {
    height: moderateScale(48),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
    borderColor: Theme.colors.smokeyGray,
    paddingHorizontal: moderateScale(12),
    marginBottom: moderateScale(20),
    backgroundColor: Theme.colors.white,
  },
  btnContainer:{
    width: '100%',
    marginVertical: moderateScale(20),
  },
  bioContainer:{
    height: moderateScale(100),
    justifyContent:"flex-start",
    alignItems:"flex-start",
    paddingVertical: Platform.OS === 'android' ? moderateScale(1) : moderateScale(11),

  }
});
