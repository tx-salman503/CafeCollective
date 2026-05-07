import {StyleSheet} from 'react-native';
import {Theme} from '../../libs';
import Responsive, {AppFont, normalized} from '../../libs/responsive';

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
    color: Theme.colors.coolGray,
    fontSize: AppFont.commonFont.mediumSmall,
  },
  leftLine: {
    width: Responsive.getWidth('30'),
    height: 1,
    backgroundColor: Theme.colors.lightMist,
  },
});
