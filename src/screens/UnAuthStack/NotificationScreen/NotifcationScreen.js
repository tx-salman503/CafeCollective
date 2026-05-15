import { View,  } from 'react-native'
import React from 'react'
import { SafeFlexView } from '../../../components'
import AppHeader from '../../../components/AppHeaders/AppHeader'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { Theme } from '../../../libs'

const NotifcationScreen = () => {



  return (
    <SafeFlexView>
      <AppHeader title={"Notifications"} label={"Mark All Read"} />
      <View style={styles.container}>

        <NativeText value={"Today"} style={[combineStyle.text16Semi, { color: Theme.colors.boldGray }]} />
        <View style={styles.label}>
          <View style={[combineStyle.rowStyle, { justifyContent: "space-between" }]}>
            <NativeText value={"Discovering"} style={combineStyle.text16Bold} />
            <NativeText value={"2m ago"} style={combineStyle.text10Bold} />
          </View>
          <NativeText value={"3 undiscovered cafes nearby. Start discovering to earn extra beans!"} style={combineStyle.text14Mid} />
        </View>
      </View>
    </SafeFlexView>
  )
}

export default NotifcationScreen