import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';
import { useSelector } from 'react-redux';
import LocationAccessScreen from '../screens/UnAuthStack/LocationAccessScreen/LocationAccessScreen';
import WelcomScreen from '../screens/UnAuthStack/WelcomScreen/WelcomScreen';
import CafeSearchScreen from '../screens/UnAuthStack/CafeSearchScreen/CafeSearchScreen';
import DiscoverScreen from '../screens/UnAuthStack/DiscoverScree/DiscoverScreen';
import OnboardingCafeDiscovery from '../screens/UnAuthStack/OnboardingCafeDiscovery/OnboardingCafeDiscovery'; 
import AllSetScreen from '../screens/UnAuthStack/AllsetScreen/AllSet';
import BottomStack from './BottomStack';
import AllCafe from '../screens/UnAuthStack/AllCafe/AllCafe';
import NotifcationScreen from '../screens/UnAuthStack/NotificationScreen/NotifcationScreen';
import EditProfile from '../screens/UnAuthStack/EditProfile/EditProfile';
import MyInvitations from '../screens/UnAuthStack/MyInvitations/MyInvitations';
import CafeDetail from '../screens/UnAuthStack/CafeDetail/CafeDetail';
import EditCafeDetail from '../screens/UnAuthStack/EditCafeDetail/EditCafeDetail';
export default function UnAuthStack() {
  const Stack = createNativeStackNavigator();

  const {setOnboardingCafeDiscovery} =useSelector(state=>state.userReducer);
  console.log("setOnboardingCafeDiscovery",setOnboardingCafeDiscovery)

  return (
    <Stack.Navigator
    initialRouteName={setOnboardingCafeDiscovery?Routes.BottomStack:Routes.LocationAccessScreen}
      screenOptions={{
        headerShown: false,
        orientation: 'default',
        freezeOnBlur: true,
      }}
    >
      <Stack.Screen name={Routes.LocationAccessScreen} component={LocationAccessScreen} />
      <Stack.Screen name={Routes.WelcomScreen} component={WelcomScreen} />
      <Stack.Screen name={Routes.CafeSearchScreen} component={CafeSearchScreen} />
      <Stack.Screen name={Routes.DiscoverScreen} component={DiscoverScreen} />
      <Stack.Screen name={Routes.OnboardingCafeDiscovery} component={OnboardingCafeDiscovery} />
      <Stack.Screen name={Routes.AllSetScreen} component={AllSetScreen} />
      <Stack.Screen name={Routes.BottomStack} component={BottomStack} />
      <Stack.Screen name={Routes.AllCafe} component={AllCafe} />
      <Stack.Screen name={Routes.NotifcationScreen} component={NotifcationScreen} />
      <Stack.Screen name={Routes.EditProfile} component={EditProfile} />
      <Stack.Screen name={Routes.MyInvitations} component={MyInvitations} />
      <Stack.Screen name={Routes.CafeDetail} component={CafeDetail} />
      <Stack.Screen name={Routes.EditCafeDetail} component={EditCafeDetail} />

    </Stack.Navigator>
  );
}
