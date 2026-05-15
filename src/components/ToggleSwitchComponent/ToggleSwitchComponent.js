import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { moderateScale } from 'react-native-size-matters';
import { Theme } from '../../libs';

const ToggleSwitchComponent = ({ isOn, onToggle, trackColorOn, trackColorOff }) => {
  return (
    <View style={styles.container}>
      <ToggleSwitch
        isOn={isOn}
        onToggle={onToggle}
        onColor={Theme.colors.white}
        offColor={trackColorOff || Theme.colors.lightTransparet}
        size="medium"
        thumbOnStyle={styles.thumbOn}
        thumbOffStyle={styles.thumbOff}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbOn: {
    backgroundColor: Theme.colors.black,
  },
  thumbOff: {
    backgroundColor: Theme.colors.black,
  },
});

export default ToggleSwitchComponent;
