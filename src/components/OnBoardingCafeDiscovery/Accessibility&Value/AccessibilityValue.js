import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { fork, clock, dollerSign, car, cycle, ArrowRightSvg } from '../../../assets/Svgs'
import { SvgXml } from 'react-native-svg'
import RadioSelector from '../../RadioSelector/RadioSelector'
import MessageCard from '../../MessageCard/MessageCard'
import { moderateScale } from 'react-native-size-matters'
import DatePicker from 'react-native-date-picker'

const REFERENCE_MONDAY = new Date(2024, 0, 1)

const snapToReferenceWeek = (date) => {
  const dayOfWeek = date.getDay()
  const mondayBasedOffset = (dayOfWeek + 6) % 7
  const snapped = new Date(REFERENCE_MONDAY)
  snapped.setDate(REFERENCE_MONDAY.getDate() + mondayBasedOffset)
  snapped.setHours(date.getHours(), date.getMinutes(), 0, 0)
  return snapped
}

const formatTime = (date) => {
  if (!date) return null
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const day = days[date.getDay()]
  let hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  const hh = hours.toString().padStart(2, '0')
  return `${day} ${hh}:${minutes} ${ampm}`
}

const AccessibilityValue = ({ onNext, mode }) => {

  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [showStartPicker, setShowStartPicker] = useState(false)
  const [showEndPicker, setShowEndPicker] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <NativeText
            value={mode === 'new' ? 'Accessibility & Value' : 'Edit Accessibility & Value'}
            style={[combineStyle.text28Bold, { textAlign: 'center' }]}
          />
          <NativeText
            value={'Find cafes that are convenient and afforable'}
            style={[combineStyle.text14Regular, { textAlign: 'center' }]}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.menuHeader}>
            <SvgXml xml={fork} width={moderateScale(20)} height={moderateScale(20)} />
            <NativeText value={'Hours of Service'} style={combineStyle.text18Bold} />
          </View>

          {correctAnswer === 'yes' ? (
            <>
              <NativeText
                value="Auto-populated from Google"
                style={[combineStyle.text14Regular, styles.cardTitle]}
              />
              <View style={styles.badge}>
                <SvgXml xml={clock} width={moderateScale(24)} height={moderateScale(24)} />
                <NativeText value="Mon-Fri: 7 AM - 8 PM" style={combineStyle.text16Mid} />
              </View>
            </>
          ) : (
            <>
              <NativeText
                value="Add the correct hours of service"
                style={[combineStyle.text14Regular, styles.cardTitle]}
              />

              <TouchableOpacity style={styles.badge} onPress={() => setShowStartPicker(true)}>
                <SvgXml xml={clock} width={moderateScale(24)} height={moderateScale(24)} />
                <NativeText
                  value={startTime ? formatTime(startTime) : 'Start Time'}
                  style={combineStyle.text16Mid}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.badge} onPress={() => setShowEndPicker(true)}>
                <SvgXml xml={clock} width={moderateScale(24)} height={moderateScale(24)} />
                <NativeText
                  value={endTime ? formatTime(endTime) : 'End Time'}
                  style={combineStyle.text16Mid}
                />
              </TouchableOpacity>
            </>
          )}

          <DatePicker
            modal
            open={showStartPicker}
            date={startTime ?? new Date()}
            mode="datetime"
            onConfirm={(date) => {
              setShowStartPicker(false)
              setStartTime(snapToReferenceWeek(date))
            }}
            onCancel={() => setShowStartPicker(false)}
          />

          <DatePicker
            modal
            open={showEndPicker}
            date={endTime ?? new Date()}
            mode="datetime"
            onConfirm={(date) => {
              setShowEndPicker(false)
              setEndTime(snapToReferenceWeek(date))
            }}
            onCancel={() => setShowEndPicker(false)}
          />

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
          options={[
            { label: 'Wheelchair Friendly' },
            { label: 'Partially Accessible', subLabel: '(some access but not fully)' },
            { label: 'Not Accessible', subLabel: '(stairs/difficulty access)' },
          ]}
          onSelect={(index, value) => console.log(index, value)}
        />

        <MessageCard
          touchable={true}
          isBtn={true}
          text={mode === 'new' ? 'Next' : 'Save'}
          svg={ArrowRightSvg}
          onPress={mode === 'new'
            ? () => { onNext() }
            : () => { console.log('Save AccessibilityValue') }}
        />

      </View>
    </View>
  )
}

export default AccessibilityValue