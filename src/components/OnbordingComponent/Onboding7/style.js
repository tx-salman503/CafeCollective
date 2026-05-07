import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 0.25,                          // 0.4 → 0.25 (kam space)
   paddingTop:moderateScale(70),
   paddingHorizontal:moderateScale(15)
      
    },
    imgcontainer: {
        flex: 0.75,                          // 0.6 → 0.75 (zyada space)
        alignItems: 'center',
        justifyContent: 'flex-end',          // center → flex-end
        overflow: 'hidden',
    },
    img: {
        width: width,                        // full width
        height: height * 0.97,              // 0.58 → 0.75 (bari image)
        resizeMode: 'contain',
    }
});