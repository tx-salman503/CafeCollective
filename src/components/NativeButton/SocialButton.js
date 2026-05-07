import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Responsive, Theme} from '../../libs';
import HeadingText from '../AppTexts/HeadingText';
import { AppFont, normalized } from '../../libs/responsive';
const {getWidth,getHeight} = Responsive;

function SocialButton({title, onPress, Buttonstyle, buttomImage}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.ImageButtonstyle, Buttonstyle]}>
      <View style={styles.imageView}>
        <Image source={buttomImage} style={styles.imgStyle} />
      </View>
      <HeadingText
        body={title}
        style={[styles.textStyle, styles.socialButtonText]}
      />
    </TouchableOpacity>
  );
}

export default SocialButton;

const styles = StyleSheet.create({
  mainButtonStyle: {
    marginVertical: Responsive.getHeight(1),
    width: Responsive.getWidth(30),
    alignSelf: 'center',
    height: getHeight(5),
    backgroundColor: Theme.colors.lightMist,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textStyle: {
    fontSize: AppFont.commonFont.small,
  },
  ImageButtonstyle: {
    flexDirection: 'row',
    width: getWidth(90),
    alignSelf: 'center',
    height: getHeight(5.5),
    backgroundColor: Theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Theme.borders.normalRadius,
    borderColor: Theme.colors.lightMist,
    borderWidth: 1,
  },
  imageView: {
    justifyContent: 'center',
  },
  socialButtonText: {
    color: Theme.colors.black,
  },
  imgStyle: {
    width: normalized.wp('8'),
    height: normalized.wp(7),
    // marginRight: 12,
  },
});
