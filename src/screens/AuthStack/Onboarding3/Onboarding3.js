import React, { useRef, useState } from 'react';
import { FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeFlexView } from '../../../components';
import Onbording12 from '../../../components/OnBoarding3Component/Onboarding12/Onboarding12';
import Onboarding13 from '../../../components/OnBoarding3Component/Onboarding13/Onboarding13';
import Onboarding14 from '../../../components/OnBoarding3Component/Onboarding14/Onboarding14';
import Onboarding15 from '../../../components/OnBoarding3Component/Onboarding15/Onboarding15';
import Onbording16 from '../../../components/OnBoarding3Component/Onboarding16/Onbording16';
import Onbording17 from '../../../components/OnBoarding3Component/Onboarding17/Onbording17';
import Onbording18 from '../../../components/OnBoarding3Component/Onboarding18/Onbording18';
import Onbording19 from '../../../components/OnBoarding3Component/Onboarding19/Onbording19';
import { Routes } from '../../../navigation/Routes';
import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

const { width: screenWidth } = Dimensions.get('window');

const onboardingData = [
  { id: '12', Component: Onbording12 },
  { id: '13', Component: Onboarding13 },
  { id: '14', Component: Onboarding14 },
  { id: '15', Component: Onboarding15 },
  { id: '16', Component: Onbording16 },
  { id: '17', Component: Onbording17 },
  { id: '18', Component: Onbording18 },
  { id: '19', Component: Onbording19 },
];

const OnBordingScreen3 = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishOnboarding = () => {
    navigation.navigate(Routes.Onboarding20Screen);
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      return;
    }
    finishOnboarding();
  };

  return (
    <SafeFlexView bar top={false} islinear={false}>
      <OnboardingProgress total={onboardingData.length} currentIndex={currentIndex} />

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width,
          );
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={1} onPress={handleNext} style={{ width: screenWidth }}>
            <item.Component />
          </TouchableOpacity>
        )}
      />
    </SafeFlexView>
  );
};

export default OnBordingScreen3;
