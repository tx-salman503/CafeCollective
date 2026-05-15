import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './SafeFlexViewStyle';

export default function SafeFlexView({
  children,
  bar = false,
  top = true,
  isBackground = true,
}) {
  const insets = useSafeAreaInsets();
  const content = <View style={{ flex: 1 }}>{children}</View>;

  return isBackground ? (
    <LinearGradient
    colors={["#2C4379","#182033"]}
    locations={[0, 0.45, 1]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={[
      styles.container,
      top ? { paddingTop: insets.top, paddingBottom: insets.bottom } : null,
    ]}
  >
      <StatusBar
        barStyle={bar ? 'dark-content' : 'light-content'}
        translucent
        backgroundColor="transparent"
      />
      {content}
    </LinearGradient>
  ) : (
    <View
      style={[
        styles.container,
        top ? { paddingTop: insets.top, paddingBottom: insets.bottom } : null,
      ]}
    >
      <StatusBar
        barStyle={bar ? 'dark-content' : 'light-content'}
        translucent
        backgroundColor="transparent"
      />
      {content}
    </View>
  );
}