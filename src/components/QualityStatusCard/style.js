import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../libs';
import combineStyle from '../../libs/combineStyle';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    gap: moderateScale(12),
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    marginLeft: moderateScale(12),
    color: Theme.colors.white,
  },

  statusBadge: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(2),
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: Theme.colors.lightTransparet,
    backgroundColor: Theme.colors.lightTransparet,
  },

  statusText: {
    ...combineStyle.text12Mid,
    color: Theme.colors.white,
  },

  sliderWrapper: {
    width: '100%',
    justifyContent: 'center',
    // marginBottom: moderateScale(18),
  },

  track: {
    width: '100%',
    height: moderateScale(20),
    borderWidth: 1,
    borderColor: Theme.colors.lightTransparet,
    backgroundColor: Theme.colors.lightTransparet,
    borderRadius: moderateScale(20),
  },

  thumb: {
    position: 'absolute',
    width: moderateScale(18),
    height: moderateScale(18),
    borderRadius: moderateScale(14),
    backgroundColor: Theme.colors.white,
    top: moderateScale(0),
  },

  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(7),
  },

  label: {
    color: Theme.colors.white,
    opacity: 0.7,
    fontSize:moderateScale(10),
    fontFamily:Theme.fontFamily.GlaxinMedium
  },

  activeLabel: {
    opacity: 1,
    fontWeight: '700',
  },
});