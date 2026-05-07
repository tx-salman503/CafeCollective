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
    text:{
        marginTop:moderateScale(10),
        fontSize:AppFonts.h6,
        fontFamily:Theme.fontFamily.poppinsMedium,
    },
row:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    justifyContent: 'space-between',
    borderBottomWidth:moderateScale(1),
    borderBottomColor:Theme.colors.border,
    marginTop:moderateScale(10),
},
button:{
    marginTop:"auto",
    marginBottom:moderateScale(30),
}


  
});