import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme ,Responsive} from '../../../libs';
const { AppFonts } = Responsive;

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
    marginTop: moderateScale(15),
    gap: moderateScale(10),
  },
  mcg:{
    fontSize:AppFonts.h6,
    fontFamily:Theme.fontFamily.poppinsSemiBold,
  },
  chatGroupContainer:{
    flexDirection:"row",
    alignItems:"center",
    gap: moderateScale(10),
    marginVertical: moderateScale(10),
  },
  chatGroupImage:{
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(30),
  },
  chatGroupName:{
    fontSize:AppFonts.t1,
    fontFamily:Theme.fontFamily.poppinsSemiBold,
    color:Theme.colors.black,
  },
  chatGroupLastMessage:{
    fontSize:AppFonts.t3,
    fontFamily:Theme.fontFamily.poppinsRegular,
    color:Theme.colors.coolGray,
  },
  chatGroupUnreadMessages:{
    backgroundColor:Theme.colors.navyBlue,
    width:moderateScale(20),
    height:moderateScale(20),
    borderRadius:moderateScale(10),
    alignItems:"center",
    justifyContent:"center",  
    position:"absolute",
    top:moderateScale(3),
    right:moderateScale(3),
  },
  chatGroupUnreadMessagesText:{
    fontSize:moderateScale(8),
    fontFamily:Theme.fontFamily.poppinsRegular,
    color:Theme.colors.white,
    textAlign:"center",
  }
 
});