import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../../libs';
import { Responsive } from '../../../libs';
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
    main:{
        flex:1,
        paddingHorizontal: moderateScale(15),
        marginTop:moderateScale(15),
    },
    title:{
        fontSize:AppFonts.t1,
        fontFamily:Theme.fontFamily.poppinsSemiBold,
        color:Theme.colors.black,
    },
    container:{
        height:moderateScale(187),
        backgroundColor:Theme.colors.white,
        borderRadius:moderateScale(10),
        marginVertical:moderateScale(10),
        paddingVertical:moderateScale(16),
        paddingHorizontal:moderateScale(12),
    },
    detail:{
        fontSize:AppFonts.t3,
        fontFamily:Theme.fontFamily.poppinsRegular,
        color:Theme.colors.description,
        width:"80%"
        
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        gap:moderateScale(5),
     
        
    },
    rowContainer:{
        flexDirection:"row",
        gap:moderateScale(10),
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:"auto",
    },
    

    label:{
        fontSize:AppFonts.t4,
        fontFamily:Theme.fontFamily.poppinsRegular,
        color:Theme.colors.description,
        marginTop:moderateScale(3),
    },
    jointSvg:{
        position:"absolute",
        right:moderateScale(10),
        top:moderateScale(18),
        fontSize:AppFonts.t4,
        fontFamily:Theme.fontFamily.poppinsRegular,
        color:Theme.colors.navyBlue,
    },
    FlotingButton:{
        width:moderateScale(64),
        height:moderateScale(64),
        borderRadius:moderateScale(100),
        backgroundColor:Theme.colors.navyBlue,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:moderateScale(30),
        right:moderateScale(15),
    },
    searchBar:{
        width:'92%',
        margin:0,
        padding:0,
        height:moderateScale(44),
        
    },
    filter:{
        position: "absolute",
        right: moderateScale(3),
    },
    pupelTag:{
        backgroundColor:Theme.colors.lightPurple,
       paddingHorizontal:moderateScale(8),
       borderWidth:moderateScale(1),
         borderColor:Theme.colors.DarkPurple,
         borderRadius:moderateScale(6),
         justifyContent:"center",
            alignItems:"center",
    },
    purpelText:{
        fontSize:AppFonts.t1,
        fontFamily:Theme.fontFamily.poppinsMedium,
        color:Theme.colors.DarkPurple,
        top:moderateScale(1),
    },
    WarningTag:{
        backgroundColor:Theme.colors.likghtWarining,
       paddingHorizontal:moderateScale(8),
       borderWidth:moderateScale(1),
         borderColor:Theme.colors.darkWarining,
         borderRadius:moderateScale(16),
            borderRadius:moderateScale(6),
         justifyContent:"center",
            alignItems:"center",
    },
    WanrningText:{
        fontSize:AppFonts.t1,
        fontFamily:Theme.fontFamily.poppinsMedium,
        color:Theme.colors.darkWarining,
        top:moderateScale(1),
    },
    GreenTag:{
        backgroundColor:Theme.colors.lightgreen,
       paddingHorizontal:moderateScale(8),
       borderWidth:moderateScale(1),
         borderColor:Theme.colors.darkgreen,
         borderRadius:moderateScale(16),
            borderRadius:moderateScale(6),
         justifyContent:"center",
            alignItems:"center",
    },
    GreenText:{
        fontSize:AppFonts.t1,
        fontFamily:Theme.fontFamily.poppinsMedium,
        color:Theme.colors.darkgreen,
       top:moderateScale(1),
    },
});