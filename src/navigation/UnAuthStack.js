import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';
import { useSelector } from 'react-redux';
import LocationAccessScreen from '../screens/UnAuthStack/LocationAccessScreen/LocationAccessScreen';
import WelcomScreen from '../screens/UnAuthStack/WelcomScreen/WelcomScreen';
import CafeSearchScreen from '../screens/UnAuthStack/CafeSearchScreen/CafeSearchScreen';

export default function UnAuthStack() {
  const Stack = createNativeStackNavigator();

  const {SetUpProfileDone} =useSelector(state=>state.userReducer);
  return (
    <Stack.Navigator
    initialRouteName={Routes.LocationAccessScreen}
      screenOptions={{
        headerShown: false,
        orientation: 'default',
        freezeOnBlur: true,
      }}
    >
      <Stack.Screen name={Routes.LocationAccessScreen} component={LocationAccessScreen} />
      <Stack.Screen name={Routes.WelcomScreen} component={WelcomScreen} />
      <Stack.Screen name={Routes.CafeSearchScreen} component={CafeSearchScreen} />
 

      
    </Stack.Navigator>
  );
}
