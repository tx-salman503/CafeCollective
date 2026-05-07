import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './NativeButtonStyles';
import { Theme } from '../../libs';
import AppLoader from '../AppLoader/Apploader';
import { AppFont } from '../../libs/responsive';
import { SvgXml } from 'react-native-svg'; // ✅ for SVGs

const NextButton = ({
  onPress = () => {},
  svg,
  containerStyle

}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, containerStyle]}
      onPress={onPress}
    >
      <SvgXml xml={svg} width={24} height={24}/>
    </TouchableOpacity>
  );
};

export default NextButton;

NextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  SvgIcon: PropTypes.string, // ✅ Expecting XML string for SVG
    containerStyle: PropTypes.object,
};
