import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containetContainer:{
        paddingTop:moderateScale(40),
        paddingHorizontal:moderateScale(20),
        gap:moderateScale(42),
        paddingBottom:moderateScale(40)
    },
       InvitFrindsContainer:{
        padding:moderateScale(16),
        backgroundColor:Theme.colors.lightTransparet,
        gap:moderateScale(16),
        borderRadius:moderateScale(16),
        borderWidth:1,
        borderColor:Theme.colors.lightTransparet
    },
    shearContainer:{
        width:moderateScale(50),
        height:moderateScale(50),
        borderRadius:moderateScale(20),
        backgroundColor:"#FFFFFF1F",
        justifyContent:"center",
        alignItems:"center"
    },
    LockContainer:{
        padding:moderateScale(24),
        backgroundColor:Theme.colors.black,
        borderRadius:moderateScale(16),
        gap:moderateScale(16)
    }
});