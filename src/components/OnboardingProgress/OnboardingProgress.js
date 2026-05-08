import React from 'react';
import { View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Theme } from '../../libs';

const styles = {
  wrap: {
    width: '100%',
    position: 'absolute',
    top: verticalScale(38),
    zIndex: 10,
    alignItems: 'center',
  },
  container: {
    width: '86%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  segment: {
    flex: 1,
    height: moderateScale(4),
    borderRadius: moderateScale(4),
    marginHorizontal: moderateScale(3),
  },
};

const OnboardingProgress = ({ total, currentIndex }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        {Array.from({ length: total }).map((_, index) => {
          const isVisited = index <= currentIndex;
          return (
            <View
              key={`progress-${index}`}
              style={[
                styles.segment,
                { backgroundColor: isVisited ? Theme.colors.white : '#7D8495' },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default OnboardingProgress;
