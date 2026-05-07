import { Platform, TouchableOpacity, View, } from 'react-native'
import React, { useState, useEffect } from 'react'
import NativeText from '../../../components/AppTexts/NativeText'
import { NativeButton, NativeInput, NativeRightIconInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import { apple,  eye, google, lock, Logo, mail, person } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import {  SignupSchema } from '../../../libs/commonManager'
import { useTranslation } from 'react-i18next'
import { Routes } from '../../../navigation/Routes'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchisAuth } from '../../../redux/slices/userSlice'



const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state?.userReducer);

  const handleSignupSubmit = (values) => {
    console.log('Signup values:', values);
    dispatch(dispatchisAuth(true));
  };

  useEffect(() => {
    if (isAuth) {
      console.log('isAuth is true, navigating to UnAuthStack');
      navigation.replace(Routes.UnAuthStack);
    }
  }, [isAuth, navigation]);

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
        <View style={styles.header}>
          <SvgXml xml={Logo} width={moderateScale(242)} height={moderateScale(131)} />
        </View>
        <View>
          <NativeText style={styles.title} value="Signup.title" />
          <NativeText style={styles.subtitle} value="Signup.subtitle" />
        </View>
        <View style={styles.row}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
            <SvgXml xml={google} width={moderateScale(107)} height={moderateScale(48)} />
          </TouchableOpacity>
          {
            Platform.OS === 'ios' ?
              <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
                <SvgXml xml={apple} width={moderateScale(107)} height={moderateScale(48)} />
              </TouchableOpacity>
              : null
          }
        </View>
       <View style={styles.row}>
        <View style={styles.devider}/>
        <NativeText style={styles.deviderText} value="Signup.orContinueWith" />
        <View style={styles.devider}/>
       </View>
       <Formik
      initialValues={{ name: '', email: '', password: '', currentPassword: '' }}
      validationSchema={SignupSchema}
      onSubmit={handleSignupSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
        <>
        <NativeInput
          label={t('Signup.nameLabel')}
          placeholder={t('Signup.namePlaceholder')}
          leftComponent={<SvgXml xml={person} width={moderateScale(24)} height={moderateScale(24)} />}
          ContainerStyle={{ marginTop: moderateScale(16) }}
          value={values.name}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          errorText={touched.name && errors.name ? errors.name : null}
          keyboardType="default"
          autoCapitalize="words"
        />



        <NativeInput
          label={t('Signup.emailLabel')}
          placeholder={t('Signup.emailPlaceholder')}
          leftComponent={<SvgXml xml={mail} width={moderateScale(24)} height={moderateScale(24)} />}
          ContainerStyle={{ marginTop: moderateScale(16) }}
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          errorText={touched.email && errors.email ? errors.email : null}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <NativeInput
          label={t('Signup.passwordLabel')}
          placeholder={t('Signup.passwordPlaceholder')}
          leftComponent={<SvgXml xml={lock} width={moderateScale(24)} height={moderateScale(24)} />}
          rightComponent={
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => setShowPassword(!showPassword)}
            >
              <SvgXml xml={eye} width={moderateScale(24)} height={moderateScale(24)} />
            </TouchableOpacity>
          }
          ContainerStyle={{ marginTop: moderateScale(16) }}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          errorText={touched.password && errors.password ? errors.password : null}
          secureTextEntry={!showPassword}
        />
        <NativeInput
          label={t('Signup.ConfirmPasswordLabel')}
          placeholder={t('Signup.ConfirmPasswordPlaceholder')}
          leftComponent={<SvgXml xml={lock} width={moderateScale(24)} height={moderateScale(24)} />}  
          rightComponent={
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <SvgXml xml={eye} width={moderateScale(24)} height={moderateScale(24)} />
            </TouchableOpacity>
          }
          ContainerStyle={{ marginTop: moderateScale(16) }}
          value={values.currentPassword}
          onChangeText={handleChange('currentPassword')}
          onBlur={handleBlur('currentPassword')}
          errorText={touched.currentPassword && errors.currentPassword ? errors.currentPassword : null}
          secureTextEntry={!showConfirmPassword}
        />
        <NativeButton
          title={t('Signup.buttonTitle')}
          titleStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={handleSubmit}
        />
        <View style={[styles.row, { gap: moderateScale(2), alignItems: 'center',marginBottom: moderateScale(50) }]}>
          <NativeText style={styles.dontHaveAccount} value="Signup.alreadyHaveAccount" />
          <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate(Routes.LoginScreen) }}>
            <NativeText style={styles.signup} value="Signup.login" />
          </TouchableOpacity>
        </View>
        </>
      )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default Signup