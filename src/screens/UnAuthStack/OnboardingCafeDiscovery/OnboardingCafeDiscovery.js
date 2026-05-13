import { View } from 'react-native'
import React, { useState } from 'react'
import { SafeFlexView } from '../../../components'
import { styles } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import StepIndicator from '../../../components/StepIndecator/StepIndecator'
import { CafeDiscoveryWorkability } from '../../../components'
import AccessibilityValue from '../../../components/OnBoardingCafeDiscovery/Accessibility&Value/AccessibilityValue'
import CafeeFood from '../../../components/OnBoardingCafeDiscovery/Coffee&FoodQuality/CofeeFood'
import Workability from '../../../components/OnBoardingCafeDiscovery/Workability/Workability'
import ComfortEnvirment from '../../../components/OnBoardingCafeDiscovery/ComfortEnvirment/ComfortEnvirment'
import AstheticVibe from '../../../components/OnBoardingCafeDiscovery/AestheticVibe/AestheticVibe'
import SubmitScreen from '../../../components/OnBoardingCafeDiscovery/SubmitScreen/SubmitScreen'

const TOTAL_STEPS = 6

const OnboardingCafeDiscovery = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const goNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1)
    } else {
     
      navigation.navigate('NextScreen') 
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Workability onNext={goNext} />
      case 2:
          return <CafeeFood onNext={goNext} />
          case 3:
              return <AccessibilityValue onNext={goNext} />
          case 4:
              return <ComfortEnvirment onNext={goNext} />
              case 5:
              return <AstheticVibe onNext={goNext} />
              case 6:
              return <SubmitScreen onNext={goNext} />
      default:
        return null
    }
  }

  return (
    <SafeFlexView>
          <NativeHeader
          title={`Step ${currentStep} of ${TOTAL_STEPS}`}
          back
        />
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
      >
      
      

        {/* Step dots */}
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

       
        {renderStep()}

      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default OnboardingCafeDiscovery