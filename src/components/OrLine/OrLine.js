import {View} from 'react-native';
import React from 'react';

import NativeText from '../AppTexts/NativeText';
import {styles} from './style';

const Orline = ({text}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.leftLine} />
      <NativeText style={styles.orText}>{text || 'OR'}</NativeText>
      <View style={styles.leftLine} />
    </View>
  );
};

export default Orline;
