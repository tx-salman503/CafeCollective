import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import NativeText from '../AppTexts/NativeText';
import { Theme } from '../../libs';
import { moderateScale } from 'react-native-size-matters';

const FilterChips = ({ data = [], onFilterSelect }) => {
  const [selectedId, setSelectedId] = useState(data[0]?.id || null);

  const handleFilterPress = (item) => {
    setSelectedId(item.id);
    onFilterSelect?.(item);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      scrollEventThrottle={16}
    >
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.chip,
            selectedId === item.id && styles.activeChip,
          ]}
          onPress={() => handleFilterPress(item)}
          activeOpacity={0.7}
        >
          {item.svg && (
            <SvgXml
              xml={item.svg}
              width={moderateScale(15)}
              height={moderateScale(15)}
              style={styles.chipIcon}
            />
          )}
          <NativeText
            value={item.text}
            style={[
              styles.chipText,
              selectedId === item.id && styles.activeChipText,
            ]}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FilterChips;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: moderateScale(12),
  },
  contentContainer: {
    paddingHorizontal: moderateScale(16),
    gap: moderateScale(10),
  },
  chip: {
    height: moderateScale(31),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8),
    // paddingVertical: moderateScale(10),
    borderRadius: moderateScale(9),
  backgroundColor: Theme.colors.lightTransparet,
    borderWidth: moderateScale(1),
    borderColor: Theme.colors.lightTransparet,
  
  },
  activeChip: {
    backgroundColor: Theme.colors.white,
    borderColor: Theme.colors.navyBlue || '#2C4379',
  },
  chipIcon: {
    marginRight: moderateScale(8),
  },
  chipText: {
    fontSize: moderateScale(13),
    color: Theme.colors.white,
    fontFamily: Theme.fontFamily.poppinsRegular,
  },
  activeChipText: {
    color: Theme.colors.navyBlue || '#2C4379',
    fontFamily: Theme.fontFamily.poppinsSemiBold,
  },
});
