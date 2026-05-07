import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import NativeText from '../AppTexts/NativeText'
import { styles } from './style'
import { UserData } from '../../utils/export'
import { moderateScale } from 'react-native-size-matters'

const Users = () => {


    const renderItem=({item})=>(
        <View style={styles.imgContainer}>
            <Image source={item.img} style={styles.img}/>
            <NativeText value={item.name} style={styles.name}/>
        </View>
    )



  return (
    <View>
 <NativeText value={"Participants"} style={styles.label}/>
<FlatList
data={UserData}
renderItem={renderItem}
keyExtractor={(item) => item.id.toString()}
contentContainerStyle={{flexDirection:"row",gap:moderateScale(20),alignItems:"center",}}
horizontal
showsHorizontalScrollIndicator={false}

/>
    </View>
  )
}

export default Users