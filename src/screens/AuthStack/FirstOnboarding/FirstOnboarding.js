import React from 'react';
import FirstOnboardingComponent from '../../../components/OnBoarding3Component/FirstScreen/FirstOnbardingSection';
import { Routes } from '../../../navigation/Routes';

const FirstOnboardingScreen = ({ navigation }) => {
  return <FirstOnboardingComponent onNext={() => navigation.navigate(Routes.OnboardingScreen3)} />;
};

export default FirstOnboardingScreen;
