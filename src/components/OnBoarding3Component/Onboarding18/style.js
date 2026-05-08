import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 0.18,                          // 0.4 → 0.25 (kam space)
   paddingTop:moderateScale(90),
   paddingHorizontal:moderateScale(15)
      
    },
    imgcontainer: {
        flex: 0.82,                          // 0.6 → 0.75 (zyada space)
        alignItems: 'center',
        justifyContent: 'flex-end',          // center → flex-end
        overflow: 'hidden',
       
      
    },
    img: {
        position: 'absolute',
        bottom: moderateScale(70),
        width: width * 0.96,
        height: height * 0.60,
        resizeMode: 'cover',
    }
});