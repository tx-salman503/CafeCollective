import React, { useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeFlexView } from '../../../components';
import Onbording1 from '../../../components/OnbordingComponent/Onbording1';
import Onbording2 from '../../../components/OnbordingComponent/Onbording2/Onbording2';
import Onbording3 from '../../../components/OnbordingComponent/Onboding3/Onbording3';
import Onbording4 from '../../../components/OnbordingComponent/Onbording4/Onbording4';
import Onbording5 from '../../../components/OnbordingComponent/Onbording5/Onbording5';
import Onbording6 from '../../../components/OnbordingComponent/Onboding6/Onbording6';
import Onbording7 from '../../../components/OnbordingComponent/Onboding7/Onbording7';
import { dispatchOnbording } from '../../../redux/slices/userSlice';
import { Routes } from '../../../navigation/Routes';
import styles from './style';

const { width: screenWidth } = Dimensions.get('window');

const onboardingData = [
  { id: '1', Component: Onbording1 },
  { id: '2', Component: Onbording2 },
  { id: '3', Component: Onbording3 },
  { id: '4', Component: Onbording4 },
  { id: '5', Component: Onbording5 },
  { id: '6', Component: Onbording6 },
  { id: '7', Component: Onbording7 },
];

const OnBordingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishOnboarding = () => {
    dispatch(dispatchOnbording(true));
    navigation.replace(Routes.UnAuthStack);
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
      <View style={styles.paginationWrap}>
        <View style={styles.paginationContainer}>
          {onboardingData.map((item, index) => (
            <View key={item.id} style={index === currentIndex ? styles.activeDot : styles.dot} />
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.skip} onPress={finishOnboarding} activeOpacity={0.7}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

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

export default OnBordingScreen;
