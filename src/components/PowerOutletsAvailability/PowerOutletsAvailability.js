import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';
import styles from './style';

const PowerOutletsAvailability = ({
  SvgIcon,
  title,
  options = ['None', 'Few', 'Plenty'],
  initialValue = 'Plenty',
  selectedValue,
  onChange,
  containerStyle,
  buttonStyle,
  activeButtonStyle,
  textStyle,
  activeTextStyle,
  iconSize = 20,
}) => {
  const [selected, setSelected] = useState(selectedValue ?? initialValue);

  useEffect(() => {
    if (selectedValue && selectedValue !== selected) {
      setSelected(selectedValue);
    }
  }, [selectedValue]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={styles.header}>
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
      </View>

      {/* buttons */}
      <View style={styles.optionsRow}>
        {options.map((option) => {
          const isActive = selected === option;

          return (
            <TouchableOpacity
              key={option}
              activeOpacity={0.8}
              onPress={() => handleSelect(option)}
              style={[
                styles.optionButton,
                isActive ? styles.activeButton : styles.inactiveButton,
                buttonStyle,
                isActive && activeButtonStyle,
              ]}
            >
              <NativeText
                value={option}
                style={[
                  styles.optionText,
                  isActive ? styles.activeText : styles.inactiveText,
                  textStyle,
                  isActive && activeTextStyle,
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PowerOutletsAvailability;