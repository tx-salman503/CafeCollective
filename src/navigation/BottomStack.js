import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Keyboard, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import BottomTabsBar from '../components/BottomTabsBar/BottomTabsBar';
import Map from '../screens/UnAuthStack/Map/Map';
import Meetup from '../screens/UnAuthStack/Meetup/Meetup';
import Chats from '../screens/UnAuthStack/Chats/Chats';
import Profile from '../screens/UnAuthStack/Profile/Profile';

const Tab = createBottomTabNavigator();

const tabScreens = {
  Map: Map,
  Meetup: Meetup,
  Chats: Chats,
  Profile: Profile,
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
      initialRouteName="Map"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // Hide default tab bar (we use custom)
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
