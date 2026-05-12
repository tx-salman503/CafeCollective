import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SafeFlexView from '../../SafeFlexView/SafeFlexView'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { fork, star, GoldenStar, clock, dollerSign, car, cycle } from '../../../assets/Svgs'
import { SvgXml } from 'react-native-svg'
import RadioSelector from '../../RadioSelector/RadioSelector'
import MessageCard from '../../MessageCard/MessageCard'
import { moderateScale } from 'react-native-size-matters'

const AccessibilityValue = ({ onNext }) => {

  const [correctAnswer, setCorrectAnswer] = useState(null)


  return (
    <View style={{ flex: 1 }} >


      <View style={styles.container}>
        <View style={styles.textContainer}>
          <NativeText value={'Accessibility & Value'} style={combineStyle.text28Bold} />
          <NativeText value={'Find cafes that are convenient and afforable'} style={combineStyle.text14Regular} />
        </View>

        <View style={styles.card}>
          <View style={styles.menuHeader}>
            <SvgXml xml={fork} width={moderateScale(20)} height={moderateScale(20)} />
            <NativeText value={'Hours of Service'} style={combineStyle.text18Bold} />
          </View>
          {correctAnswer === 'yes' ? (
            <>
              <NativeText value="Auto-populated from Google" style={[combineStyle.text14Regular, styles.cardTitle]} />
              <View style={styles.badge}>
                <SvgXml xml={clock} width={moderateScale(24)} height={moderateScale(24)} />
                <NativeText value="Mon-Fri: 7 AM - 8 PM" style={combineStyle.text16Mid} />
              </View>
            </>
          ) : (
            <>
              <NativeText value="Add the correct hours of service " style={[combineStyle.text14Regular, styles.cardTitle]} />
              <View style={styles.badge}>
                <SvgXml xml={clock} width={moderateScale(24)} height={moderateScale(24)} />
                <NativeText value="Start Time   07:00 AM" style={combineStyle.text16Mid} />
              </View>

               <View style={styles.badge}>
                <SvgXml xml={clock} width={moderateScale(24)} height={moderateScale(24)} />
                <NativeText value="End Time   09:00 PM" style={combineStyle.text16Mid} />
              </View>
            </>
          )}
          <View style={styles.questionContainer}>
            <View style={styles.menuHeader}>
              <SvgXml xml={clock} width={moderateScale(20)} height={moderateScale(20)} />
              <NativeText value={'Are these correct?'} style={combineStyle.text16Bold} />
            </View>
            <View style={styles.buttonRow}>
              {['yes', 'no'].map((val) => (
                <TouchableOpacity
                  key={val}
                  style={[styles.answerButton, correctAnswer === val && styles.answerButtonActive]}
                  onPress={() => setCorrectAnswer(val)}
                >
                  <NativeText
                    value={val === 'yes' ? 'Yes' : 'No'}
                    style={[combineStyle.text16Mid, { color: correctAnswer === val ? '#1E293B' : '#FFFFFF' }]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <RadioSelector
          titleIcon={clock}
          title="Best times to work here?"
          options={['Morning', 'Afternoon', 'Evening']}
          onSelect={(index, value) => console.log(index, value)}
        />

        <RadioSelector
          titleIcon={dollerSign}
          title="Price Level"
          options={['Budget ($)', 'Mid-Range($$)', 'Premium($$$)']}
          onSelect={(index, value) => console.log(index, value)}
        />


        <RadioSelector
          titleIcon={car}
          title="Parking Availability"
          options={['None', 'Street Parking', 'Has free Parking']}
          onSelect={(index, value) => console.log(index, value)}
        />
        <RadioSelector
          titleIcon={cycle}
          title="Accessibility"
          options={['Wheelchair Friendly', 'Partially Accessible  (some access but not fully)', 'Not Accessible  (stairs/difficulty access)']}
          onSelect={(index, value) => console.log(index, value)}
        />
        <MessageCard
          touchable={true}
          isBtn={true}
          text='Next'
          onPress={onNext}
        />
      </View>
    </View>
  )
}
export default AccessibilityValue