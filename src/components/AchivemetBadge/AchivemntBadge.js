import { View, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SvgXml } from 'react-native-svg'
import { BeanSvg, DoneSvg, shearGo, upArrow } from '../../assets/Svgs/index'
import NativeText from '../AppTexts/NativeText'
import { moderateScale } from 'react-native-size-matters'
import { Theme } from '../../libs'
import combineStyle from '../../libs/combineStyle'
import MessageCard from '../MessageCard/MessageCard'

const AchivemntBadge = ({
    beansReceived = '+100 Beans Recieved',
    achievement = 'Achievement Unlocked: First Discoverer',
    description = 'You just helped hundreds of café lovers find their perfect spot!',
    totalBeans = '347',
    beansChange = '+100',
}) => {
    return (
        <LinearGradient
            colors={['#395891', '#0e1320']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={styles.iconWrapper}>
                <SvgXml xml={DoneSvg} width={moderateScale(124)} height={moderateScale(124)} />
            </View>

            <NativeText
                value={beansReceived}
                style={[combineStyle.text28Bold, styles.title]}
            />

            <View style={styles.badgePill}>
                <NativeText
                    value={achievement}
                    style={[combineStyle.text16Semi, styles.badgeText]}
                />
            </View>

            <NativeText
                value={description}
                style={[combineStyle.text16Mid, styles.description]}
            />

            <View style={styles.pointBox}>
                <View style={[combineStyle.rowStyle, { justifyContent: 'space-between' }]}>
                    <NativeText value={'Total Beans'} style={combineStyle.text14Semi} />
                    <View style={[combineStyle.rowStyle, { gap: moderateScale(5) }]}>
                        <SvgXml xml={upArrow} width={moderateScale(14)} height={moderateScale(14)} />
                        <NativeText value={beansChange} style={combineStyle.text14Bold} />
                    </View>
                </View>

                <View style={combineStyle.rowStyle}>
                    <NativeText value={`${totalBeans} `} style={combineStyle.text24Bold} />
                    <SvgXml xml={BeanSvg} width={moderateScale(12)} height={moderateScale(15)} />
                </View>
            </View>

            <MessageCard
                text='Share My Achievement'
                isBtn
                touchable
                svg={shearGo}
            />
        </LinearGradient>
    )
}

export default AchivemntBadge

const styles = StyleSheet.create({
    container: {
        width: moderateScale(333),
        height: moderateScale(580),
        borderWidth: 1,
        borderColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(23),
        marginTop: moderateScale(20),
        padding: moderateScale(20),
        gap: moderateScale(22),
    },
    iconWrapper: {
        alignItems: 'center',
        marginBottom: moderateScale(4),
    },
    title: {
        color: Theme.colors.white,
        textAlign: 'center',
    },
    badgePill: {
        backgroundColor: Theme.colors.lightTransparet,
        borderWidth: 1,
        borderColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(30),
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(16),
        alignItems: 'center',
    },
    badgeText: {
        color: Theme.colors.white,
        textAlign: 'center',
        lineHeight: moderateScale(20),
    },
    description: {
        color: 'rgba(255,255,255,0.65)',
        textAlign: 'center',
        lineHeight: moderateScale(22),
    },
    pointBox: {
        padding: moderateScale(20),
        borderWidth: 1,
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(16),
        gap: moderateScale(5),
    },
})