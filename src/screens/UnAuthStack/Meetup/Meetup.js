import { FlatList, TouchableOpacity, View } from 'react-native'
import React ,{useState}from 'react'
import { NativeInput, SafeFlexView } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { MeetupData } from '../../../utils/export'
import { styles } from './style'
import {  SvgXml } from 'react-native-svg'
import { filterSearchsvg, FilterSvg, plusIcon } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { Routes } from '../../../navigation/Routes'
import FilterModal from '../../../components/FilterModal/FilterModal'
import MeetupCard from './MeetupCard'
import { useTranslation } from 'react-i18next'

const Meetup = ({ navigation }) => {
  const { t } = useTranslation();
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <MeetupCard
      item={item}
      onPress={() => navigation.navigate(Routes.MeetupDetails)}
    />
  )


  return (
    <SafeFlexView top={false} islinear={false}>
      <NativeHeader title={t('Meetup.title')} />
      <View style={styles.main}>
        <View style={styles.row}>
          <NativeInput
              placeholder={t('Meetup.searchPlaceholder')}
              onChangeText={() => {}}
              leftComponent={<SvgXml xml={filterSearchsvg} width={moderateScale(20)} height={moderateScale(20)} />}
              inputContainerStyle={styles.searchBar}
              />
                 <TouchableOpacity style={styles.filter} onPress={()=>{setFilterModalVisible(true)}} >
                <SvgXml xml={FilterSvg} width={moderateScale(46)} height={moderateScale(46)} />
              </TouchableOpacity>
           
        </View>
        <FlatList
          data={MeetupData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.FlotingButton} activeOpacity={0.7} onPress={() => { navigation.navigate(Routes.CreateMeetup) }}>
          <SvgXml xml={plusIcon} width={moderateScale(22)} height={moderateScale(22)} />
        </TouchableOpacity>
      </View>

<FilterModal visible={filterModalVisible} onClose={() => setFilterModalVisible(false)} />

    </SafeFlexView>
  )
}

export default Meetup