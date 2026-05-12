import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import combineStyle from '../../../libs/combineStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: moderateScale(24),
    // paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  textContainer: {
    gap: moderateScale(10),
    alignItems: 'center',
  },
  card: {

  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    marginBottom: moderateScale(16),
  },
  cardTitle: {
    color: '#FFFFFF',
  },
  menuOption: {
    padding: moderateScale(15),
    borderRadius: moderateScale(28),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    marginBottom: moderateScale(12),
  },
  menuOptionActive: {
    backgroundColor: Theme.colors.white,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  menuOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
  },
  menuOptionLabel: {
    color: '#FFFFFF',
    flex: 1,
  },
  ratingHeader: {
    ...combineStyle.rowStyle,
    gap:moderateScale(12),
    marginBottom: moderateScale(14),
  },
  starRow: {
    paddingHorizontal: moderateScale(28),
    flexDirection: 'row',
        justifyContent: 'space-between',
  },
  starButton: {
    padding: moderateScale(6),
  },
  starActive: {
    color: '#FFCF00',
    fontSize: moderateScale(36),
    lineHeight: moderateScale(30),
  },
  starInactive: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: moderateScale(26),
    lineHeight: moderateScale(30),
  },
  buttonContainer: {
    borderRadius: moderateScale(2000),
    width: '100%',
    marginTop: moderateScale(10),
  },
});