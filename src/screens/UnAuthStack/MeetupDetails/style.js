import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import { Responsive } from '../../../libs';
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
    main:{
        flex:1,
        paddingHorizontal: moderateScale(15),
        gap: moderateScale(10),
    },  
    detail:{
        fontSize:AppFonts.t1,
        fontFamily:Theme.fontFamily.poppinsRegular,
        color:Theme.colors.black,
        width:"80%"
    },
    Cotainer:{
        height:moderateScale(115),
        backgroundColor:Theme.colors.white,
        borderRadius:moderateScale(6),
        padding:moderateScale(10),
        
    },
    rowContainer:{
        flexDirection:"row",
        gap:moderateScale(10),
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:moderateScale(20)
    },
    

    label:{
        fontSize:AppFonts.t4,
        fontFamily:Theme.fontFamily.poppinsBold,
        color:Theme.colors.black,
    },
    button:{
        height:moderateScale(24),
        width:moderateScale(76),
        backgroundColor:Theme.colors.lightBlue,
        borderWidth:moderateScale(1),
        borderColor:Theme.colors.datkBlue,
        borderRadius:moderateScale(5),
        alignItems:"center",
        justifyContent:"center",
        marginBottom:moderateScale(26),
        position:"absolute",
        right:0,
    },
    btnText:{
        fontSize:AppFonts.t1,
        color:Theme.colors.DarkBlure,
        fontFamily:Theme.fontFamily.poppinsSemiBold,

    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        gap:moderateScale(5),
    },
    svg:{
        bottom:moderateScale(9)
    },
    label_Light:{
        fontSize:AppFonts.t4,
        fontFamily:Theme.fontFamily.poppinsRegular,
        color:Theme.colors.description,
    },
    title:{
        fontSize:AppFonts.t1,
        fontFamily:Theme.fontFamily.poppinsSemiBold,
        color:Theme.colors.black,
    },
    subtitle:{
        fontSize:AppFonts.t3,
        color:Theme.colors.description,
        fontFamily:Theme.fontFamily.poppinsRegular,
    },
    btn:{
        marginTop:"auto",
        bottom:moderateScale(30),
        backgroundColor:Theme.colors.navyBlue,
        width:"100%"

    },
    hostimg:{
        width:moderateScale(25),
        height:moderateScale(25),
        borderRadius:moderateScale(12),
    }

   
});