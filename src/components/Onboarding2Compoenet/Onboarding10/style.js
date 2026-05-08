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
     width:moderateScale(210),
    //  height:moderateScale(92),
     position:"absolute",
     right:moderateScale(10),
     bottom:moderateScale(150)
    },
    img: {
        position: 'absolute',
   top:moderateScale(80),
        width: width * 0.99,
        height: height * 0.80,
        resizeMode: 'cover',
    },
    txt:{
        fontSize:moderateScale(18)
    }
});