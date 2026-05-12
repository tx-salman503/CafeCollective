import { View } from 'react-native'
import React from 'react'
import { MessageCard, SafeFlexView,  } from '../../../components'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScale } from 'react-native-size-matters'


const DiscoverScreen = ({ navigation }) => {

    

    return (
        <SafeFlexView>
            <KeyboardAwareScrollView
                style={styles.main}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                extraScrollHeight={80}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.textBox}>
                    <NativeText value={"Let's Discover\nCafe The Roasted\nBean"} style={[combineStyle.text32Bold, { fontSize: moderateScale(36), textAlign: "center" }]} />
                    <View style={styles.badg}>
                        <NativeText style={[combineStyle.text16Regular, { textAlign: "center" }]} value={"Earn beans by sharing your café experience and unlock access to hidden cafés."} />
                    </View>
                  
                    <MessageCard
                        text='Start Cafe Discovery'
                        isBtn={true}
                        touchable={true}
                        containerStyle={styles.btnContainer}
                    onPress={(() => navigation.navigate("OnboardingCafeDiscovery"))}           
                    />
                </View>

            </KeyboardAwareScrollView>
        </SafeFlexView>
    )
}

export default DiscoverScreen