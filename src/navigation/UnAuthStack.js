import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';
import SetupProfile from '../screens/UnAuthStack/SetupProfile/SetupProfile';
import { useSelector } from 'react-redux';

export default function UnAuthStack() {
  const Stack = createNativeStackNavigator();

  const {SetUpProfileDone} =useSelector(state=>state.userReducer);
  return (
    <Stack.Navigator
    initialRouteName={SetUpProfileDone ? Routes.BottomStack : Routes.SetupProfile}
      screenOptions={{
        headerShown: false,
        orientation: 'default',
        freezeOnBlur: true,
        animation:"slide_from_bottom"
      }}
    >
      <Stack.Screen name={Routes.SetupProfile} component={SetupProfile} />
 

      
    </Stack.Navigator>
  );
}
