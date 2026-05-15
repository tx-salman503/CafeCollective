import { Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import {  cameraPlus, } from '../../../assets/Svgs'
import MessageCard from '../../MessageCard/MessageCard'
import { SvgXml } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import { images } from '../../../assets/images'
import AmazingWorkModal from '../../AchivmentModal/AchivmentModal'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../navigation/Routes'


const BADGE_OPTIONS = ['Best seat', 'Peak hours', 'Must-try items', 'Quiet spots'];

const SubmitScreen = ({ onNext }) => {

    const [visible, setVisible] = useState(false);
    const [selectedBadges, setSelectedBadges] = useState([]);
    const navigation=useNavigation()







    const handleBadgeToggle = (badge) => {
        setSelectedBadges((prev) =>
            prev.includes(badge)
                ? prev.filter((b) => b !== badge)
                : [...prev, badge]
        );
    };




    return (
        <View style={{ flex: 1 }} >


            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <NativeText value={'Anything else you’d like to share?'} style={[combineStyle.text28Bold, { textAlign: 'center' }]} />
                    <NativeText value={'Add your secret tips and cafe review to earn more beans'} style={[combineStyle.text14Regular, { textAlign: 'center' }]} />
                </View>

                <NativeText value={"Add Photo (Optional)"} style={combineStyle.text18Bold} />
                <TouchableOpacity style={styles.photoContainer} activeOpacity={0.8} onPress={() => console.log('Photo upload pressed')} >
                    <SvgXml xml={cameraPlus} width={moderateScale(46)} height={moderateScale(44)} />
                    <NativeText value={'Upload your view'} style={combineStyle.text16Bold} />
                    <NativeText value={'Snap a photo to verify your workspace'} style={combineStyle.text12Regular} />
                    <Image source={images.BinTag} style={styles.img} />
                </TouchableOpacity>




                <View style={styles.badge}>
                    <NativeText value={"The window seat by the front has the best natural light..."} style={combineStyle.text16Mid} />
                </View>

                {/* ── Badge Tags ── */}
                <View style={styles.badgeTagsRow}>
                    {BADGE_OPTIONS.map((badge) => {
                        const isActive = selectedBadges.includes(badge);
                        return (
                            <TouchableOpacity
                                key={badge}
                                activeOpacity={0.8}
                                onPress={() => handleBadgeToggle(badge)}
                                style={[
                                    styles.badgeTag,
                                    isActive ? styles.badgeTagActive : styles.badgeTagInactive,
                                ]}
                            >
                                <NativeText
                                    value={badge}
                                    style={[
                                        combineStyle.text14Bold,
                                        isActive ? styles.badgeTagTextActive : styles.badgeTagTextInactive,
                                    ]}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <MessageCard
                    touchable={true}
                    isBtn={true}
                    text='Submit & Earn +100 Beans'
                    onPress={() => {setVisible(true) }}
                    containerStyle={{ marginTop: "auto", }}
                />



                <AmazingWorkModal
                    visible={visible}
                    onClose={() => setVisible(false)}
                    onShare={() => {
                        console.log('Share pressed');
                        setVisible(false);
                    }}
                    onContinue={() => {
                        setVisible(false);
                        navigation.navigate(Routes.AllSetScreen)
                        
                    }}
                    title="Amazing Work"
                    badgeText="+100 Beans Earned & your First Invite Unlocked"
                    description="You just helped hundreds of café lovers find their perfect spot!"
                    rewardText="3 new cafes revealed on your map"
                    shareLabel="Share my Achievement"
                    continueLabel="Continue"
                />
            </View>
        </View>
    )
}

export default SubmitScreen