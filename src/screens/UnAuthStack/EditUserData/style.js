import { Platform, StyleSheet } from 'react-native';
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
    button:{
    position:"absolute",
    bottom:moderateScale(30)
    },
        btnContainer:{
            height:moderateScale(40),
            paddingTop: Platform.OS === 'android' ? moderateScale(0) : moderateScale(25)
         
        }

  
});