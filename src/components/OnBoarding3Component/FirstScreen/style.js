import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,          
        alignItems:"center",
        paddingTop: moderateScale(90),
        paddingHorizontal:moderateScale(20),
  gap:moderateScale(20),
//   backgroundColor:"red"

    },
    imgcontainer: {
        borderRadius:moderateScale(100),
        width:"100%"
    },
    img: {
    marginTop:"auto",
      bottom:moderateScale(30)
    }
});