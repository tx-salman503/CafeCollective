import {StyleSheet} from 'react-native';

import {Theme, Responsive} from '../../libs';
import {AppFont, normalized} from '../../libs/responsive';
import { moderateScale } from 'react-native-size-matters';

const {getWidth, getHeight} = Responsive;
const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.navyBlue,
    alignItems: 'center',
    width: getWidth(92),
    height: moderateScale(50),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: Theme.borders.miniMediumRadius,
  },
  buttonText: {
    color: Theme.colors.white,
    fontSize: moderateScale(16),
    fontFamily:Theme.fontFamily.poppinsBold
  },
  titlswrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBtn: {
    height: getWidth('5'),
    width: getWidth('5'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: getWidth('2'),
  },
  title2Wrap: {
    height: normalized.wp('6'),
    width: normalized.wp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.darkGray,
    marginLeft: normalized.wp('2'),
    borderRadius: Theme.borders.regularRadius,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
});

export default styles;
