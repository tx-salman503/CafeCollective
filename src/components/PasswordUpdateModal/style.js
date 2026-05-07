import { Dimensions, StyleSheet } from "react-native";
import { moderateScale ,scale} from "react-native-size-matters";
import { Theme } from "../../libs";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)', // Fallback background
    },
    blurContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: SCREEN_WIDTH,
      height: scale(800),
    },
    backdropTouchable: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: moderateScale(20),
    },
    modalContainer: {
      width: "95%",
      maxWidth: moderateScale(320),
      backgroundColor: Theme.colors.white,
      borderRadius: moderateScale(16),
      padding: moderateScale(24),
     
    },
    iconContainer: {
      marginBottom: moderateScale(16),
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: "700",
      marginBottom: moderateScale(8),
      textAlign: "center",
      color: Theme.colors.textPrimary || '#000',
      fontFamily: Theme.fontFamily['Poppins-Bold'],
    },
    subtitle: {
      fontSize: moderateScale(11),
      color:  "#656A6F",
      marginBottom: moderateScale(24),
    textAlign:"center",
      lineHeight: moderateScale(20),
      fontFamily: Theme.fontFamily["Poppins-SemiBold"],
    },
    button: {
      backgroundColor: Theme.colors.navyBlue,
      height: moderateScale(43),
      borderRadius: moderateScale(10),
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
     
    },
    buttonNativeText: {
      color: "#fff",
      fontSize: moderateScale(16),
      fontWeight: "600",
      fontFamily: Theme.fontFamily['Poppins-SemiBold'],
    },
  });
  