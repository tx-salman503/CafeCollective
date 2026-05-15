import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import combineStyle from '../../libs/combineStyle';
import { SvgXml } from 'react-native-svg';
import { whiteBack } from '../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../AppTexts/NativeText';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../libs';


function AppHeader({ title, onPressBell, label }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <SvgXml xml={whiteBack} width={moderateScale(18)} height={moderateScale(18)} />
      </TouchableOpacity>
      <NativeText value={title} style={[combineStyle.text20Bold,{textAlign:"center",marginLeft:moderateScale(24)}]} />
      <TouchableOpacity onPress={onPressBell}>
          <NativeText value={label} style={[combineStyle.text14Bold,{color:Theme.colors.boldGray}]} />
      </TouchableOpacity>
    </View>
  );
}

export default AppHeader;


const styles = StyleSheet.create({
  container: {
    ...combineStyle.rowStyle,
    paddingHorizontal: moderateScale(18),
    paddingTop: moderateScale(13),
    justifyContent: 'space-between',
  }
})
