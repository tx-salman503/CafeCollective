import React, { useState } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { SafeFlexView } from '../../../components';
import Onbording1 from '../../../components/OnbordingComponent/Onbording1';
import Onbording2 from '../../../components/OnbordingComponent/Onbording2/Onbording2';
import Onbording3 from '../../../components/OnbordingComponent/Onboding3/Onbording3';
import Onbording4 from '../../../components/OnbordingComponent/Onbording4/Onbording4';
import Onbording5 from '../../../components/OnbordingComponent/Onbording5/Onbording5';
import Onbording6 from '../../../components/OnbordingComponent/Onboding6/Onbording6';
import Onbording7 from '../../../components/OnbordingComponent/Onboding7/Onbording7';
import { Routes } from '../../../navigation/Routes';
import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

const onboardingData = [
  { id: '1', Component: Onbording1 },
  { id: '2', Component: Onbording2 },
  { id: '3', Component: Onbording3 },
  { id: '4', Component: Onbording4 },
  { id: '5', Component: Onbording5 },
  { id: '6', Component: Onbording6 },
  { id: '7', Component: Onbording7 },
];

const OnBordingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishOnboarding = () => {
    navigation.getParent()?.replace(Routes.SplashScreen3);
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

export default OnBordingScreen;