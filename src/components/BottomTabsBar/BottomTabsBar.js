import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import NativeText from '../AppTexts/NativeText';
import { Theme } from '../../libs';
import { useTranslation } from 'react-i18next';

import {
  MapSvg,
  ActiveMapSvg,
  MeetupSvg,
  ActiveMeetupSvg,
  ChatsSvg,
  ActiveChatsSvg,
  ProfileSvg,
  ActiveProfileSvg,
} from '../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';

const TABS = [
  {
    name: 'Map',
    labelKey: 'BottomTabs.mapLabel',
    icon: MapSvg,
    activeIcon: ActiveMapSvg,
  },
  {
    name: 'Meetup',
    labelKey: 'BottomTabs.meetupsLabel',
    icon: MeetupSvg,
    activeIcon: ActiveMeetupSvg,
  },
  {
    name: 'Chats',
    labelKey: 'BottomTabs.chatLabel',
    icon: ChatsSvg,
    activeIcon: ActiveChatsSvg,
  },
  {
    name: 'Profile',
    labelKey: 'BottomTabs.profileLabel',
    icon: ProfileSvg,
    activeIcon: ActiveProfileSvg,
  },
];

const BottomTabsBar = ({ state, descriptors, navigation }) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const tab = TABS.find(t => t.name === route.name);
        if (!tab) return null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <SvgXml
              xml={isFocused ? tab.activeIcon : tab.icon}
              width={24}
              height={24}
            />
            <NativeText
              value={t(tab.labelKey)}
              style={[
                styles.label,
                isFocused && styles.activeLabel,
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabsBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: moderateScale(80),
    backgroundColor: Theme.colors.white,
    borderTopWidth: moderateScale(0.5),
    borderTopColor: Theme.colors.lightBorder,
    paddingTop: moderateScale(10),
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    marginTop: moderateScale(4),
    fontSize: moderateScale(12),
    color: Theme.colors.gray,
    fontFamily: Theme.fontFamily.poppinsMedium,
  },
  activeLabel: {
    color: Theme.colors.navyBlue,
    fontFamily: Theme.fontFamily.poppinsSemiBold,
  },
});

