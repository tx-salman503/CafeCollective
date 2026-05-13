import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import combineStyle from '../../../libs/combineStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: moderateScale(24),
    paddingTop: moderateScale(20),
  },
  textContainer: {
    gap: moderateScale(10),
    alignItems: 'center',
  },
  card: {
    gap: moderateScale(12),

  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  cardTitle: {
    paddingLeft: moderateScale(10),
  },
  starRow: {
    paddingHorizontal: moderateScale(28),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starButton: {
    padding: moderateScale(6),
  },
  questionContainer: {
    gap: moderateScale(16),
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  answerButton: {
    width: moderateScale(152),
    height: moderateScale(48),
    borderRadius: moderateScale(28),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerButtonActive: {
    backgroundColor: Theme.colors.white,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  badge: {
    ...combineStyle.rowStyle,
    gap: moderateScale(15),
    borderWidth: 1,
    borderColor: Theme.colors.lightTransparet,
    borderRadius: moderateScale(1200),
    height: moderateScale(62),
    paddingHorizontal: moderateScale(24),
    justifyContent: "space-between"

  },
  ratingHeader: {
    ...combineStyle.rowStyle,
  

  },
});