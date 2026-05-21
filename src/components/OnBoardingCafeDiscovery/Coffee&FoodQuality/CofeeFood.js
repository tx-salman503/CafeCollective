import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import MessageCard from '../../MessageCard/MessageCard'
import { ActiveCircle, cofeeCup, fork, InactiveCircle, manuIcon, star, GoldenStar, ArrowRightSvg } from '../../../assets/Svgs'
import { SvgXml } from 'react-native-svg'

const menuOptions = [
  'Limited - Pastries only',
  'Good - Pastries + Light meals',
  'Extensive - Full meals available',
]

const CafeeFood = ({ onNext, mode }) => {
  const [menuIndex, setMenuIndex] = useState(0)
  const [coffeeRating, setCoffeeRating] = useState(0)
  const [foodRating, setFoodRating] = useState(0)

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

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <NativeText
            value={mode === 'new' ? 'Coffee & Food Quality' : 'Edit Coffee & Food Quality'}
            style={[combineStyle.text28Bold, { textAlign: 'center' }]}
          />
          <NativeText
            value={'Discover cafés with great coffee and food'}
            style={[combineStyle.text14Regular, { textAlign: 'center' }]}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.menuHeader}>
            <SvgXml xml={manuIcon} width={20} height={20} />
            <NativeText value={'Menu Variety'} style={[combineStyle.text18Bold, styles.cardTitle]} />
          </View>

          {menuOptions.map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[styles.menuOption, menuIndex === index && styles.menuOptionActive]}
              onPress={() => setMenuIndex(index)}
            >
              <View style={styles.menuOptionRow}>
                <SvgXml
                  xml={menuIndex === index ? ActiveCircle : InactiveCircle}
                  width={20}
                  height={20}
                />
                <NativeText
                  value={option}
                  style={[combineStyle.text14Bold, styles.menuOptionLabel, menuIndex === index && { color: '#1E293B' }]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.ratingHeader}>
            <SvgXml xml={cofeeCup} width={20} height={20} />
            <NativeText value={'Coffee Quality'} style={[combineStyle.text16Bold, styles.cardTitle]} />
          </View>
          {renderStars(coffeeRating, setCoffeeRating)}
        </View>

        <View style={styles.card}>
          <View style={styles.ratingHeader}>
            <SvgXml xml={fork} width={20} height={20} />
            <NativeText value={'Food Quality'} style={[combineStyle.text16Bold, styles.cardTitle]} />
          </View>
          {renderStars(foodRating, setFoodRating)}
        </View>

        <MessageCard
          touchable={true}
          isBtn={true}
          text={mode === 'new' ? 'Next' : 'Save'}
          svg={ArrowRightSvg}
          onPress={mode === 'new'
            ? () => { onNext(); }
            : () => { console.log('Save CafeeFood'); }}
        />
      </View>
    </View>
  )
}

export default CafeeFood