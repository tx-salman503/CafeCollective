import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';
import OnBordingScreen from '../screens/AuthStack/Onboarding/Onboarding';
import { useSelector } from 'react-redux';


export default function AuthStack() {
  const{onbording}=useSelector(state=>state?.userReducer)
 
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    initialRouteName={Routes.OnboardingScreen}
      screenOptions={{
        headerShown: false,
        orientation: 'default',
        freezeOnBlur: true,
        animation:"slide_from_bottom"
      }}
    >
      <Stack.Screen name={Routes.OnboardingScreen} component={OnBordingScreen} />
      
    </Stack.Navigator>
  );
}
