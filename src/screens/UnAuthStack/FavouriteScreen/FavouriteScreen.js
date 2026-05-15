import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeFlexView } from '../../../components'
import { styles } from './style'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import CafeCard from '../../../components/CafeCard/CafeCardList'
import { CAFE_DATA, FavouriteDataArray } from '../../../utils/export'
import { moderateScale } from 'react-native-size-matters'

const FavouriteScreen = () => {
  return (
   <SafeFlexView>
    <View style={styles.container}>
  <NativeHeader title="My Favourites" isoBorder />
   <ScrollView style={styles.scrollContainer} contentContainerStyle={{paddingBottom:moderateScale(80)}}>
 <CafeCard data={FavouriteDataArray}/>
   </ScrollView>
    </View>
   </SafeFlexView>
  )
}

export default FavouriteScreen