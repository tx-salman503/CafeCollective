import React, { useEffect } from "react";
import { SafeFlexView } from "../../components";
import { Text, View } from "react-native";
import { styles } from "./style";
import combineStyle from "../../libs/combineStyle";
import { SvgXml } from "react-native-svg";
import { AppLogoWithBackground } from "../../assets/Svgs";
import { moderateScale } from "react-native-size-matters";
import NativeText from "../../components/AppTexts/NativeText";
import { Routes } from "../../navigation/Routes";
import { useSelector } from "react-redux";



export const SplachScreen = ({ navigation }) => {
    const { isAuth } = useSelector(state => state?.userReducer);
    useEffect(() => {
        const timer = setTimeout(() => {
            isAuth ?
            navigation.replace(Routes.UnAuthStack)
            :
            navigation.replace(Routes.SplashScreen2);
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeFlexView>
            <View style={styles.container}>
                <View style={[combineStyle.rowStyle,{gap:moderateScale(10)}]}>
                    <SvgXml xml={AppLogoWithBackground}
                        width={moderateScale(70)}
                        height={moderateScale(70)}
                    />
                    <View>
                        <NativeText value={"Cafe"} style={combineStyle.text28} />
                        <NativeText value={"Collective"} style={combineStyle.text28} />
                    </View>
                </View>
            </View>
        </SafeFlexView>
    );
}