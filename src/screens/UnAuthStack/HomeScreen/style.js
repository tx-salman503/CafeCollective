import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        gap:moderateScale(10)
    },
    exploreButton:{
        width:moderateScale(40),
        height:moderateScale(40),
        borderRadius:moderateScale(20),
        position:"absolute",
        bottom:moderateScale(120),
        right:moderateScale(20),

    },
    mapBox:{
        width:"100%",
        height:moderateScale(500),
        backgroundColor: "#e0e0e0",
    },
    img:{
        width:"100%",
        height:"100%",
        resizeMode:"cover"
    },
    itemContainer:{
        flex:1,
        gap:moderateScale(10),paddingBottom:moderateScale(100)
          
    },
    cafeItem:{
        width:moderateScale(222),
        height:moderateScale(280),
        borderWidth:1,
        borderColor:Theme.colors.lightTransparet,
        borderRadius:moderateScale(12),
        backgroundColor:Theme.colors.navyBlack,
        borderRadius:moderateScale(20),
        paddingHorizontal:moderateScale(10),
        paddingVertical:moderateScale(9),
        gap:moderateScale(10)
    },
    imgList:{
        width:"100%",
        height:moderateScale(100),
        borderRadius:moderateScale(12),
    },
    tagBox:{
  width:moderateScale(92),
  height:moderateScale(24),
        backgroundColor:Theme.colors.white,
        borderRadius:moderateScale(8),
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        width:moderateScale(201),
        height:moderateScale(50),
        backgroundColor:Theme.colors.white,
        borderRadius:moderateScale(800),
        borderColor:Theme.colors.white
    }
})