import { Image, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { clock, emojiFace, GoldenStar, mice, speaker, star, crowd1, dinner, ArrowRightSvg, calender } from '../../../assets/Svgs'
import RadioSelector from '../../RadioSelector/RadioSelector'
import MessageCard from '../../MessageCard/MessageCard'
import QualityStatusCard from '../../QualityStatusCard/QualityStatusCard'
import PowerOutletsAvailability from '../../PowerOutletsAvailability/PowerOutletsAvailability'
import { SvgXml } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import { images } from '../../../assets/images'
import { Theme } from '../../../libs'
import { dispatchOnboardingComfortEnvirment } from '../../../redux/slices/CafeOnboardingSlice'


const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const ComfortEnvirment = ({ onNext }) => {

  const [wifiIndex, setWifiIndex] = useState(1)
  const [crowd, setCrowd] = useState('Balanced')
  const [foodRating, setFoodRating] = useState(0)
  const [selectedDay, setSelectedDay] = useState('Monday')

  const { OnboardingComfortEnvirmentType } = useSelector(state => state.cafeReducer)
  const dispatch = useDispatch()

  const EmojiArray = [images.Angery, images.Mid, images.Smile, images.Excited]

  const renderStars = (rating, setRating) => {
    return (
      <View style={styles.starRow}>
        {[1, 2, 3, 4, 5].map((index) => {
          const selected = index <= rating
          return (
            <TouchableOpacity
              key={index}
              style={styles.starButton}
              onPress={() => setRating(index)}
            >
              <SvgXml xml={selected ? GoldenStar : star} width={38} height={38} />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const renderDayToggle = () => {
    return (
      <View style={dayStyles.grid}>
        {DAYS.map((day) => {
          const isSelected = selectedDay === day
          return (
            <TouchableOpacity
              key={day}
              style={[dayStyles.dayButton, isSelected && dayStyles.dayButtonActive]}
              onPress={() => setSelectedDay(day)}
              activeOpacity={0.75}
            >
              <NativeText
                value={day}
                style={[dayStyles.dayText, isSelected && dayStyles.dayTextActive]}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {OnboardingComfortEnvirmentType ? (
            <NativeText value={'Comfort & Environment'} style={combineStyle.text28Bold} />
          ) : (
            <NativeText value={'Edit Comfort & Environment'} style={combineStyle.text28Bold} />
          )}
          <NativeText value={'Find cafes that are comfortable, quit and relaxing.'} style={combineStyle.text14Regular} />
        </View>

        <RadioSelector
          titleIcon={mice}
          title="Comfort"
          options={[
            { label: 'Hard Seating', subLabel: '(Stools / not suitable for long stays)' },
            { label: 'Okay Comfort', subLabel: '(Average seating comfort)' },
            { label: 'Very Comfortable', subLabel: '(Soft chairs)' },
          ]}
          onSelect={(index, value) => console.log(index, value)}
        />

        <QualityStatusCard
          title="Noise Level"
          SvgIcon={speaker}
          values={['Very Quiet', 'Moderate', 'Loud']}
          selectedIndex={wifiIndex}
          onSelect={setWifiIndex}
        />

        <View style={[styles.ratingHeader, { marginTop: moderateScale(10) }]}>
          <SvgXml xml={calender} width={20} height={20} />
          <NativeText value={'Day of Visit'} style={[combineStyle.text16Bold, styles.cardTitle]} />
        </View>

        {renderDayToggle()}

        <RadioSelector
          titleIcon={clock}
          title={`Time of Visit at ${selectedDay}`}
          options={[
            { label: 'Morning', subLabel: '(6 am to 12 pm)' },
            { label: 'Afternoon', subLabel: '(12 pm to 5 pm)' },
            { label: 'Evening', subLabel: '(5 pm to 9pm+)' },
          ]}
          onSelect={(index, value) => console.log(index, value)}
        />

        <PowerOutletsAvailability
          SvgIcon={crowd1}
          title={`Crowdedness in ${selectedDay}`}
          options={['Empty', 'Balanced', 'Busy']}
          selectedValue={crowd}
          onChange={setCrowd}
        />

        <View style={styles.card}>
          <View style={styles.ratingHeader}>
            <SvgXml xml={emojiFace} width={20} height={20} />
            <NativeText value={'Staff Friendliness'} style={[combineStyle.text16Bold, styles.cardTitle]} />
          </View>
          <View style={styles.badge}>
            {EmojiArray.map((item, index) => (
              <TouchableOpacity key={index}>
                <Image source={item} style={{ width: moderateScale(40), height: moderateScale(40) }} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={[styles.ratingHeader, { marginTop: moderateScale(10) }]}>
            <SvgXml xml={dinner} width={20} height={20} />
            <NativeText value={'Service Quality'} style={[combineStyle.text16Bold, styles.cardTitle]} />
          </View>
          {renderStars(foodRating, setFoodRating)}

          <MessageCard
            touchable={true}
            isBtn={true}
            text={OnboardingComfortEnvirmentType ? 'Next' : 'Save'}
            onPress={OnboardingComfortEnvirmentType ? () => { onNext(); dispatch(dispatchOnboardingComfortEnvirment(true)); } : () => { console.error("Saved") }}
            containerStyle={{ marginTop: moderateScale(15) }}
            svg={ArrowRightSvg}
          />
        </View>
      </View>
    </View>
  )
}

const dayStyles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(10),
  },
  dayButton: {
    width: '31%',
    height: moderateScale(44),
    borderRadius: moderateScale(28),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayButtonActive: {
    backgroundColor: Theme.colors.white,
    borderColor: Theme.colors.white,
  },
  dayText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: 'rgba(255,255,255,0.75)',
  },
  dayTextActive: {
    color: Theme.colors.primary ?? '#1a2340',
    fontWeight: '700',
  },
})

export default ComfortEnvirment