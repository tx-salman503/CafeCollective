import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, PanResponder } from 'react-native';
import { SvgXml } from 'react-native-svg';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';
import { moderateScale } from 'react-native-size-matters';
import { styles } from './style';

const THUMB_SIZE = moderateScale(28);
const SWIPE_THRESHOLD = 20; // Kitna swipe karne par move kare

const QualityStatusCard = ({
  SvgIcon,
  title,
  values = ['Bad', 'Decent', 'Great'],
  selectedIndex = 1,
  onSelect,
  iconSize = 20,
  containerStyle,
}) => {
  const [labelCenters, setLabelCenters] = useState([]);
  const [containerX, setContainerX] = useState(0);
  const currentIndex = useRef(selectedIndex);

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

  // ✅ PanResponder — swipe detect karega
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 5; // Horizontal swipe pakdo
      },
      onPanResponderRelease: (_, gestureState) => {
        const { dx } = gestureState;

        if (dx > SWIPE_THRESHOLD) {
          // ✅ Right swipe — next index
          const next = Math.min(currentIndex.current + 1, values.length - 1);
          currentIndex.current = next;
          onSelect?.(next);
        } else if (dx < -SWIPE_THRESHOLD) {
          // ✅ Left swipe — previous index
          const prev = Math.max(currentIndex.current - 1, 0);
          currentIndex.current = prev;
          onSelect?.(prev);
        }
      },
    })
  ).current;

  // Sync ref when selectedIndex prop changes
  React.useEffect(() => {
    currentIndex.current = selectedIndex;
  }, [selectedIndex]);

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
        <View style={styles.statusBadge}>
          <NativeText
            value={values[selectedIndex]}
            style={styles.statusText}
          />
        </View>
      </View>

      {/* ✅ PanResponder yahan lagao — slider + labels dono cover ho */}
      <View onLayout={handleContainerLayout} {...panResponder.panHandlers}>
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