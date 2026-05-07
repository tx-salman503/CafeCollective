import { View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import NativeText from '../../../components/AppTexts/NativeText'
import { NativeButton, NativeInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import { Logo, mail, } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import { Theme } from '../../../libs'
import { OtpInput } from 'react-native-otp-entry';
import { Routes } from '../../../navigation/Routes'



const VerifyOtp = () => {

    const navigation = useNavigation();
    const { t } = useTranslation();
    const [otp, setOtp] = useState('');
    const [resendKey, setResendKey] = useState(0);
    const [timer, setTimer] = useState(59);


    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer(prev => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);


    const handleResend = async () => {
        setTimer(59);
        setOtp(''); // Clear the OTP input when resending
        setResendKey(prev => prev + 1); // Force OTP input to reset
      
      };

    const handleSignupSubmit = (values) => {
        navigation.navigate(Routes.ResetPassword);
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
                <View >
                    <NativeText style={styles.title} value="VerifyOtp.title" />
                    <View style={styles.row}>
                        <NativeText style={styles.subtitle} value="VerifyOtp.subtitlePrefix" />
                        <NativeText style={[styles.subtitle, { color: Theme.colors.navyBlue }]} value="xyz@gmail.com" />
                    </View>
                </View>
                <View style={styles.otpcontainer}>
                    <OtpInput
                        key={resendKey}
                        numberOfDigits={6}
                        focusColor={Theme.colors.navyBlue}
                        focusStickBlinkingDuration={500}
                        onTextChange={setOtp}
                        onFilled={() => console.log('OTP filled')}
                        textInputProps={{
                            keyboardType: 'numeric',
                            autoCapitalize: 'none',
                            autoCorrect: false,
                        }}
                        theme={{
                            pinCodeContainerStyle: styles.otpContainer,
                            containerStyle: styles.otpWrapper,
                            pinCodeTextStyle: { fontSize: moderateScale(12), color: Theme.colors.black },
                        }}
                    />
                </View>
                <View style={styles.resendContainer}>
                    <NativeText style={styles.resendText} value="VerifyOtp.resendPrompt" />

                    {timer > 0 ? (
                        <NativeText style={styles.timerText}>
                            {` 00:${timer < 10 ? `0${timer}` : timer}`}
                        </NativeText>
                    ) : (
                        <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
                            <NativeText style={styles.resendLink} value="VerifyOtp.resendButton" />
                        </TouchableOpacity>
                    )}
                </View>
                <NativeButton
                    title={t('VerifyOtp.verifyButton')}
                    titleStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={handleSignupSubmit}
                />
            </KeyboardAwareScrollView>
        </SafeFlexView>
    )
}

export default VerifyOtp