import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';
import { moderateScale } from 'react-native-size-matters';
import { styles } from './style';

const THUMB_SIZE = moderateScale(28);

const QualityStatusCard = ({
  SvgIcon,
  title,
  values = ['Bad', 'Decent', 'Great'],
  selectedIndex = 1,
  onSelect,
  iconSize = 20,
  containerStyle,
}) => {
  // Store each label's measured center X position
  const [labelCenters, setLabelCenters] = useState([]);
  const [containerX, setContainerX] = useState(0);

  const handleLabelLayout = (e, index) => {
    const { x, width } = e.nativeEvent.layout;
    const center = x + width / 2;
    setLabelCenters(prev => {
      const updated = [...prev];
      updated[index] = center;
      return updated;
    });
  };

  const handleContainerLayout = (e) => {
    setContainerX(e.nativeEvent.layout.x);
  };

  // Thumb left = center of selected label - half thumb size
  const thumbLeft = labelCenters[selectedIndex] != null
    ? labelCenters[selectedIndex] - THUMB_SIZE / 2
    : null;

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

      {/* Slider + Labels share same container so X coords match */}
      <View onLayout={handleContainerLayout}>
        {/* Slider */}
        <View style={styles.sliderWrapper}>
          <View style={styles.track} />
          {thumbLeft != null && (
            <View
              style={[
                styles.thumb,
                {
                  position: 'absolute',
                  left: thumbLeft,
                },
              ]}
            />
          )}
        </View>

        {/* Labels */}
        <View style={styles.labelsRow}>
          {values.map((item, index) => (
            <TouchableOpacity
              key={index}
              onLayout={(e) => handleLabelLayout(e, index)}
              onPress={() => onSelect?.(index)}
            >
              <NativeText
                value={item}
                style={[combineStyle.text14Regular, styles.label]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default QualityStatusCard;