import React from 'react'
import { SafeFlexView } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { FlatList, Image, View } from 'react-native'
import { images } from '../../../assets/images'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import { moderateScale } from 'react-native-size-matters'
import MeetupCard from '../Meetup/MeetupCard'
import { HostEventList } from '../../../utils/export'


const tags = ['Courchevel', 'SKI', 'Beginner']




const HostProfile = () => {

   const renderItem = ({ item }) => (
    <MeetupCard
      item={item}
      onPress={() => navigation.navigate(Routes.MeetupDetails)}
    />
  )
  return (
<SafeFlexView top={false}>
  <NativeHeader title="Host Profile" back />
  <View style={styles.container}>

    <View style={styles.imgContainer}>
      <Image source={images.User1} style={styles.img}/>
      <NativeText value={"Alex"} style={styles.name}/>
<View style={styles.row}>
 {tags.map((tag, index) => (
        <View key={index} style={index===0?styles.pupelTag: index===1?styles.WarningTag: styles.GreenTag}>
          <NativeText value={tag} style={index===0?styles.purpelText: index===1?styles.WanrningText: styles.GreenText} />
        </View>
      ))}
</View>
    </View>
<NativeText value="About" style={[styles.title]} />
<NativeText value="I love finding fresh powder in the back bowls . My meetups are usually fast-packed , but we always stop fo a good lunch at the summit lodge. Looking for people who are comfortable on black diamonds and enjoy the off-piste advanture." style={styles.detail} />
<NativeText value="Upcoming Meetups" style={[styles.title]} />
<FlatList
      data={HostEventList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      />
  </View>

</SafeFlexView>
  )
}

export default HostProfile