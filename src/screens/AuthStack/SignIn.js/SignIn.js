import { Platform, Pressable, TouchableOpacity, View } from 'react-native'
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
import { loginSchema, } from '../../../libs/commonManager'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../navigation/Routes'
import Orline from '../../../components/OrLine/OrLine'
import AlreadyAccount from '../../../components/AlredyAccount/AlreadyAccount'
import { moderateScale } from 'react-native-size-matters'


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation()
  const { t } = useTranslation()


  const handleSignupSubmit = (values) => {
    console.log('Signup values:', values)
    navigation.navigate(Routes.VerifyOtp)
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
          value="Sign in your Explorer Account"
          style={[combineStyle.text30Bold, { textAlign: 'center' }]}
        />
        <NativeText
          value={"To sign in your accouny enter your email\nand password"}
          style={[
            combineStyle.text16Regular,
            { textAlign: 'center', color: Theme.colors.ligtGray, marginBottom: moderateScale(27) },
          ]}
        />

        <Formik
          initialValues={{ email: '', password: '', }}
          validationSchema={loginSchema}
          onSubmit={handleSignupSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
            <View>

              <NativeInput
                label={t('Signup.emailLabel') || 'Email'}
                placeholder={'your@email.com'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errorText={touched.email && errors.email ? errors.email : null}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <NativeInput
                label={t('Signup.passwordLabel') || 'Password'}
                placeholder={'Enter your password'}
                secureTextEntry={!showPassword}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errorText={touched.password && errors.password ? errors.password : null}
                rightComponent={
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <SvgXml xml={showPassword ? openEye : closeEye} width={24} height={24} />
                  </TouchableOpacity>
                }
              />

              <Pressable onPress={()=>{navigation.navigate(Routes.VerifyOtp)}}>
                <NativeText value={"Forgot Password?"} style={[combineStyle.text12Mid,{marginLeft:moderateScale(8)}]} />
              </Pressable>



              <MessageCard
                text='Sign in '
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
              firstTxt={"Don’t  have an account?"}
              secondTxt={"Create Account"}
              onPress={() => navigation.navigate(Routes.Signup)}
            />
          </>
        )}
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default SignIn