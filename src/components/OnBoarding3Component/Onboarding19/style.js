import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,                          // 0.4 → 0.25 (kam space)
 justifyContent:"center",
 alignItems:"center",
   paddingHorizontal:moderateScale(15)
   
      
    },
    imgcontainer: {
        flex: 0.78,                          
        alignItems: 'center',
        justifyContent: 'flex-end',          
        overflow: 'hidden',
      
    },
    img: {
        position: 'absolute',
        bottom: moderateScale(35),
        width: width * 0.96,
        height: height * 0.60,
        resizeMode: 'cover',
    }
});