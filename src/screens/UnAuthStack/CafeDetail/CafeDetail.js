import { View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MessageCard, SafeFlexView } from '../../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CafeDetailHeader from '../../../components/AppHeaders/CafeDetailHeader'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import NativeText from '../../../components/AppTexts/NativeText'
import { moderateScale } from 'react-native-size-matters'
import {  BlackPen,  EditPen,  } from '../../../assets/Svgs'
import { FOOD_ROWS, WORKABILITY_SCORES,ACCESS_ROWS,COMFORT_SCORES,VIBE_TAGS,CafeImgArray } from '../../../utils/export'
import { Routes } from '../../../navigation/Routes'


const StarRow = ({ count }) => (
    <NativeText value={'★'.repeat(count) + '☆'.repeat(5 - count)} style={styles.stars} />
)

const SectionHeader = ({ title, editable ,onPress}) => (
    <View style={styles.sectionHeader}>
        <NativeText value={title} style={styles.sectionTitle} />
        {editable && (
            <TouchableOpacity onPress={onPress} hitSlop={10}>
                <SvgXml xml={EditPen} width={moderateScale(16)} height={moderateScale(16)} />
            </TouchableOpacity>
        )}
    </View>
)

const ScoreCard = ({ item }) => (
    <View style={styles.scoreCard}>
        <View style={styles.scoreCardTop}>
            <NativeText value={item.label} style={styles.scoreCardLabel} />
            <SvgXml xml={item.icon} width={moderateScale(14)} height={moderateScale(14)} />
        </View>
        <NativeText value={item.value} style={styles.scoreCardValue} />
        {item.stars && <StarRow count={item.stars} />}
    </View>
)

const InfoRow = ({ item, isLast, index }) => (
    <View style={[styles.infoRow, isLast && styles.infoRowLast]}>
        <View style={styles.rowLeft}>
            <SvgXml xml={item.icon} width={moderateScale(18)} height={moderateScale(18)} />
            <NativeText value={item.label} style={styles.rowLabel} />
        </View>
        {item.pill ? (
            <View style={styles.pill}>
                <NativeText value={item.value} style={styles.pillText} />
            </View>
        ) : (
            <NativeText
                value={item.value}
                style={[styles.rowValue, item.type === "manue" && { fontSize: moderateScale(12), fontWeight: '400' }]}
            />
        )}
    </View>
)


const InfoRow2 = ({ item, isLast }) => (
    <View style={[styles.infoRow, isLast && styles.infoRowLast]}>
        <View style={styles.rowLeft}>
            <SvgXml xml={item.icon} width={moderateScale(18)} height={moderateScale(18)} />
            <NativeText value={item.label} style={styles.rowLabel} />
        </View>
        {item.pill ? (
            <View style={[styles.pill, styles.pillContaier]}>
                <NativeText value={item.value} style={styles.pillText} />
            </View>
        ) : (
            <NativeText value={item.value} style={styles.rowValue} />
        )}
    </View>
)


const CafeDetail = ({navigation}) => {

    const [isDiscovered, setIsDiscovered] = useState(false)

    const renderImage = ({ item, index }) => (
        <Image
            source={item.source}
            style={[styles.galleryImg, index === 0 && styles.galleryImgFirst]}
        />
    )

    return (
        <SafeFlexView>
            <CafeDetailHeader title={"The Grinding Bean"} />

            <KeyboardAwareScrollView
                style={styles.main}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                extraScrollHeight={80}
                keyboardShouldPersistTaps="handled"
            >


                <FlatList
                    data={CafeImgArray}
                    keyExtractor={(item) => item.id}
                    renderItem={renderImage}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.galleryList}
                />


                <SectionHeader title="Workability Score" editable={isDiscovered} onPress={()=>{navigation.navigate(Routes.EditCafeDetail,{type:"workability"})}}/>

                <FlatList
                    data={WORKABILITY_SCORES}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ScoreCard item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scoreList}
                />

                <SectionHeader title="Coffee & Food Quality" editable={isDiscovered} onPress={()=>{navigation.navigate(Routes.EditCafeDetail,{type:"CafeeFood"})}} />
                <View style={styles.cardContent}>
                    {FOOD_ROWS.map((item, index) => (
                        <InfoRow key={item.id} item={item} isLast={index === FOOD_ROWS.length - 1} />
                    ))}
                </View>

                {/* Accessibility & Value */}
                <SectionHeader title="Accessibility & Value may work" editable={isDiscovered} onPress={()=>{navigation.navigate(Routes.EditCafeDetail,{type:"accessibilityValue"})}} />
                <View style={styles.cardContent}>
                    {ACCESS_ROWS.map((item, index) => (
                        <InfoRow2 key={item.id} item={item} isLast={index === ACCESS_ROWS.length - 1} />
                    ))}
                </View>

                {/* Comfort & Environment */}
                <SectionHeader title="Comfort & Environment" editable={isDiscovered} onPress={()=>{navigation.navigate(Routes.EditCafeDetail,{type:"comfortEnvirment"})}}/>

                <FlatList
                    data={COMFORT_SCORES}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ScoreCard item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scoreList}
                />


                {/* Aesthetic / Vibe */}
                <SectionHeader title="Aesthetic / Vibe" editable={isDiscovered}onPress={()=>{navigation.navigate(Routes.EditCafeDetail,{type:"astheticVibe"})}} />

                <View style={styles.tagsContainer}>
                    {VIBE_TAGS.map((tag) => (
                        <View key={tag} style={styles.tag}>
                            <NativeText value={tag} style={styles.tagText} />
                        </View>
                    ))}
                </View>
                <View style={styles.secretTip}>
                    <NativeText value="Secret Tip" style={styles.secretTipLabel} />
                    <NativeText
                        value={`"The window seat by the front has the best natural light and it's perfect for deep focus sessions."`}
                        style={styles.secretTipText}
                    />
                </View>


            </KeyboardAwareScrollView>
      <View style={styles.bottomBar}>
  {isDiscovered ? (
     <View style={{ flex: 1 }}>
        <MessageCard
          text='Edit your Discovery'
          touchable
          isBtn
           onPress={() => setIsDiscovered(false)}
        />
      </View>
  ) : (
    <>
      <View style={{ flex: 1 }}>
        <MessageCard
          text='+10 Beans Check-in'
          touchable
          isBtn
          onPress={() => setIsDiscovered(true)}
        />
      </View>
      <TouchableOpacity style={styles.editIconBtn} activeOpacity={0.8}     onPress={() => setIsDiscovered(true)}>
        <SvgXml xml={BlackPen} width={moderateScale(18)} height={moderateScale(18)} />
      </TouchableOpacity>
    </>
  )}
</View>

        </SafeFlexView>
    )
}

export default CafeDetail