import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      alignItems:"center",
      paddingHorizontal:moderateScale(20),
    },
    innerContiner:{
        paddingTop:moderateScale(90),
        alignItems:"center",
        alignSelf:"center"
    },
    mcgBox:{
    //    flex:1,
  marginTop:moderateScale(80)

    }
});