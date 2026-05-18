import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import combineStyle from '../../libs/combineStyle';
import { SvgXml } from 'react-native-svg';
import { HeartSvg, whiteBack } from '../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../AppTexts/NativeText';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../libs';



function CafeDetailHeader({ title, onPress, }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <SvgXml xml={whiteBack} width={moderateScale(18)} height={moderateScale(18)} />
      </TouchableOpacity>
      <NativeText value={title} style={[combineStyle.text20Bold,{textAlign:"center",marginLeft:moderateScale(18)}]} />
      <TouchableOpacity onPress={onPress}>
          <SvgXml xml={HeartSvg} width={moderateScale(24)} height={moderateScale(24)}/>
      </TouchableOpacity>
    </View>
  );
}

export default CafeDetailHeader;


const styles = StyleSheet.create({
  container: {
    ...combineStyle.rowStyle,
    paddingHorizontal: moderateScale(18),
    paddingTop: moderateScale(13),
    justifyContent: 'space-between',
    borderBottomWidth:moderateScale(1),
    borderBottomColor:Theme.colors.lightTransparet,
    paddingBottom:moderateScale(15)
  }
})
