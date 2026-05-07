import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import NativeText from '../../../components/AppTexts/NativeText'
import { SvgXml } from 'react-native-svg'
import { clock, joinPeopleIcon, locationIcon } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { styles } from './style'
import { useTranslation } from 'react-i18next'

const MeetupCard = ({ item, onPress }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <NativeText value={item.titleKey ? t(item.titleKey) : item.title} style={styles.title} />
      <NativeText value={item.detailKey ? t(item.detailKey) : item.detail} style={styles.detail} />
      <View style={[styles.rowContainer, { marginVertical: moderateScale(8) }]}>
        {item.tags.map((tag, index) => (
          <View key={index} style={index === 0 ? styles.pupelTag : index === 1 ? styles.WarningTag : styles.GreenTag}>
            <NativeText value={tag} style={index === 0 ? styles.purpelText : index === 1 ? styles.WanrningText : styles.GreenText} />
          </View>
        ))}
      </View>
      <View style={[styles.rowContainer]}>
        <View style={styles.row}>
          <SvgXml xml={clock} width={moderateScale(18)} height={moderateScale(18)} />
          <NativeText value={item.time} style={styles.label} />
        </View>
        <View style={styles.row}>
          <SvgXml xml={joinPeopleIcon} width={moderateScale(18)} height={moderateScale(18)} />
          <NativeText value={item.numberOfPeople} style={styles.label} />
        </View>
        <View style={styles.row}>
          <SvgXml xml={locationIcon} width={moderateScale(18)} height={moderateScale(18)} />
          <NativeText value={item.location} style={styles.label} />
        </View>
      </View>
      <NativeText value={item.date} style={styles.jointSvg} />
    </TouchableOpacity>
  )
}

export default MeetupCard
