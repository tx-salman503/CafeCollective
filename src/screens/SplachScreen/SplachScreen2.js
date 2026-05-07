import React, { useEffect } from "react";
import { SafeFlexView } from "../../components";
import {  View } from "react-native";
import { styles } from "./style";
import combineStyle from "../../libs/combineStyle";
import { SvgXml } from "react-native-svg";
import {  MapLogo } from "../../assets/Svgs";
import { moderateScale } from "react-native-size-matters";
import NativeText from "../../components/AppTexts/NativeText";
import { Routes } from "../../navigation/Routes";
import { useSelector } from "react-redux";



export const SplachScreen2 = ({ navigation }) => {
    const { onbording } = useSelector(state => state?.userReducer);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace(onbording ? Routes.UnAuthStack : Routes.AuthStack);
        }, 500);
        return () => clearTimeout(timer);
    }, [navigation, onbording]);

    return (
        <SafeFlexView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <SvgXml xml={MapLogo}
                        width={moderateScale(143)}
                        height={moderateScale(190)}
                    />
                </View>
                <View style={styles.titleContainer}>
<NativeText value={"Cafe"} style={[combineStyle.text28,{fontSize:moderateScale(32)}]} />
<NativeText value={"Collective"} style={[combineStyle.text28,{fontSize:moderateScale(32)}]} />
                </View>
            </View>
        </SafeFlexView>
    );
}