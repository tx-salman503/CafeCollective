import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplachScreen } from '../screens/SplachScreen/SplachScreen';
import { Routes } from './Routes';
import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';
import { SplachScreen2 } from '../screens/SplachScreen/SplachScreen2';


const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName={Routes.SplashScreen}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.SplashScreen} component={SplachScreen} />
        <Stack.Screen name={Routes.SplashScreen2} component={SplachScreen2} />
      <Stack.Screen name={Routes.AuthStack} component={AuthStack} />
      <Stack.Screen name={Routes.UnAuthStack} component={UnAuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
