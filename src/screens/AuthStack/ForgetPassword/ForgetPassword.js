import { View } from 'react-native'
import React from 'react'
import { NativeInput, SafeFlexView, MessageCard, NativeButton } from '../../../components'
import { styles } from './style'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { Theme } from '../../../libs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Formik } from 'formik'
import { forgetpaswordSchema,  } from '../../../libs/commonManager'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../navigation/Routes'
import { moderateScale } from 'react-native-size-matters'


const ForgetPassword = () => {

  const navigation = useNavigation()
  const { t } = useTranslation()


  const handleSignupSubmit = (values) => {
    navigation.navigate(Routes.LoginScreen)
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
          value="Forgot Password?"
          style={[combineStyle.text30Bold, { textAlign: 'center' }]}
        />
        <NativeText
          value={"Enter your email to recover your\npassword"}
          style={[
            combineStyle.text16Regular,
            { textAlign: 'center', color: Theme.colors.ligtGray, marginBottom: moderateScale(27) },
          ]}
        />

        <Formik
          initialValues={{ email: '',  }}
          validationSchema={forgetpaswordSchema}
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
              <MessageCard
                text='Send Link'
                isBtn={true}
                touchable={true}
                onPress={() => {
                  handleSubmit()
                }}
                containerStyle={styles.btnContainer}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}


export default ForgetPassword