import { View } from 'react-native'
import React from 'react'
import { SafeFlexView, Workability } from '../../../components'
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import CafeeFood from '../../../components/OnBoardingCafeDiscovery/Coffee&FoodQuality/CofeeFood'
import AccessibilityValue from '../../../components/OnBoardingCafeDiscovery/Accessibility&Value/AccessibilityValue'
import ComfortEnvirment from '../../../components/OnBoardingCafeDiscovery/ComfortEnvirment/ComfortEnvirment'
import AstheticVibe from '../../../components/OnBoardingCafeDiscovery/AestheticVibe/AestheticVibe'

const EditCafeDetail = ({ route, navigation }) => {

    const { type } = route.params || {}

    console.log("TYPE RECEIVED:", type)

    const renderContent = () => {
        switch (type) {
            case "workability":
                return <Workability mode="edit" />

            case "CafeeFood":
                return <CafeeFood mode="edit" />

            case "accessibilityValue":
                return <AccessibilityValue mode="edit" />

            case "comfortEnvirment":
                return <ComfortEnvirment mode="edit" />

            case "astheticVibe":
                return <AstheticVibe mode="edit" />

            default:
                return <NativeText value="No Section Selected" />
        }
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
                {renderContent()}
            </KeyboardAwareScrollView>
        </SafeFlexView>
    )
}

export default EditCafeDetail