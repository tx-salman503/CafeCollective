import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import { SvgXml } from 'react-native-svg';
import {
    HomeOnPress,
    HomeUnPress,
    CenterUnPress,
    CenterOnPress,
    CoursesUnPress,
    CoursesOnPress,
    LeaderboardUnPress,
    LeaderboardOnPress,
    ProfileUnPress,
    ProfileOnPress,
} from '../../assets/Svgs';

import { Theme } from '../../libs';

const { colors, } = Theme;

const BottomTabs = ({ activeTab, onTabPress }) => {
    
    const tabIcons = [
        { 
            name: 'Home', 
            icon: HomeUnPress, 
            activeIcon: HomeOnPress, 
            label: "Home"
        },
        { 
            name: 'Courses', 
            icon: CoursesUnPress, 
            activeIcon: CoursesOnPress, 
            label: "Courses"
        },
        { 
            name: 'Center', 
            icon: CenterOnPress, 
            activeIcon: CenterOnPress, 
            label: '', 
            isCenter: true 
        },
        { 
            name: 'Leaderboard', 
            icon: LeaderboardUnPress, 
            activeIcon: LeaderboardOnPress, 
            label: "Leaderboard"
        },
        { 
            name: 'Profile', 
            icon: ProfileUnPress, 
            activeIcon: ProfileOnPress, 
            label: "Profile" 
        },
    ];

    return (
        <View style={styles.container}>
            {tabIcons.map((tab) => (
                <TouchableOpacity
                    key={tab.name}
                    style={[
                        styles.tabItem,
                        tab.isCenter && styles.centerTabItem,
                        activeTab === tab.name && styles.activeTabItem,
                    ]}
                    onPress={() => onTabPress(tab.name)}
                    activeOpacity={0.7}
                >
                    {tab.isCenter ? (
                        <View style={styles.centerButton}>
                            <SvgXml
                                xml={activeTab === tab.name && tab.activeIcon ? tab.activeIcon : tab.icon}
                                style={styles.centerIcon}
                            />
                        </View>
                    ) : (
                        <>
                            <SvgXml
                                xml={activeTab === tab.name && tab.activeIcon ? tab.activeIcon : tab.icon}
                                style={[
                                    styles.tabIcon,
                                    {
                                        color: activeTab === tab.name ? colors.primary : colors.tabIconColor,
                                    },
                                ]}
                            />
                            <Text 
                                style={[
                                    styles.tabText,
                                    {
                                        color: activeTab === tab.name ? colors.primary : colors.tabIconColor,
                                    }
                                ]}
                            >
                                {tab.label}
                            </Text>
                        </>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:Theme.colors.white,
        height: scale(70), // Increased height to accommodate center button
        paddingBottom: scale(8),
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: -2 },
        elevation: 5,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerTabItem: {
        justifyContent: 'flex-start', 
        paddingTop: scale(5),
    },
    activeTabItem: {
        },
    tabIcon: {
        width: scale(24),
        height: scale(24),
        marginBottom: scale(2),
    },
    tabText: {
        fontSize: moderateScale(10),
        marginTop: scale(2),
        fontWeight: '500',
    },
    centerButton: {
        width: scale(56),
        height: scale(56),
        borderRadius: scale(28),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(-50), // Negative margin to make it extend above the tab bar
        backgroundColor: Theme.colors.navyBlue,
    },
    centerIcon: {
        width: scale(24),
        height: scale(24),
    },
});

export default BottomTabs;