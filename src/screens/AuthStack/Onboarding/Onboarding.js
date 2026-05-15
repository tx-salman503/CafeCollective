import React, { useState, useRef } from 'react';
import { PanResponder, Animated } from 'react-native';
import { SafeFlexView } from '../../../components';
import Onbording1 from '../../../components/OnbordingComponent/Onbording1';
import Onbording2 from '../../../components/OnbordingComponent/Onbording2/Onbording2';
import Onbording3 from '../../../components/OnbordingComponent/Onboding3/Onbording3';
import Onbording4 from '../../../components/OnbordingComponent/Onbording4/Onbording4';
import Onbording5 from '../../../components/OnbordingComponent/Onbording5/Onbording5';
import Onbording6 from '../../../components/OnbordingComponent/Onboding6/Onbording6';
import Onbording7 from '../../../components/OnbordingComponent/Onboding7/Onbording7';
import { Routes } from '../../../navigation/Routes';
import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

const onboardingData = [
  { id: '1', Component: Onbording1 },
  { id: '2', Component: Onbording2 },
  { id: '3', Component: Onbording3 },
  { id: '4', Component: Onbording4 },
  { id: '5', Component: Onbording5 },
  { id: '6', Component: Onbording6 },
  { id: '7', Component: Onbording7 },
];

const SWIPE_THRESHOLD = 50; // minimum px to count as swipe

const OnBordingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0); // ← yeh add karo
  const translateX = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false); // ← double swipe prevent karo

  const finishOnboarding = () => {
    navigation.getParent()?.replace(Routes.SplashScreen3);
  };

  const animateAndGo = (direction, nextIndex) => {
    if (isAnimating.current) return; // animation chal rahi ho toh ignore karo
    isAnimating.current = true;

    Animated.timing(translateX, {
      toValue: direction === 'next' ? -400 : 400,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      currentIndexRef.current = nextIndex; // ← ref update karo
      setCurrentIndex(nextIndex);
      translateX.setValue(direction === 'next' ? 400 : -400);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        isAnimating.current = false; // ← animation khatam
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
        const idx = currentIndexRef.current; // ← ref se lo, state se nahi

        if (gestureState.dx < -50) {
          // swipe left → next
          if (idx < onboardingData.length - 1) {
            animateAndGo('next', idx + 1);
          } else {
            finishOnboarding();
          }
        } else if (gestureState.dx > 50) {
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

export default OnBordingScreen;







// import React, { useState, useRef } from 'react';
// import { PanResponder, Animated } from 'react-native';
// import { SafeFlexView } from '../../../components';
// import Onbording1 from '../../../components/OnbordingComponent/Onbording1';
// import Onbording2 from '../../../components/OnbordingComponent/Onbording2/Onbording2';
// import Onbording3 from '../../../components/OnbordingComponent/Onboding3/Onbording3';
// import Onbording4 from '../../../components/OnbordingComponent/Onbording4/Onbording4';
// import Onbording5 from '../../../components/OnbordingComponent/Onbording5/Onbording5';
// import Onbording6 from '../../../components/OnbordingComponent/Onboding6/Onbording6';
// import Onbording7 from '../../../components/OnbordingComponent/Onboding7/Onbording7';
// import { Routes } from '../../../navigation/Routes';
// import OnboardingProgress from '../../../components/OnboardingProgress/OnboardingProgress';

// const onboardingData = [
//   { id: '1', Component: Onbording1 },
//   { id: '2', Component: Onbording2 },
//   { id: '3', Component: Onbording3 },
//   { id: '4', Component: Onbording4 },
//   { id: '5', Component: Onbording5 },
//   { id: '6', Component: Onbording6 },
//   { id: '7', Component: Onbording7 },
// ];

// const SWIPE_THRESHOLD = 50; // minimum px to count as swipe

// const OnBordingScreen = ({ navigation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentIndexRef = useRef(0); // ← yeh add karo
//   const translateX = useRef(new Animated.Value(0)).current;
//   const isAnimating = useRef(false); // ← double swipe prevent karo

//   const finishOnboarding = () => {
//     navigation.getParent()?.replace(Routes.SplashScreen3);
//   };

//   const animateAndGo = (direction, nextIndex) => {
//     if (isAnimating.current) return; // animation chal rahi ho toh ignore karo
//     isAnimating.current = true;

//     Animated.timing(translateX, {
//       toValue: direction === 'next' ? -400 : 400,
//       duration: 200,
//       useNativeDriver: true,
//     }).start(() => {
//       currentIndexRef.current = nextIndex; // ← ref update karo
//       setCurrentIndex(nextIndex);
//       translateX.setValue(direction === 'next' ? 400 : -400);
//       Animated.timing(translateX, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: true,
//       }).start(() => {
//         isAnimating.current = false; // ← animation khatam
//       });
//     });
//   };

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => false,
//       onMoveShouldSetPanResponder: (_, gestureState) => {
//         return (
//           Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
//           Math.abs(gestureState.dx) > 10
//         );
//       },
//       onPanResponderRelease: (_, gestureState) => {
//         const idx = currentIndexRef.current; // ← ref se lo, state se nahi

//         if (gestureState.dx < -50) {
//           // swipe left → next
//           if (idx < onboardingData.length - 1) {
//             animateAndGo('next', idx + 1);
//           } else {
//             finishOnboarding();
//           }
//         } else if (gestureState.dx > 50) {
//           // swipe right → back
//           if (idx > 0) {
//             animateAndGo('back', idx - 1);
//           }
//         }
//       },
//     })
//   ).current;

//   const { Component: CurrentComponent } = onboardingData[currentIndex];

//   return (
//     <SafeFlexView bar top={false} islinear={false}>
//       <OnboardingProgress
//         total={onboardingData.length}
//         currentIndex={currentIndex}
//       />
//       <Animated.View
//         style={{ flex: 1, transform: [{ translateX }] }}
//         {...panResponder.panHandlers}
//       >
//         <CurrentComponent />
//       </Animated.View>
//     </SafeFlexView>
//   );
// };y

// export default OnBordingScreen;