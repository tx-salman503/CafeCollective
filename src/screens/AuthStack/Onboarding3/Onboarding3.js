import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeFlexView } from '../../../components';
import Onbording12 from '../../../components/OnBoarding3Component/Onboarding12/Onboarding12';
import Onboarding13 from '../../../components/OnBoarding3Component/Onboarding13/Onboarding13';
import Onboarding14 from '../../../components/OnBoarding3Component/Onboarding14/Onboarding14';
import Onboarding15 from '../../../components/OnBoarding3Component/Onboarding15/Onboarding15';
import Onbording16 from '../../../components/OnBoarding3Component/Onboarding16/Onbording16';
import Onbording17 from '../../../components/OnBoarding3Component/Onboarding17/Onbording17';
import Onbording18 from '../../../components/OnBoarding3Component/Onboarding18/Onbording18';
import Onbording19 from '../../../components/OnBoarding3Component/Onboarding19/Onbording19';
import { Routes } from '../../../navigation/Routes';
import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

const onboardingData = [
  { id: '12', Component: Onbording12 },
  { id: '13', Component: Onboarding13 },
  { id: '14', Component: Onboarding14 },
  { id: '15', Component: Onboarding15 },
  { id: '16', Component: Onbording16 },
  { id: '17', Component: Onbording17 },
  { id: '18', Component: Onbording18 },
  { id: '19', Component: Onbording19 },
];

const OnBordingScreen3 = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishOnboarding = () => {
    navigation.navigate(Routes.Onboarding20Screen);
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

export default OnBordingScreen3;