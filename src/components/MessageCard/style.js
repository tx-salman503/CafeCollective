import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  shadowLayer: {
    width: "95%",
    borderWidth: moderateScale(1),
    borderColor: "#6F7279",
    borderRadius: moderateScale(16),
    backgroundColor: "#6F7279",
    paddingBottom:moderateScale(4),
    paddingTop:moderateScale(3)
  
      // offset upar se
  },
  card: {
    width: "100%",
    borderWidth: moderateScale(1),
    borderColor: "#6F7279",
    borderRadius: moderateScale(16),
    paddingHorizontal: moderateScale(29),
    paddingVertical: moderateScale(16),
    marginTop: moderateScale(-3),  
    backgroundColor:"#FFFFFF"
  },
  titleText: {
    color: "#000000",
    textAlign: "center",
  },
});