import { View } from 'react-native'
import React, { useCallback } from 'react'
import { MessageCard, SafeFlexView } from '../../../components'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScale } from 'react-native-size-matters'
import { SvgXml } from 'react-native-svg';
import { Administrator, MapMarker } from '../../../assets/Svgs';
import { locationFeatures } from '../../../utils/export';
import { Routes } from '../../../navigation/Routes';
import permissionUtils from '../../../utils/permissionUtils';
import { useFocusEffect } from '@react-navigation/native';

const LocationAccessScreen = ({ navigation }) => {

  // ✅ Sirf tab check karo jab user settings se wapas aaye
  // Request nahi karega — sirf already granted hai to navigate karega
  useFocusEffect(
    useCallback(() => {
      const checkIfAlreadyGranted = async () => {
        const isGranted = await permissionUtils.checkLocationPermission();
        if (isGranted) {
          navigation.navigate(Routes.WelcomScreen);
        }
      };
      checkIfAlreadyGranted();
    }, [])
  );

  // ✅ Sirf button press par request karega
  const getLocation = async () => {
    const isGranted = await permissionUtils.requestLocationPermission();
    if (isGranted) {
      navigation.navigate(Routes.WelcomScreen);
    }
  };

  return (
    <SafeFlexView>
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.textBox}>
          <SvgXml xml={MapMarker} width={moderateScale(96)} height={moderateScale(96)} />
          <NativeText value={"Where Are You Exploring?"} style={[combineStyle.text30Bold, { textAlign: "center" }]} />
          <NativeText value={"We found 300+ cafes waiting to be discovered!"} style={[combineStyle.text16Mid, { textAlign: "center" }]} />
          <NativeText value={"We need your location to:"} style={[combineStyle.text16Mid, { alignSelf: "flex-start" }]} />

          <View style={{ alignSelf: "flex-start", gap: moderateScale(16) }}>
            {locationFeatures.map((feature, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(12) }}>
                <SvgXml xml={feature.svgName} width={moderateScale(40)} height={moderateScale(40)} />
                <NativeText value={feature.text} style={combineStyle.text16Mid} />
              </View>
            ))}
          </View>

          <View style={styles.badg}>
            <SvgXml xml={Administrator} width={moderateScale(20)} height={moderateScale(20)} />
            <NativeText value={"Your exact location is never shared publicly."} style={combineStyle.text12Mid} />
          </View>

          <MessageCard
            text='Use My Location'
            isBtn={true}
            touchable={true}
            onPress={getLocation}  // ✅ Sirf button press par request
            containerStyle={styles.btnContainer}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default LocationAccessScreen