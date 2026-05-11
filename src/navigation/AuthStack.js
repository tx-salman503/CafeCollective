import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';
import OnBordingScreen from '../screens/AuthStack/Onboarding/Onboarding';
import OnBordingScreen2 from '../screens/AuthStack/Onboarding2/Onboarding2';
import OnBordingScreen3 from '../screens/AuthStack/Onboarding3/Onboarding3';
import FirstOnboardingScreen from '../screens/AuthStack/FirstOnboarding/FirstOnboarding';
import Onboarding20Screen from '../screens/AuthStack/Onboarding20/Onboarding20';
import SignupScreen from '../screens/AuthStack/Signup/Signup';
import { useSelector } from 'react-redux';
import SignIn from '../screens/AuthStack/SignIn.js/SignIn';
import VerifyOtp from '../screens/AuthStack/VarifyOtp/VerifyOtp';
import ForgetPassword from '../screens/AuthStack/ForgetPassword/ForgetPassword';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
    const { onbording } = useSelector(state => state?.userReducer);
  return (
    <Stack.Navigator
      initialRouteName={!onbording ? Routes.OnboardingScreen : Routes.Signup}
      screenOptions={{
        headerShown: false,
        orientation: 'default',
        freezeOnBlur: true,
      }}
    >
      <Stack.Screen name={Routes.OnboardingScreen} component={OnBordingScreen} />
      <Stack.Screen name={Routes.OnboardingScreen2} component={OnBordingScreen2} />
      <Stack.Screen name={Routes.FirstOnboardingScreen} component={FirstOnboardingScreen} />
      <Stack.Screen name={Routes.OnboardingScreen3} component={OnBordingScreen3} />
      <Stack.Screen name={Routes.Onboarding20Screen} component={Onboarding20Screen} />
      <Stack.Screen name={Routes.LoginScreen} component={SignIn} />
      <Stack.Screen name={Routes.Signup} component={SignupScreen} />
      <Stack.Screen name={Routes.VerifyOtp} component={VerifyOtp} />
      <Stack.Screen name={Routes.ForgetPassword} component={ForgetPassword} />

    </Stack.Navigator>
  );
}
