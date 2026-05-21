import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './NativeButtonStyles';
import { Theme } from '../../libs';
import AppLoader from '../AppLoader/Apploader';
import { AppFont } from '../../libs/responsive';
import { SvgXml } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

const NativeButton = ({
  onPress = () => { },
  title,
  title2,
  containerStyle = {},
  titleStyle = {},
  title2Style,
  disabled = false,
  LeftIcon,
  RightIcon,
  AlbumIcon,
  isPending
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      style={[styles.button, containerStyle]}
      onPress={onPress}>
      <View style={styles.titlswrap}>
        {LeftIcon && (
          <SvgXml xml={LeftIcon} width={moderateScale(22)} height={moderateScale(24)}/>
        )}
        {AlbumIcon && (
          <AlbumIcon
            color={Theme.colors.darkBlue}
            size={AppFont.commonFont.medium}
            disabled={true}
          />
        )}
        {isPending === true ? (
          <AppLoader />
        ) : (
          <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
        )}


        {RightIcon && (
          <SvgXml xml={RightIcon} width={moderateScale(16)} height={moderateScale(16)}/>
        )}

        {title2 && (
          <View style={styles.title2Wrap}>
            <Text style={[styles.buttonText, title2Style]}>{title2}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default NativeButton;

NativeButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  disabled: PropTypes.bool,
};
