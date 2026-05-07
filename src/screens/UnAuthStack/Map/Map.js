import React from 'react'
import HomeHeader from '../../../components/AppHeaders/HomeHeader'
import { SafeFlexView } from '../../../components'
import { Routes } from '../../../navigation/Routes'

const Map = ({navigation}) => {
  return (
    <SafeFlexView  top={false} >
    <HomeHeader title="Map" bellPress={() => navigation.navigate(Routes.Notification)} />

   </SafeFlexView>
  )
}

export default Map