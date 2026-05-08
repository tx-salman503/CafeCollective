import { StyleSheet } from 'react-native';
import { Theme, Responsive } from '../../../libs';
const { AppFonts } = Responsive;
import { moderateScale, verticalScale } from 'react-native-size-matters';

const { getWidth, getHeight } = Responsive;

const styles = StyleSheet.create({


  background: {
    width: getWidth('100'),
    height: getHeight('100'),
    justifyContent: 'flex-end',
  },



  skip: {
    width: moderateScale(58),
    height: moderateScale(32),
    borderRadius: moderateScale(4),
    backgroundColor: Theme.colors.navyBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: moderateScale(15),
    top: verticalScale(40),
  },

  skipText: {
    color: Theme.colors.white,
    fontSize: AppFonts.t3,
    fontFamily: Theme.fontFamily.poppinsMedium,
  },


  card: {
    marginBottom: verticalScale(30),
    height:moderateScale(300),
    width:moderateScale(335),
    backgroundColor:Theme.colors.skyBlue,
    borderRadius: moderateScale(20),
    alignItems: 'center',
    padding: moderateScale(20),
    alignSelf:'center',
    gap: moderateScale(23),
  },

  title: {
    fontSize: AppFonts.h4,
    color: Theme.colors.black,
    textAlign: 'center',
    fontFamily: Theme.fontFamily.poppinsSemiBold,
  },

  subtitle: {
    fontSize: AppFonts.h6,
    color: Theme.colors.black,
    textAlign: 'center',
    lineHeight: moderateScale(18),
    fontFamily: Theme.fontFamily.poppinsRegular,
    // marginVertical: verticalScale(1),
    
  },
paginationWrap: {
width: '100%',
position: 'absolute',
top: verticalScale(38),
zIndex: 10,
alignItems: 'center',
},

  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: moderateScale(38),
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: '#7D8495',
    marginHorizontal: moderateScale(3),
  },

  activeDot: {
    width: moderateScale(38),
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: Theme.colors.white,
    marginHorizontal: moderateScale(3),
  },



  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: moderateScale(50),
    borderRadius: moderateScale(16),
  },
});

export default styles;
