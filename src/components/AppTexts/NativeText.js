import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style';

function NativeText({
  style,
  children,
  numberOfLines,
  value,
  valueOptions,
  onPress,
  ...props
}) {
  const { t } = useTranslation();
  // const content = value ? t(value, valueOptions) : children;
  const content = value ;

  const hitSlop = { top: 8, bottom: 5, left: 5, right: 5 };

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} hitSlop={8} activeOpacity={0.2}>
        <Text style={[styles.textStyle, style]} numberOfLines={numberOfLines} {...props}>
          {content}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <Text style={[styles.textStyle, style]} numberOfLines={numberOfLines} {...props}>
      {content}
    </Text>
  );
}

export default NativeText;