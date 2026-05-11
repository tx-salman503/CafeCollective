import { View } from 'react-native'
import React, { useState } from 'react'
import NativeText from '../../../components/AppTexts/NativeText'
import { MessageCard, SafeFlexView } from '../../../components'
import { styles } from './style'
import { moderateScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import { Theme } from '../../../libs'
import { OtpInput } from 'react-native-otp-entry';
import { Routes } from '../../../navigation/Routes'
import combineStyle from '../../../libs/combineStyle';

const VerifyOtp = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');

    const handleSubmit = () => {
        navigation.navigate(Routes.ForgetPassword);
    };

    return (
        <SafeFlexView>
            <BackBtnHeader />
            <KeyboardAwareScrollView
                style={styles.main}
                contentContainerStyle={[styles.contentContainer,]}
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                extraScrollHeight={80}
                keyboardShouldPersistTaps="handled"
            >
                <NativeText
                    value="OTP Verification"
                    style={[combineStyle.text30Bold, { textAlign: 'center' }]}
                />
                <NativeText
                    value={"Enter the verification code send to\nyour email"}
                    style={[
                        combineStyle.text16Regular,
                        { textAlign: 'center', color: Theme.colors.ligtGray, marginBottom: moderateScale(27),marginTop:moderateScale(10) },
                    ]}
                />

               
              
                    <OtpInput
                        numberOfDigits={6}
                        focusColor={Theme.colors.darkGray}
                        focusStickBlinkingDuration={500}
                        onTextChange={setOtp}
                        onFilled={() => console.log('OTP filled')}
                        textInputProps={{
                            keyboardType: 'numeric',
                            autoCapitalize: 'none',
                            autoCorrect: false,
                        }}
                        theme={{
                            containerStyle: {
                                width: '100%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: moderateScale(8),
                                alignSelf:"center"
                            },
                            pinCodeContainerStyle: styles.otpContainer,
                            pinCodeTextStyle: { ...combineStyle.text16Semi },
                        }}
                    />
            

                <MessageCard
                    text='Verify OTP'
                    isBtn={true}
                    touchable={true}
                    onPress={handleSubmit} // ✅ Direct function pass karo
                    containerStyle={styles.btnContainer}
                />
            </KeyboardAwareScrollView>
        </SafeFlexView>
    )
}

export default VerifyOtp