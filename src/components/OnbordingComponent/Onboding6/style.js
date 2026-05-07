import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    imgcontainer: {
        flex: 0.55,
        //   backgroundColor:'yellow',
        justifyContent: 'flex-end',
    },
    img: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
        // alignSelf: 'flex-end',
    },
    txtContainer: {
        flex: 0.54,
        alignItems: "center",
        gap:moderateScale(60)
    },
    chracter: {
        position: 'absolute',
        bottom: moderateScale(-510),
        right: -width * 0.28,
        width: width * 0.96,
        height: height * 0.90,
        resizeMode: 'cover',
    },
    txtBox:{
        width:moderateScale(220),
        height:moderateScale(220),
        position:"absolute",
        // backgroundColor:"red",
        left:moderateScale(20),
       
    
    },
    messegBox:{
        width:"100%",
        height:"100%",
        resizeMode:"contain",
    },
    txt:{
        position:"absolute",
        width:moderateScale(180),
        height:moderateScale(100),
        top:moderateScale(69),
        left:moderateScale(23)
    },sutext:{
        textAlign:"center",
        color:"black",
        fontSize:moderateScale(16)
    }
    
})