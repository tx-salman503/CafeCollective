import { View, ScrollView, Image, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import { NativeButton, SafeFlexView } from '../../../components';
import HomeHeader from '../../../components/AppHeaders/HomeHeader';
import FilterChips from '../../../components/FilterChips/FilterChips';
import { HomeScreenData, RatingCafeArray } from '../../../utils/export';
import { styles } from './style';
import { images } from '../../../assets/images';
import { moderateScale } from 'react-native-size-matters';
import combineStyle from '../../../libs/combineStyle';
import NativeText from '../../../components/AppTexts/NativeText';
import { SvgXml } from 'react-native-svg';
import { GoldenStar } from '../../../assets/Svgs';
import { Theme } from '../../../libs';
import { Routes } from '../../../navigation/Routes';

const CARD_WIDTH = moderateScale(180);
const CARD_GAP = moderateScale(12);

const HomeScreen = ({navigation}) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterSelect = (item) => {
    setSelectedFilter(item);
    console.log('Selected filter:', item);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cafeItem}>
      <Image source={item.img} style={styles.imgList} />
      <NativeText value={item.title} style={combineStyle.text16Semi} />
      <View style={[combineStyle.rowStyle, { justifyContent: 'space-between' }]}>
        <View style={[combineStyle.rowStyle, { gap: moderateScale(4) }]}>
          <SvgXml xml={GoldenStar} width={moderateScale(12)} height={moderateScale(12)} />
          <NativeText value={item.rating} style={combineStyle.text14Bold} />
        </View>
        <View style={styles.tagBox}>
          <NativeText value={item.totalReview} style={[combineStyle.text12Bold, { color: 'black' }]} />
        </View>
      </View>

      <View style={[combineStyle.rowStyle, { gap: moderateScale(4) }]}>
        <SvgXml xml={item.tagSvg} width={moderateScale(22)} height={moderateScale(22)} />
        <NativeText value={item.tagtext} style={[combineStyle.text12Regular, { color: Theme.colors.gray }]} />
      </View>

      <NativeButton
        title="Discover this Cafe"
        containerStyle={styles.button}
        onPress={() => {navigation.navigate(Routes.OnboardingCafeDiscovery)}}
        titleStyle={{ ...combineStyle.text16Bold, color: Theme.colors.black }}
      />
    </View>
  );

  return (
    <SafeFlexView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ gap: moderateScale(10) }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <HomeHeader  onNotificationPress={()=>{navigation.navigate(Routes.NotifcationScreen)}} />

        <View style={{ width: '100%', overflow: 'hidden' }}>
          <FilterChips
            data={HomeScreenData}
            onFilterSelect={handleFilterSelect}
          />
        </View>

        <View style={styles.mapBox}>
          <Image source={images.FogMap} style={styles.img} />
        </View>

        <View style={styles.itemContainer}>
          <View
            style={[
              combineStyle.rowStyle,
              { justifyContent: 'space-between', paddingHorizontal: moderateScale(16) },
            ]}
          >
            <NativeText value="Top picks for you" style={combineStyle.text14Mid} />
            <NativeText
              value="View All"
              style={combineStyle.text12Bold}
              onPress={ () => navigation.navigate("AllCafe") }
            />
          </View>

          <FlatList
            data={RatingCafeArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            decelerationRate="fast"
            snapToInterval={CARD_WIDTH + CARD_GAP}
            snapToAlignment="start"
            contentContainerStyle={{
              paddingHorizontal: moderateScale(16),
              gap: CARD_GAP,
            }}
            getItemLayout={(_, index) => ({
              length: CARD_WIDTH,
              offset: (CARD_WIDTH + CARD_GAP) * index,
              index,
            })}
          />
        </View>
      </ScrollView>
    </SafeFlexView>
  );
};
export default HomeScreen;