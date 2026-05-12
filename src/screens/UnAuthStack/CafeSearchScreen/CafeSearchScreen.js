import { FlatList, Image, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { MessageCard, NativeInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { images } from '../../../assets/images';
import BackBtnHeader from '../../../components/AppHeaders/BackBtnHeader';
import { SvgXml } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import { Cafe, SearchIcon } from '../../../assets/Svgs';
import { cafeReviewData } from '../../../utils/export';
import { colors } from 'react-native-keyboard-controller/src/components/KeyboardToolbar/colors';
import { Theme } from '../../../libs';
import { Routes } from '../../../navigation/Routes'


const CafeSearchScreen = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const renderitem = ({ item }) => {
        return (
            <View style={[combineStyle.rowStyle, styles.list, { gap: moderateScale(10) }]}>
                <Image source={item.image} style={styles.cafeImg} />
                <View>
                    <NativeText value={item.title} style={combineStyle.text16Bold} />
                    <View style={[combineStyle.rowStyle,]}>
                        <NativeText value={item.distance} style={[combineStyle.text12Regular, { color: Theme.colors.SlatyGray }]} />
                        <NativeText value={"miles away"} style={[combineStyle.text12Regular, { color: Theme.colors.SlatyGray }]} />
                        <NativeText value={" . "} style={[combineStyle.text12Regular, { color: Theme.colors.SlatyGray }]} />
                        <NativeText value={item.rating} style={[combineStyle.text12Regular, { color: Theme.colors.SlatyGray }]} />
                        <NativeText value={" ★"} style={[combineStyle.text12Regular, { color: Theme.colors.SlatyGray }]} />

                    </View>
                    <NativeText value={item.address} style={[combineStyle.text12Regular, { color: Theme.colors.SlatyGrayDark, width: moderateScale(151) }]} />
                </View>
                <MessageCard
                    text="Review This"
                    containerStyle={styles.btnContainer}
                    firstWrapStyle={styles.btnContainer2}
                    textStyle={[combineStyle.text14Bold, { color: "black", bottom: moderateScale(2) }]}
                    onPress={()=>{navigation.navigate(Routes.DiscoverScreen)}}
                    touchable={true}
                />
            </View>
        )
    }
    return (
        <SafeFlexView>
            <BackBtnHeader containerStyle={{ paddingTop: 0, }} />
            <KeyboardAwareScrollView
                style={styles.main}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                extraScrollHeight={80}
                keyboardShouldPersistTaps="handled"
            >
                <NativeInput
                    ContainerStyle={{ width: "90%", alignSelf: "center" }}
                    placeholder="Search for a cafe ..."
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    leftComponent={<SvgXml xml={SearchIcon} width={moderateScale(20)} height={moderateScale(20)} />}

                />
                <View style={styles.imgcontainer}>
                    <Image source={images.FogMap} style={{ width: "100%", height: "100%" }} />
                </View>

                <View style={styles.innerContainer}>
                   <ScrollView showsVerticalScrollIndicator={false} >
                   <NativeText value={"Your First Discovery Quest"} style={combineStyle.text24Bold} />
                    <NativeText value={"Have you been to any of these cafes? Pick one to review:"} style={[combineStyle.text14Regular,{marginVertical:moderateScale(15)}]} />
                    <View style={styles.badg}>
                        <SvgXml xml={Cafe} width={moderateScale(40)} height={moderateScale(40)} />
                        <View>
                            <NativeText value={"Complete your first cafe review."} style={combineStyle.text14Mid} />
                            <NativeText value={"+100 Beans  .  Unlock new area"} style={combineStyle.text12Bold} />
                        </View>
                    </View>

                    <FlatList
                        data={cafeReviewData}
                        renderItem={renderitem}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                    />
                   </ScrollView>
                </View>
            </KeyboardAwareScrollView>
        </SafeFlexView>
    )
}

export default CafeSearchScreen