import {StyleSheet} from 'react-native';
import {Theme} from '../../libs';
import Responsive, {AppFont, normalized} from '../../libs/responsive';
import combineStyle from '../../libs/combineStyle';

export const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    width: normalized.wp(50),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    marginHorizontal: Responsive.getWidth(3),
    fontSize: AppFont.commonFont.mediumSmall,
    ...combineStyle.text14Mid,
    color: Theme.colors.placecHolderColor,
  },
  leftLine: {
    width: Responsive.getWidth('25'),
    height: 1,
    backgroundColor: Theme.colors.placecHolderColor,
  },
});
