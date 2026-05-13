import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';


const StandoutFeatures = ({
  SvgIcon,
  title = 'Standout Features',
  options = [],
  onPress,
  selectedOptions = [],
  iconSize = 24,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* ── Header ── */}
      <View style={styles.header}>
        {SvgIcon && (
          <SvgXml
            xml={SvgIcon}
            width={moderateScale(iconSize)}
            height={moderateScale(iconSize)}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* ── Tags Grid ── */}
      <View style={styles.tagsWrapper}>
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <TouchableOpacity
              key={option}
              activeOpacity={0.75}
              onPress={() => onPress?.(option)}
              style={[
                styles.tag,
                isSelected ? styles.tagActive : styles.tagInactive,
              ]}
            >
              <Text
                style={[
                  styles.tagText,
                  isSelected ? styles.tagTextActive : styles.tagTextInactive,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default StandoutFeatures;

/* ─────────────────────────── Styles ─────────────────────────── */
const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    gap: moderateScale(16),
  },

  /* Header row */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#FFFFFF',
  },

  /* Tags */
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(10),
  },
  tag: {
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(30),
    borderWidth: 1,
  },
  tagInactive: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,0.2)',
  },
  tagActive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  tagText: {
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  tagTextInactive: {
    color: '#FFFFFF',
  },
  tagTextActive: {
    color: '#0F1B3C',
  },
});