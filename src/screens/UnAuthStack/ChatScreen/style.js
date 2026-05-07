import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import { Responsive } from '../../../libs';

const { AppFonts } = Responsive;

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
    marginTop: moderateScale(15),
  },
  container: {
    flex: 1,
    backgroundColor: '#E8F2F7',
  },
  customInputContainer: {
    backgroundColor: "transparent",
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),

  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: moderateScale(46),
    borderWidth: moderateScale(1),
    borderColor: Theme.colors.coolGray,
    borderRadius: moderateScale(6),
    paddingHorizontal: moderateScale(12),
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(10),
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  usernameText: {
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.poppinsRegular,
    color: Theme.colors.black,
    color: Theme.colors.black,
  },
  UserAvatar: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(30),
    top: moderateScale(10),
  },
  UserOtherBubble: {
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: moderateScale(3),
    borderBottomLeftRadius: moderateScale(14),
    borderTopRightRadius: moderateScale(14),
    borderBottomRightRadius: moderateScale(14),
  },
  UserCurrentBubble: {
    backgroundColor: Theme.colors.navyBlue,
    borderTopLeftRadius: moderateScale(14),
    borderBottomLeftRadius: moderateScale(14),
    borderTopRightRadius: moderateScale(14),
    borderBottomRightRadius: moderateScale(3),
  },
  UserCurrentBubbleText: {
    color: Theme.colors.white,
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.poppinsRegular,
  },
  UserOtherBubbleText: {
    color: Theme.colors.black,
    fontSize: moderateScale(14),
    fontFamily: Theme.fontFamily.poppinsRegular,
  },
  UserCurrentBubbleTimeText: {
    color: Theme.colors.white,
    fontSize: moderateScale(10),
    fontFamily: Theme.fontFamily.poppinsRegular,
  },
  UserOtherBubbleTimeText: {
    color: Theme.colors.black,
    fontSize: moderateScale(10),
    fontFamily: Theme.fontFamily.poppinsRegular,
  },
});