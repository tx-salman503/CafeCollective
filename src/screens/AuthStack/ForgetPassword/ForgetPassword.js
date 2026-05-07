import { View } from 'react-native'
import React from 'react'
import NativeText from '../../../components/AppTexts/NativeText'
import { NativeButton, NativeInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import {  Logo, mail, } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import {  forgetpaswordSchema } from '../../../libs/commonManager'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import { Routes } from '../../../navigation/Routes'



const ForgetPassword = () => {
  
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleSignupSubmit = (values) => {
    navigation.navigate(Routes.VerifyOtp);
  };

  return (
    <SafeFlexView bar>
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
      >
        <BackBtnHeader/>
        <View style={styles.header}>
          <SvgXml xml={Logo} width={moderateScale(242)} height={moderateScale(131)} />
        </View>
        <View>
          <NativeText style={styles.title} value="ForgetPassword.title" />
          <NativeText style={styles.subtitle} value="ForgetPassword.subtitle" />
        </View>
        <Formik
      initialValues={{ email: '' }}
      validationSchema={forgetpaswordSchema}
      onSubmit={handleSignupSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
        <>
        <NativeInput
          label={t('ForgetPassword.emailLabel')}
          placeholder={t('ForgetPassword.emailPlaceholder')}
          leftComponent={<SvgXml xml={mail} width={moderateScale(24)} height={moderateScale(24)} />}
          ContainerStyle={{ marginTop: moderateScale(16) }}
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          errorText={touched.email && errors.email ? errors.email : null}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <NativeButton
          title={t('ForgetPassword.buttonTitle')}
          titleStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={handleSubmit}
        />
        </>
      )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default ForgetPassword