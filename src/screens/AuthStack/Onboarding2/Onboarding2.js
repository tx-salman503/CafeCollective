import React, { useRef, useState } from 'react';
import { FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeFlexView } from '../../../components';
import Onbording8 from '../../../components/Onboarding2Compoenet/Onboarding8/Onbording8';
import Onbording9 from '../../../components/Onboarding2Compoenet/Onboding9/Onbording9';
import Onbording10 from '../../../components/Onboarding2Compoenet/Onboarding10/Onbording10';
import Onbording11 from '../../../components/Onboarding2Compoenet/Onboarding11/Onbording11';
import { Routes } from '../../../navigation/Routes';
import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

const { width: screenWidth } = Dimensions.get('window');

const onboardingData = [
  { id: '8', Component: Onbording8 },
  { id: '9', Component: Onbording9 },
  { id: '10', Component: Onbording10 },
  { id: '11', Component: Onbording11 },
];

const OnBordingScreen2 = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishOnboarding = () => {
    navigation.navigate(Routes.FirstOnboardingScreen);
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      return;
    }
    finishOnboarding();
  };

  return (
    <SafeFlexView bar top={false} islinear={false}>
      <OnboardingProgress total={onboardingData.length} currentIndex={currentIndex} />

     

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={1} onPress={handleNext} style={{ width: screenWidth }}>
            <item.Component />
          </TouchableOpacity>
        )}
      />
    </SafeFlexView>
  );
};

export default OnBordingScreen2;
