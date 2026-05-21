import { View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeFlexView } from '../../../components'
import { styles } from './style'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import NativeText from '../../../components/AppTexts/NativeText'
import ToggleSwitchComponent from '../../../components/ToggleSwitchComponent/ToggleSwitchComponent'
import { SvgXml } from 'react-native-svg'
import combineStyle from '../../../libs/combineStyle'
import { discoveringSvg, profileSvg, resturantSvg, smallsearchIcon, locationIcon, logoutSvg, Gosvg } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { Routes } from '../../../navigation/Routes'
import permissionUtils from '../../../utils/permissionUtils'
import { openSettings } from 'react-native-permissions'

const SettingScreen = ({ navigation }) => {
  const [toggles, setToggles] = useState({
    discovering: true,
    nearbyCafes: true,
    locationAccess: false,
  })

  useEffect(() => {
    const checkLocation = async () => {
      const hasPermission = await permissionUtils.checkLocationPermission()
      setToggles(prev => ({ ...prev, locationAccess: hasPermission }))
    }
    checkLocation()
  }, [])

  const handleToggle = async (key) => {
    if (key === 'locationAccess') {
      if (toggles.locationAccess) {
        // already on → send to settings to turn off
        Alert.alert(
          'Turn Off Location',
          'To disable location access, please go to your device Settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => openSettings().catch(() => {}) },
          ]
        )
      } else {
        // currently off → request permission
        const granted = await permissionUtils.requestLocationPermission()
        setToggles(prev => ({ ...prev, locationAccess: granted }))
      }
      return
    }

    // all other toggles
    setToggles(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const sections = [
    {
      title: 'Account',
      items: [
        { id: 'editProfile', label: 'Edit Profile', icon: profileSvg, type: 'arrow', onPress: () => { navigation.navigate(Routes.EditProfile) } },
      ],
    },
    {
      title: 'Notifications',
      items: [
        { id: 'discovering', label: 'Discovering Opportunities', icon: discoveringSvg, type: 'toggle' },
        { id: 'nearbyCafes', label: 'Nearby Cafes', icon: resturantSvg, type: 'toggle' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { id: 'searchRadius', label: 'Search Radius', icon: smallsearchIcon, type: 'arrow', rightLabel: '5 km', onPress: () => { } },
      ],
    },
    {
      title: 'Privacy',
      items: [
        { id: 'locationAccess', label: 'Location Access', icon: locationIcon, type: 'toggle' },
        { id: 'logout', label: 'Log Out', icon: logoutSvg, type: 'arrow', onPress: () => { navigation.navigate(Routes.RedeemReferral) } },
      ],
    },
  ]

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.listItem}
        onPress={item.type === 'arrow' ? item.onPress : undefined}
        activeOpacity={0.7}
      >
        <View style={[combineStyle.rowStyle, { gap: moderateScale(10) }]}>
          <SvgXml xml={item.icon} width={moderateScale(22)} height={moderateScale(22)} />
          <NativeText value={item.label} style={[combineStyle.text16Mid, styles.listItemText]} />
        </View>

        <View style={styles.endContainer}>
          {item.type === 'toggle' ? (
            <ToggleSwitchComponent
              isOn={toggles[item.id]}
              onToggle={() => handleToggle(item.id)}
            />
          ) : (
            <View style={[combineStyle.rowStyle, { gap: moderateScale(15) }]}>
              {item.rightLabel && (
                <NativeText value={item.rightLabel} style={combineStyle.text14Regular} />
              )}
              <SvgXml xml={Gosvg} width={moderateScale(14)} height={moderateScale(14)} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeFlexView>
      <NativeHeader title="Settings & Privacy" isoBorder />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <NativeText value={section.title} style={[combineStyle.text20Bold, styles.sectionLabel]} />
            {section.items.map(renderItem)}
          </View>
        ))}
      </ScrollView>
    </SafeFlexView>
  )
}

export default SettingScreen