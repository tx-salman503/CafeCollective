import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style';

function NativeText({
  style,
  children,
  numberOfLines,
  value,       
  valueOptions, 
  ...props
}) {
  const { t } = useTranslation();

  const content = value ? t(value, valueOptions) : children;

  return (
    <Text
      style={[styles.textStyle, style]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {content}
    </Text>
  );
}

export default NativeText;
