import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme, Responsive } from "../../../libs";
import combineStyle from "../../../libs/combineStyle";
const { AppFonts } = Responsive;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(20),
        paddingTop:moderateScale(40),
        gap: moderateScale(15)
    },
    main: {
        flex: 1,


    },
    badg: {

        gap: moderateScale(10),
        padding: moderateScale(24),
        width: "100%",
        borderWidth: 1,
        borderRadius: moderateScale(12),
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: Theme.colors.lightTransparet,
        marginBottom:moderateScale(20)



    },
    mapContainer: {
        height: moderateScale(310),
        marginVertical:moderateScale(20)
        // borderWidth: 1,
        // borderColor: Theme.colors.lightTransparet,
        // backgroundColor: Theme.colors.lightTransparet,
        // borderRadius: moderateScale(26),
    },
    img:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    track: {
    width: '100%',
    height: moderateScale(8),
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: moderateScale(4),
    overflow: 'hidden',
},
fill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(4),
},
line:{
    width:moderateScale(210),
    height:moderateScale(1.5),
    borderRadius:moderateScale(10),
    backgroundColor:Theme.colors.white,
}

});