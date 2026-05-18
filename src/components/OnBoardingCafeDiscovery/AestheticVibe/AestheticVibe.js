import { Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import NativeText from '../../AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { clock, emojiFace, GoldenStar, mice, speaker, star, crowd1, AngrySvg, MidSvg, smileSvg, existingSvg, dinner, Blub, heart, BestLife, ArrowRightSvg } from '../../../assets/Svgs'
import RadioSelector from '../../RadioSelector/RadioSelector'
import MessageCard from '../../MessageCard/MessageCard'
import QualityStatusCard from '../../QualityStatusCard/QualityStatusCard'
import PowerOutletsAvailability from '../../PowerOutletsAvailability/PowerOutletsAvailability'
import { SvgXml } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import { images } from '../../../assets/images'
import StandoutFeatures from '../../StandOutFeacture/StandOutFeacture'
import { dispatchOnboardingAsthetice } from '../../../redux/slices/CafeOnboardingSlice'
import { useDispatch, useSelector } from 'react-redux'

const AstheticVibe = ({ onNext,  }) => {

    const [styleVal, setstyleVal] = useState(1)
    const [lighting, setLighting] = useState("Bright")
    const [selected, setSelected] = useState([])
    const { OnboardingAstheticVibeType } = useSelector(state => state.cafeReducer)
    const disptch = useDispatch()

    const FEATURE_OPTIONS = [
        'Cozy & intimate',
        'Instagram-worthy',
        'Outdoor seating',
        'Live music',
        'Pet-friendly',
        'Free Wi-Fi',
    ]

    const handleToggle = (option) => {
        setSelected((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    {OnboardingAstheticVibeType ? (
                        <NativeText value={'Aesthetic / Vibe'} style={combineStyle.text28Bold} />
                    ) : (
                        <NativeText value={'Edit Aesthetic / Vibe'} style={combineStyle.text28Bold} />
                    )}
                    <NativeText value={'Find cafes that feel right for your mood and style,'} style={combineStyle.text14Regular} />
                </View>

                <PowerOutletsAvailability
                    SvgIcon={Blub}
                    title="Lighting"
                    options={['Bright', 'Warm', 'Dim']}
                    selectedValue={lighting}
                    onChange={setLighting}
                />

                <PowerOutletsAvailability
                    SvgIcon={heart}
                    title="Style"
                    options={['Modern', 'Artistic', 'Minimal']}
                    selectedValue={styleVal}
                    onChange={setstyleVal}
                />

                <RadioSelector
                    titleIcon={BestLife}
                    title="Best for"
                    options={['Deep focus work', 'Social hangouts', 'Casual meetings', "Relaxing alone", "Date night"]}
                    onSelect={(index, value) => console.log(index, value)}
                />

                <StandoutFeatures
                    SvgIcon={BestLife}
                    title="Standout Features"
                    options={FEATURE_OPTIONS}
                    selectedOptions={selected}
                    onPress={handleToggle}
                    iconSize={24}
                />

                <MessageCard
                    touchable={true}
                    isBtn={true}
                    text={OnboardingAstheticVibeType ? 'Next' : 'Save'}
                    onPress={OnboardingAstheticVibeType ?()=>{onNext,disptch(dispatchOnboardingAsthetice(false))} : () => { console.error("Save") }}
                    containerStyle={{ marginTop: moderateScale(15) }}
                    svg={ArrowRightSvg}
                    
                />
            </View>
        </View>
    )
}

export default AstheticVibe