import React, { useState, useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
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

const SWIPE_THRESHOLD = 50;

const OnBordingScreen3 = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);
  const navigationRef = useRef(navigation); // ← navigation ref

  const animateAndGo = useRef((direction, nextIndex) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const toValue = direction === 'next' ? -400 : 400;
    const fromValue = direction === 'next' ? 400 : -400;

    Animated.timing(translateX, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      translateX.setValue(fromValue);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        isAnimating.current = false;
      });
    });
  }).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
          Math.abs(gestureState.dx) > 10
        );
      },
      onPanResponderGrant: () => {
        // capture touch start — prevents accidental triggers
        translateX.stopAnimation();
      },
      onPanResponderMove: (_, gestureState) => {
        // live drag feedback
        translateX.setValue(gestureState.dx * 0.3);
      },
      onPanResponderRelease: (_, gestureState) => {
        const idx = currentIndexRef.current;

        if (gestureState.dx < -SWIPE_THRESHOLD) {
          if (idx < onboardingData.length - 1) {
            animateAndGo('next', idx + 1);
          } else {
            translateX.setValue(0);
            navigationRef.current.navigate(Routes.Onboarding20Screen);
          }
        } else if (gestureState.dx > SWIPE_THRESHOLD) {
          if (idx > 0) {
            animateAndGo('back', idx - 1);
          } else {
            // snap back if at first screen
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }
        } else {
          // didn't reach threshold — snap back
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const { Component: CurrentComponent } = onboardingData[currentIndex];

  return (
    <SafeFlexView bar top={false} islinear={false}>
      <OnboardingProgress
        total={onboardingData.length}
        currentIndex={currentIndex}
      />
      <Animated.View
        style={{ flex: 1, transform: [{ translateX }] }}
        {...panResponder.panHandlers}
      >
        <CurrentComponent />
      </Animated.View>
    </SafeFlexView>
  );
};

export default OnBordingScreen3;




// import React, { useState } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { SafeFlexView } from '../../../components';
// import Onbording12 from '../../../components/OnBoarding3Component/Onboarding12/Onboarding12';
// import Onboarding13 from '../../../components/OnBoarding3Component/Onboarding13/Onboarding13';
// import Onboarding14 from '../../../components/OnBoarding3Component/Onboarding14/Onboarding14';
// import Onboarding15 from '../../../components/OnBoarding3Component/Onboarding15/Onboarding15';
// import Onbording16 from '../../../components/OnBoarding3Component/Onboarding16/Onbording16';
// import Onbording17 from '../../../components/OnBoarding3Component/Onboarding17/Onbording17';
// import Onbording18 from '../../../components/OnBoarding3Component/Onboarding18/Onbording18';
// import Onbording19 from '../../../components/OnBoarding3Component/Onboarding19/Onbording19';
// import { Routes } from '../../../navigation/Routes';
// import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

// const onboardingData = [
//   { id: '12', Component: Onbording12 },
//   { id: '13', Component: Onboarding13 },
//   { id: '14', Component: Onboarding14 },
//   { id: '15', Component: Onboarding15 },
//   { id: '16', Component: Onbording16 },
//   { id: '17', Component: Onbording17 },
//   { id: '18', Component: Onbording18 },
//   { id: '19', Component: Onbording19 },
// ];

// const OnBordingScreen3 = ({ navigation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const finishOnboarding = () => {
//     navigation.navigate(Routes.Onboarding20Screen);
//   };

//   const handleNext = () => {
//     if (currentIndex < onboardingData.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//       return;
//     }
//     finishOnboarding();
//   };

//   const { Component: CurrentComponent } = onboardingData[currentIndex];

//   return (
//     <SafeFlexView bar top={false} islinear={false}>
//       <OnboardingProgress
//         total={onboardingData.length}
//         currentIndex={currentIndex}
//       />
//       <TouchableOpacity
//         activeOpacity={1}
//         onPress={handleNext}
//         style={{ flex: 1 }}
//       >
//         <CurrentComponent />
//       </TouchableOpacity>
//     </SafeFlexView>
//   );
// };

// export default OnBordingScreen3;