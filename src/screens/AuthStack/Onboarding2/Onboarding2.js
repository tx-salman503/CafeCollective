import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeFlexView } from '../../../components';
import Onbording8 from '../../../components/Onboarding2Compoenet/Onboarding8/Onbording8';
import Onbording9 from '../../../components/Onboarding2Compoenet/Onboding9/Onbording9';
import Onbording10 from '../../../components/Onboarding2Compoenet/Onboarding10/Onbording10';
import Onbording11 from '../../../components/Onboarding2Compoenet/Onboarding11/Onbording11';
import { Routes } from '../../../navigation/Routes';
import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

const onboardingData = [
  { id: '8', Component: Onbording8 },
  { id: '9', Component: Onbording9 },
  { id: '10', Component: Onbording10 },
  { id: '11', Component: Onbording11 },
];

const OnBordingScreen2 = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishOnboarding = () => {
    navigation.navigate(Routes.FirstOnboardingScreen);
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(prev => prev + 1);
      return;
    }
    finishOnboarding();
  };

  const { Component: CurrentComponent } = onboardingData[currentIndex];

  return (
    <SafeFlexView bar top={false} islinear={false}>
      <OnboardingProgress
        total={onboardingData.length}
        currentIndex={currentIndex}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleNext}
        style={{ flex: 1 }}
      >
        <CurrentComponent />
      </TouchableOpacity>
    </SafeFlexView>
  );
};

export default OnBordingScreen2;