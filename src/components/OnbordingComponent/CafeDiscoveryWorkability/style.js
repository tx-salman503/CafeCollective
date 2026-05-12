import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(16),
    paddingBottom: moderateScale(24),
  },
  stepCounter: {
    marginBottom: moderateScale(24),
  },
  stepText: {
    color: Theme.colors.black,
  },
  titleSection: {
    marginBottom: moderateScale(32),
  },
  title: {
    color: Theme.colors.black,
    marginBottom: moderateScale(8),
  },
  subtitle: {
    color: Theme.colors.darkGray,
    lineHeight: moderateScale(20),
  },
  optionsContainer: {
    gap: moderateScale(24),
    marginBottom: moderateScale(16),
  },
  cardWrapper: {
    backgroundColor: 'transparent',
  },
});
