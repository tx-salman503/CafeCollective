import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';
import { moderateScale } from 'react-native-size-matters';
import { styles } from './style';

const QualityStatusCard = ({
  SvgIcon,
  title,
  values = ['Bad', 'Decent', 'Great'],
  selectedIndex = 1,
  onSelect,
  iconSize = 20,
  containerStyle,
}) => {
  // dynamic thumb position
  const thumbLeft = `${(selectedIndex / (values.length - 1)) * 100}%`;

  return (
    <View style={[styles.cardContainer, containerStyle]}>
      {/* Header */}
      <View style={styles.headerRow}>
        {SvgIcon && (
          <SvgXml
            xml={SvgIcon}
            width={moderateScale(iconSize)}
            height={moderateScale(iconSize)}
          />
        )}

        <NativeText
          value={title}
          style={[combineStyle.text16Bold, styles.title]}
        />

        {/* Selected label */}
        <View style={styles.statusBadge}>
          <NativeText
            value={values[selectedIndex]}
            style={styles.statusText}
          />
        </View>
      </View>

      {/* Slider */}
      <View style={styles.sliderWrapper}>
        <View style={styles.track} />

        <View
          style={[
            styles.thumb,
            {
              left: thumbLeft,
              marginLeft: -moderateScale(14),
            },
          ]}
        />
      </View>

      {/* Labels */}
      <View style={styles.labelsRow}>
        {values.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSelect?.(index)}
          >
            <NativeText
              value={item}
              style={[
                combineStyle.text14Regular,
                styles.label,
              
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QualityStatusCard;