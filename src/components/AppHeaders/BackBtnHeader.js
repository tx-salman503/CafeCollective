import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { SvgXml } from 'react-native-svg';
import { back, backBlack } from '../../assets/Svgs';


const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


function BackBtnHeader() {
  const navigation = useNavigation();

  return (
    <View style={[
      styles.settingContainer,
    ]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        hitSlop={10}
        activeOpacity={0.7}
        style={styles.backBtn}>
        <SvgXml xml={backBlack} width={60} height={60} />
      </TouchableOpacity>
    </View>
  );
}

export default BackBtnHeader;
