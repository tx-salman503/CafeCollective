import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NativeText from '../../../components/AppTexts/NativeText'
import { NativeButton, NativeInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import { CompletedSvg, eye, hideeye, lock, Logo } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { ResetPasswordSchema } from '../../../libs/commonManager'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import { Routes } from '../../../navigation/Routes'
import CustomModal from '../../../components/PasswordUpdateModal/PasswordUpdateModal'



const ResetPassword = () => {

  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const handleSignupSubmit = (values) => {
    setVisible(true);

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
        <BackBtnHeader />
        <View style={styles.header}>
          <SvgXml xml={Logo} width={moderateScale(242)} height={moderateScale(131)} />
        </View>
        <View>
          <NativeText style={styles.title} value="Reset Password" />
          <NativeText style={styles.subtitle} value="You can now reset your password." />
        </View>
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={ResetPasswordSchema}
          onSubmit={handleSignupSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched, handleSubmit }) => (
            <>
              <NativeInput
                label={"New password"}
                placeholder={"Enter new password"}
                leftComponent={<SvgXml xml={lock} width={moderateScale(24)} height={moderateScale(24)} />}
                rightComponent={
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <SvgXml xml={showPassword ? eye : hideeye} width={moderateScale(24)} height={moderateScale(24)} />
                  </TouchableOpacity>
                }
                ContainerStyle={{ marginTop: moderateScale(16) }}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errorText={touched.password && errors.password ? errors.password : null}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={!showPassword}
              />
              <NativeInput
                label={"Confirm password"}
                labelStyle={styles.label}
                placeholder={"Confirm new password"}
                leftComponent={<SvgXml xml={lock} width={moderateScale(24)} height={moderateScale(24)} />}
                rightComponent={
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <SvgXml xml={showConfirmPassword ? eye : hideeye} width={moderateScale(24)} height={moderateScale(24)} />
                  </TouchableOpacity>
                }
                ContainerStyle={{ marginTop: moderateScale(16) }}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                errorText={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : null}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={!showConfirmPassword}
              />
              <NativeButton
                title={"Save"}
                titleStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
        <CustomModal
            visible={visible}
            onClose={() => setVisible(false)}
            SvgIcon={CompletedSvg}
            title="Password Updated"
            subtitle="Your password has been updated successfully."
            buttonTitle="Login"
            onButtonPress={() => {
              setVisible(false);
             
              navigation.reset({
                index: 0,
                routes: [{ name: Routes.LoginScreen }],
              });
            }}
          />
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default ResetPassword