import React from 'react'
import { View, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../libs'

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index + 1 === currentStep
        return (
          <View
            key={index}
            style={[styles.dot, isActive ? styles.dotActive : styles.dotInactive]}
          />
        )
      })}
    </View>
  )
}

export default StepIndicator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(8),
  },
  dot: {
    height: moderateScale(8),
    borderRadius: moderateScale(100),
  },
  dotActive: {
    width: moderateScale(32),
    backgroundColor: Theme.colors.white,
  },
  dotInactive: {
    width: moderateScale(8),
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
})