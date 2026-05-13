import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';
import { ActiveCircle, clock, InactiveCircle } from '../../assets/Svgs';
import { styles } from './style';

const RadioSelector = ({ title, titleIcon, options = [], onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePress = (index) => {
    setSelectedIndex(index);
    onSelect && onSelect(index, options[index]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <SvgXml xml={titleIcon || clock} width={20} height={20} />
        <NativeText
          value={title}
          style={[combineStyle.text16Mid, styles.headerText]}
        />
      </View>

      {/* Options */}
      {options.map((option, index) => {
        const isActive = selectedIndex === index;

        const label =
          typeof option === 'string' ? option : option.label;

        const subLabel =
          typeof option === 'string' ? null : option.subLabel;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.option, isActive && styles.optionActive]}
            onPress={() => handlePress(index)}
            activeOpacity={0.8}
          >
            <SvgXml
              xml={isActive ? ActiveCircle : InactiveCircle}
              width={20}
              height={20}
            />

            <View style={styles.textWrapper}>
              <NativeText
                value={label}
                style={[
                  combineStyle.text14Bold,
                  styles.optionLabel,
                  isActive && styles.optionLabelActive,
                ]}
              />

              {subLabel && (
                <NativeText
                  value={subLabel}
                  style={[
                    combineStyle.text10Regular,
                    styles.subLabel,
                    isActive && styles.subLabelActive,
                  ]}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioSelector;