import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeButton, NativeInput, SafeFlexView } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import { SvgXml } from 'react-native-svg'
import { calendarIcon, clock, locationIcon, person } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import { CreateMeetupSchema } from '../../../libs/commonManager'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useTranslation } from 'react-i18next'

const CreateMeetup = () => {
  const { t } = useTranslation();

  const [activeTabValley, setActiveTabVelly] = useState('Courchevel');
  const [activeTabTag, setActiveTabTag] = useState('SKI')
  const [activeTab, setActiveTab] = useState('Beginner')
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  const formatDate = d =>
    `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`

  const formatTime = d =>
    d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  const handleCreateMeetup = values => {
    console.log({ ...values, skillLevel: activeTab })
  }

  return (
    <SafeFlexView top={false}>
      <NativeHeader title={t('CreateMeetup.title')} back />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: moderateScale(30) }}
        showsVerticalScrollIndicator={false}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{
            meetupTitle: '',
            hostedBy: '',
            date: '',
            startTime: '',
            location: '',
            description: '',
          }}
          validationSchema={CreateMeetupSchema}
          onSubmit={handleCreateMeetup}
        >
          {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
            <View style={styles.main}>
              <NativeInput
                ContainerStyle={{ marginTop: moderateScale(16) }}
                label={t('CreateMeetup.meetupTitle')}
                placeholder={t('CreateMeetup.enterFullName')}
                leftComponent={<SvgXml xml={person} width={24} height={24} />}
                value={values.meetupTitle}
                onChangeText={handleChange('meetupTitle')}
                onBlur={handleBlur('meetupTitle')}
                errorText={touched.meetupTitle && errors.meetupTitle}
              />
              <NativeInput
                label={t('CreateMeetup.hostedBy')}
                placeholder={t('CreateMeetup.enterHostName')}
                leftComponent={<SvgXml xml={person} width={24} height={24} />}
                value={values.hostedBy}
                onChangeText={handleChange('hostedBy')}
                onBlur={handleBlur('hostedBy')}
                errorText={touched.hostedBy && errors.hostedBy}
              />
              <TouchableOpacity onPress={() => setShowDate(true)}>
                <NativeInput
                  label={t('CreateMeetup.date')}
                  placeholder={t('CreateMeetup.dateFormat')}
                  leftComponent={<SvgXml xml={calendarIcon} width={24} height={24} />}
                  value={values.date}
                  editable={false}
                  errorText={touched.date && errors.date}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowTime(true)}>
                <NativeInput
                  label={t('CreateMeetup.startTime')}
                  placeholder={t('CreateMeetup.timePlaceholder')}
                  leftComponent={<SvgXml xml={clock} width={24} height={24} />}
                  value={values.startTime}
                  editable={false}
                  errorText={touched.startTime && errors.startTime}
                />
              </TouchableOpacity>
              <NativeInput
                label={t('CreateMeetup.location')}
                placeholder={t('CreateMeetup.enterLocation')}
                leftComponent={<SvgXml xml={locationIcon} width={24} height={24} />}
                value={values.location}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
                errorText={touched.location && errors.location}
              />
              <NativeText value={t('CreateMeetup.valleySelect')} style={styles.titel} />
              <View style={styles.row}>
                {['Courchevel', 'Meribel', 'Val Thorens'].map(v => (
                  <TouchableOpacity
                    key={v}
                    style={[styles.skillBox, activeTabValley === v && styles.ActiveTab]}
                    onPress={() => setActiveTabVelly(v)}
                  >
                    <NativeText value={v} style={[styles.skilltext, activeTabValley === v && styles.activeSkillText]} />
                  </TouchableOpacity>
                ))}
              </View>
              <NativeText value={t('CreateMeetup.tag')} style={styles.titel} />
              <View style={styles.row}>
                {['SKI', 'SKI+APRES-SKI', 'APRES-SKI'].map(v => (
                  <TouchableOpacity
                    key={v}
                    style={[styles.skillBox, activeTabTag === v && styles.ActiveTab]}
                    onPress={() => setActiveTabTag(v)}
                  >
                    <NativeText value={v} style={[styles.skilltext, activeTabTag === v && styles.activeSkillText]} />
                  </TouchableOpacity>
                ))}
              </View>
              <NativeText value={t('CreateMeetup.skillLevel')} style={styles.titel} />
              <View style={styles.row}>
                {['Beginner', 'Intermediate', 'Advanced'].map(v => (
                  <TouchableOpacity
                    key={v}
                    style={[styles.skillBox, activeTab === v && styles.ActiveTab]}
                    onPress={() => setActiveTab(v)}
                  >
                    <NativeText value={t(`SetupProfile.${v.toLowerCase()}`)} style={[styles.skilltext, activeTab === v && styles.activeSkillText]} />
                  </TouchableOpacity>
                ))}
              </View>
              <NativeInput
                label={t('CreateMeetup.descriptionLabel')}
                placeholder={t('CreateMeetup.descriptionPlaceholder')}
                inputContainerStyle={styles.description}
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                multiline
              />
              <NativeButton
                title={t('CreateMeetup.createButton')}
                onPress={handleSubmit}
                containerStyle={{ marginVertical: moderateScale(10) }}
              />
              <DateTimePickerModal
                isVisible={showDate}
                mode="date"
                onConfirm={d => {
                  setShowDate(false)
                  handleChange('date')(formatDate(d))
                }}
                onCancel={() => setShowDate(false)}
              />
              <DateTimePickerModal
                isVisible={showTime}
                mode="time"
                onConfirm={t => {
                  setShowTime(false)
                  handleChange('startTime')(formatTime(t))
                }}
                onCancel={() => setShowTime(false)}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default CreateMeetup
