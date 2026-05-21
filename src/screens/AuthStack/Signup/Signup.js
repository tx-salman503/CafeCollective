import { Platform, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeInput, SafeFlexView, MessageCard, NativeButton } from '../../../components'
import { styles } from './style'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { Theme } from '../../../libs'
import { SvgXml } from 'react-native-svg'
import { AppleIcon, closeEye, goolgeIcon, openEye } from '../../../assets/Svgs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import { SignupSchema } from '../../../libs/commonManager'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../navigation/Routes'
import Orline from '../../../components/OrLine/OrLine'
import AlreadyAccount from '../../../components/AlredyAccount/AlreadyAccount'
import { moderateScale } from 'react-native-size-matters'
import { useDispatch } from 'react-redux';
import { dispatchisAuth } from '../../../redux/slices/userSlice';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation()
  const { t } = useTranslation()
  const [isChecked, setIsChecked] = useState(false)
  const [checkboxError, setCheckboxError] = useState(false)
  const dispatch = useDispatch();

  const handleSignupSubmit = () => {
    console.warn("Salman")
    dispatch(dispatchisAuth(true))
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.UnAuthStack }],
    });
  }

  return (
    <SafeFlexView>
      <BackBtnHeader />
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
      >
        <NativeText
          value="Create Your Explorer Account"
          style={[combineStyle.text30Bold, { textAlign: 'center' }]}
        />
        <NativeText
          value={"Join 10,000+ cafe explorers\ndiscovering their perfect workspace"}
          style={[
            combineStyle.text16Regular,
            { textAlign: 'center', color: Theme.colors.ligtGray, marginBottom: moderateScale(27) },
          ]}
        />

        <Formik
          initialValues={{ name: '', email: '', password: '', }}
          validationSchema={SignupSchema}
          onSubmit={handleSignupSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
            <View>
              <NativeInput
                label={'Name/Display Name'}
                placeholder={'How should we call you?'}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                errorText={touched.name && errors.name ? errors.name : null}
                autoCapitalize="words"
              />

              <NativeInput
                label={'Email'}
                placeholder={'your@email.com'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errorText={touched.email && errors.email ? errors.email : null}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <NativeInput
                label={'Password'}
                placeholder={'Create a strong password'}
                secureTextEntry={!showPassword}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errorText={touched.password && errors.password ? errors.password : null}
                rightComponent={
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <SvgXml xml={showPassword ? closeEye : openEye} width={24} height={24} />
                  </TouchableOpacity>
                }
              />


             <TouchableOpacity
  style={{ flexDirection: 'row', alignItems: 'center' }}
  onPress={() => {
    setIsChecked(!isChecked)
    setCheckboxError(false)
  }}
  activeOpacity={0.8}
>
  <View style={styles.checkBox}>
    {isChecked && (
      <View style={styles.tick} />
    )}
  </View>

  <NativeText
    value="I agree to the Terms of Service and Privacy Policy"
    style={[
      combineStyle.text12Regular,
      {
        color: checkboxError ? 'red' : Theme.colors.white,
      },
    ]}
  />
</TouchableOpacity>

              <MessageCard
                text='Create your Account'
                isBtn={true}
                touchable={true}
                onPress={() => {
                  if (!isChecked) {
                    setCheckboxError(true)
                    return
                  }
                  setCheckboxError(false)
                  handleSubmit()
                }}
                containerStyle={styles.btnContainer}
              />
            </View>
          )}
        </Formik>

        <Orline text={"OR CONTINUE WITH"} />
        {Platform.OS === 'ios' ? (
          <NativeButton
            style={styles.googleBtn}
            title="Google"
            onPress={() => { }}
            LeftIcon={goolgeIcon}
            titleStyle={styles.googleBtn}
          />
        ) : (
          <>
            <NativeButton
              style={styles.googleBtn}
              title="Google"
              onPress={() => { }}
              LeftIcon={goolgeIcon}
              titleStyle={styles.googleBtn}
            />
            <NativeButton
              style={styles.AppleButton}
              title="Apple"
              onPress={() => { }}
              LeftIcon={AppleIcon}
              titleStyle={styles.AppleButton}
              containerStyle={{ backgroundColor: 'black' }}
            />
            <AlreadyAccount
              firstTxt={"Already have an account? "}
              secondTxt={"Sign In"}
              onPress={() => navigation.navigate(Routes.LoginScreen)}
            />
          </>
        )}
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default Signup