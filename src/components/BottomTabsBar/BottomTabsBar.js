import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import NativeText from '../AppTexts/NativeText';
import { moderateScale } from 'react-native-size-matters';
import { SettingSvg,FavouriteSvg,ProfileSvg,ActiveHomeSvg,ActiveFavouriteSvg,ActiveSettingSvg,ActiveProfileSvg,HomeSvg } from '../../assets/Svgs';
import { Theme } from '../../libs';

const TABS = [
  { name: 'Home',      label: 'Home',       icon: HomeSvg,      activeIcon: ActiveHomeSvg },
  { name: 'Favorites', label: 'Favourites',  icon: FavouriteSvg, activeIcon: ActiveFavouriteSvg },
  { name: 'Settings',  label: 'Settings',   icon: SettingSvg,  activeIcon: ActiveSettingSvg },
  { name: 'Profile',   label: 'Profile',    icon: ProfileSvg,   activeIcon: ActiveProfileSvg },
];

const BottomTabsBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom + moderateScale(12) }]}>
      <View style={styles.container}>
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
            navigation.emit({ type: 'tabLongPress', target: route.key });
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
              style={[styles.tabItem, isFocused && styles.tabItemActive]}
              activeOpacity={0.8}
            >
              <SvgXml
                xml={isFocused ? tab.activeIcon : tab.icon}
                width={moderateScale(24)}
                height={moderateScale(24)}
              />
              <NativeText
                value={tab.label}
                style={[styles.label, isFocused && styles.activeLabel]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabsBar;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: moderateScale(8),
  },
  container: {
    width:"90%",
    flexDirection: 'row',
    alignItems: 'center',
       backgroundColor: Theme.colors.PrimaryBlue,  
       borderWidth:1,
       borderColor:Theme.colors.lightTransparet,
    borderRadius: moderateScale(40),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    justifyContent:"space-between"
 
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(30),
    gap: moderateScale(3),
  },
  tabItemActive: {
    // backgroundColor: '#1e293b',        // active tab subtle highlight
  },
  label: {
    fontSize: moderateScale(11),
    color: '#6b7280',                  // inactive gray
  },
  activeLabel: {
    color: '#ffffff',                  // active white
    fontWeight: '600',
  },
});