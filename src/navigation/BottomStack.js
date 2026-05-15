import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Keyboard, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BottomTabsBar from '../components/BottomTabsBar/BottomTabsBar';
import HomeScreen from '../screens/UnAuthStack/HomeScreen/HomeScreen';
import FavouriteScreen from '../screens/UnAuthStack/FavouriteScreen/FavouriteScreen';
import SettingScreen from '../screens/UnAuthStack/SettingsScreen/SettingScreen';
import ProfileScreen from '../screens/UnAuthStack/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabScreens = {
  Home: HomeScreen,
  Favorites: FavouriteScreen,
  Settings: SettingScreen,
  Profile: ProfileScreen,
};

const BottomStack = () => {
  const insets = useSafeAreaInsets();
  const { onbording } = useSelector(state => state?.userReducer);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
        contentStyle: { paddingBottom: 80 }, // ← screens ka content tab bar se overlap na ho
      }}
      tabBar={props => {

        if (isKeyboardVisible && Platform.OS === 'android') {
          return null;
        }
        return <BottomTabsBar {...props} />;
      }}
    >
      {Object.entries(tabScreens).map(([name, component]) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomStack;
