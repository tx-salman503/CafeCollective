import { Image, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { MessageCard, SafeFlexView } from '../../../components'
import { styles } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import * as Progress from 'react-native-progress'
import { images } from '../../../assets/images'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../../libs'
import { SvgXml } from 'react-native-svg'
import { ContactSvg } from '../../../assets/Svgs'
import CafeCard from '../../../components/CafeCard/CafeCardList'
import { CAFE_DATA } from '../../../utils/export'
import { Routes } from '../../../navigation/Routes'
import { useDispatch } from 'react-redux'
import { dispatchCafeDiscovery } from '../../../redux/slices/userSlice'

const AllSetScreen = ({ navigation }) => {

    const [barWidth, setBarWidth] = useState(0)  // ✅ measure real width
    const dispatch = useDispatch();


    return (
        <SafeFlexView>
            <ScrollView style={{ flex: 1 }}>
                <KeyboardAwareScrollView
                    style={styles.main}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    enableOnAndroid={true}
                    extraScrollHeight={80}
                    keyboardShouldPersistTaps="handled"
                >
                    <NativeText value={"You're all Set!"} style={[combineStyle.text32Bold, { textAlign: "center" }]} />

                    <View style={styles.mapContainer}>
                        <Image source={images.MapImg} style={styles.img} />
                    </View>

                    <View style={styles.badg}>
                        <View style={[combineStyle.rowStyle, { justifyContent: "space-between" }]}>
                            <NativeText value={"Current Balance"} style={[combineStyle.text16Semi]} />
                            <NativeText value={"100 Beans"} style={[combineStyle.text20Semi, { color: "white" }]} />
                        </View>

                        <View
                            onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
                            style={{ width: '100%' }}
                        >
                            {barWidth > 0 && (
                                <Progress.Bar
                                    progress={0.2}
                                    width={barWidth}        // ✅ exact pixel width from onLayout
                                    height={moderateScale(8)}
                                    color="#FFFFFF"         // ✅ hex only
                                    unfilledColor="rgba(255,255,255,0.15)"
                                    borderWidth={0}
                                    borderRadius={moderateScale(4)}
                                    animated={false}        // ✅ disables animation that can hide fill
                                />
                            )}
                        </View>
                    </View>

                    <NativeText value={"Look What You've Unlocked!"} style={[combineStyle.text18Bold, { paddingLeft: moderateScale(0) }]} />

                    <View style={[combineStyle.rowStyle, { gap: moderateScale(15) }]}>
                        <SvgXml xml={ContactSvg} width={moderateScale(48)} height={moderateScale(48)} />
                        <View>
                            <NativeText value={"First Invitation"} style={combineStyle.text14Regular} />
                            <NativeText value={"My First Invitation to Invite my friend"} style={combineStyle.text14Regular} />
                        </View>
                    </View>


                    <View style={[combineStyle.rowStyle, { justifyContent: "space-between", paddingHorizontal: moderateScale(5) }]}>
                        <NativeText value={"Results"} style={combineStyle.text10Bold} />
                        <View style={styles.line} />
                        <NativeText value={"3 Cafes Found"} style={combineStyle.text10Bold} />

                    </View>



                    <CafeCard data={CAFE_DATA} />

                    <MessageCard
                        text='Start Exploring'
                        touchable
                        isBtn
                        containerStyle={{ paddingBottom: moderateScale(10) }}
                        onPress={() => {
                            dispatch(dispatchCafeDiscovery(true));
                            navigation.reset({
                                index: 0,
                                routes: [{ name: Routes.BottomStack }],
                            });
                        }}
                    />
                </KeyboardAwareScrollView>
            </ScrollView>
        </SafeFlexView>
    )
}

export default AllSetScreen