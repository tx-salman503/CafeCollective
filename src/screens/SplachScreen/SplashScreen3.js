import React, { useEffect } from "react";
import { SafeFlexView } from "../../components";
import {  View } from "react-native";
import { styles } from "./style";
import combineStyle from "../../libs/combineStyle";
import { SvgXml } from "react-native-svg";
import {  mapBackLogo, MapLogo } from "../../assets/Svgs";
import { moderateScale } from "react-native-size-matters";
import NativeText from "../../components/AppTexts/NativeText";
import { Routes } from "../../navigation/Routes";
import { useSelector } from "react-redux";



export const SplachScreen3 = ({ navigation }) => {
    const { onbording } = useSelector(state => state?.userReducer);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onbording) {
                navigation.replace(Routes.UnAuthStack);
                return;
            }
            navigation.replace(Routes.AuthStack, { screen: Routes.OnboardingScreen2 });
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation, onbording]);

    return (
        <SafeFlexView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <SvgXml xml={mapBackLogo}
                        width={moderateScale(168)}
                        height={moderateScale(168)}
                    />
                    <NativeText value={"Welcome to Cafe Collective"} style={[combineStyle.text28,{fontSize:moderateScale(32),textAlign:"center"}]} />
                </View>
             
            </View>
        </SafeFlexView>
    );
}