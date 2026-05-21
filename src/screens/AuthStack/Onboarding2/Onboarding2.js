import React, { useState, useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import { SafeFlexView } from '../../../components';
import Onbording8 from '../../../components/Onboarding2Compoenet/Onboarding8/Onbording8';
import Onbording9 from '../../../components/Onboarding2Compoenet/Onboding9/Onbording9';
import Onbording10 from '../../../components/Onboarding2Compoenet/Onboarding10/Onbording10';
import Onbording11 from '../../../components/Onboarding2Compoenet/Onboarding11/Onbording11';
import { Routes } from '../../../navigation/Routes';
import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

const onboardingData = [
  { id: '8', Component: Onbording8 },
  { id: '9', Component: Onbording9 },
  { id: '10', Component: Onbording10 },
  { id: '11', Component: Onbording11 },
];

const SWIPE_THRESHOLD = 50;

const OnBordingScreen2 = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);

  const finishOnboarding = () => {
    navigation.navigate(Routes.FirstOnboardingScreen);
  };

  const animateAndGo = (direction, nextIndex) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    Animated.timing(translateX, {
      toValue: direction === 'next' ? -400 : 400,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      translateX.setValue(direction === 'next' ? 400 : -400);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        isAnimating.current = false;
      });
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
          Math.abs(gestureState.dx) > 10
        );
      },
      onPanResponderRelease: (_, gestureState) => {
        const idx = currentIndexRef.current;

        if (gestureState.dx < -SWIPE_THRESHOLD) {
          // swipe left → next
          if (idx < onboardingData.length - 1) {
            animateAndGo('next', idx + 1);
          } else {
            finishOnboarding();
          }
        } else if (gestureState.dx > SWIPE_THRESHOLD) {
          // swipe right → back
          if (idx > 0) {
            animateAndGo('back', idx - 1);
          }
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

export default OnBordingScreen2;


// import React, { useState } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { SafeFlexView } from '../../../components';
// import Onbording8 from '../../../components/Onboarding2Compoenet/Onboarding8/Onbording8';
// import Onbording9 from '../../../components/Onboarding2Compoenet/Onboding9/Onbording9';
// import Onbording10 from '../../../components/Onboarding2Compoenet/Onboarding10/Onbording10';
// import Onbording11 from '../../../components/Onboarding2Compoenet/Onboarding11/Onbording11';
// import { Routes } from '../../../navigation/Routes';
// import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

// const onboardingData = [
//   { id: '8', Component: Onbording8 },
//   { id: '9', Component: Onbording9 },
//   { id: '10', Component: Onbording10 },
//   { id: '11', Component: Onbording11 },
// ];

// const OnBordingScreen2 = ({ navigation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const finishOnboarding = () => {
//     navigation.navigate(Routes.FirstOnboardingScreen);
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

// export default OnBordingScreen2;