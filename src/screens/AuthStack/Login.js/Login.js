import { Platform, TouchableOpacity, View, } from 'react-native'
import React, { useState, useEffect } from 'react'
import NativeText from '../../../components/AppTexts/NativeText'
import { NativeButton, NativeInput,  SafeFlexView } from '../../../components'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import { apple,  eye, google, hideeye, lock, Logo, mail } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { loginSchema } from '../../../libs/commonManager'
import { Routes } from '../../../navigation/Routes'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchisAuth } from '../../../redux/slices/userSlice'



const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state?.userReducer);

  const handleLoginSubmit = (values) => {
    console.log('Login values:', values);
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
          <NativeText style={styles.title} value="Login.title" />
          <NativeText style={styles.subtitle} value="Login.subtitle" />
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
        <NativeText style={styles.deviderText} value="Login.orContinueWith" />
        <View style={styles.devider}/>
       </View>
       <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleLoginSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
        <>
        <NativeInput
          label={t('Login.emailLabel')}
          placeholder={t('Login.emailPlaceholder')}
          leftComponent={<SvgXml xml={mail} width={24} height={24} />}
          ContainerStyle={{ marginTop: moderateScale(16) }}
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          errorText={touched.email && errors.email ? errors.email : null}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <NativeInput
          label={t('Login.passwordLabel')}
          placeholder={t('Login.passwordPlaceholder')}
          leftComponent={<SvgXml xml={lock} width={24} height={24} />}
          rightComponent={
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => setShowPassword(!showPassword)}
            >
              <SvgXml xml={showPassword ? eye : hideeye} width={24} height={24} />
            </TouchableOpacity>
          }
          ContainerStyle={{ marginTop: moderateScale(16) }}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          errorText={touched.password && errors.password ? errors.password : null}
          secureTextEntry={!showPassword}
        />
        
        <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate(Routes.ForgetPassword) }}>
          <NativeText style={styles.forgotPassword} value="Login.forgotPassword" />
        </TouchableOpacity>
        <NativeButton
          title={t('Login.buttonTitle')}
          titleStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={handleSubmit}
        />
        <View style={[styles.row, { gap: moderateScale(2), alignItems: 'center' }]}>
          <NativeText style={styles.dontHaveAccount} value="Login.dontHaveAccount" />
          <TouchableOpacity activeOpacity={0.7} onPress={() => {navigation.navigate(Routes.Signup) }}>
            <NativeText style={styles.signup} value="Login.signup" />
          </TouchableOpacity>
        </View>
        </>
      )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default LoginScreen