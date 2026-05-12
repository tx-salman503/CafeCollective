import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../libs';
import combineStyle from '../../libs/combineStyle';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    gap: moderateScale(12),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  title: {
    marginLeft: moderateScale(10),
    color: Theme.colors.white,
  },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  optionButton: {
    width: '31%',
   paddingVertical: moderateScale(12),
   paddingHorizontal: moderateScale(8),
  
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  activeButton: {
    backgroundColor: Theme.colors.white,
    borderColor: Theme.colors.white,
  },

  inactiveButton: {
    backgroundColor: 'transparent',
    borderColor: '#FFFFFF33',
  },

  optionText: {
    ...combineStyle.text14Bold,
    opacity: 0.8,
  },

  activeText: {
    color: Theme.colors.black,
  },

  inactiveText: {
    color: Theme.colors.white,
  },
});

export default styles;