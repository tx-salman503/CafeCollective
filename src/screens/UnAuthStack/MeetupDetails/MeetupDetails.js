import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeButton, SafeFlexView } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { MeetupData } from '../../../utils/export'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import { SvgXml } from 'react-native-svg'
import { clock, joinPeopleIcon, jointSvg, locationIcon, plusIcon } from '../../../assets/Svgs'
import { moderateScale } from 'react-native-size-matters'
import Users from '../../../components/Users/Users'
import { images } from '../../../assets/images'
import { Routes } from '../../../navigation/Routes'
import { useTranslation } from 'react-i18next'

const MeetupDetails = ({ navigation }) => {
  const { t } = useTranslation();





    return (
        <SafeFlexView top={false}>
            <NativeHeader title={t('MeetupDetails.title')} back />
            <View style={styles.main}>
                <View style={styles.rowContainer}>
                    <View>
                        <NativeText style={styles.title} value={t('MeetupDetails.morningPowderRun')} />
                        <View style={styles.row}>
                            <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate(Routes.HostProfile)}}>
                            <Image source={images.User2} style={styles.hostimg} resizeMode='cover'/>
                            </TouchableOpacity>
                        <NativeText style={styles.detail} value={t('MeetupDetails.hostedByAlex')} />
                        </View>
                    </View>
                    <View style={styles.button}>
                        <NativeText style={styles.btnText} value={t('SetupProfile.beginner')} />
                    </View>
                </View>
                <View style={styles.Cotainer}>
                    <View style={[styles.row,{gap:moderateScale(120)}]}>
                        <View style={styles.row}>
                            <View>
                                <SvgXml xml={clock} width={moderateScale(18)} height={moderateScale(18)} style={styles.svg}/>
                            </View>
                            <View>
                                <NativeText style={styles.label} value={t('MeetupDetails.time')} />
                                <NativeText style={[styles.label_Light,]} value={"10:00 AM"} />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <SvgXml xml={joinPeopleIcon} width={moderateScale(18)} height={moderateScale(18)} style={styles.svg}/>
                            </View>
                            <View>
                                <NativeText style={styles.label} value={t('MeetupDetails.participants')} />
                                <NativeText style={[styles.label_Light,]} value={"4/8 joined"} />
                            </View>
                        </View>

                    </View>
                    <View style={[styles.row,{gap:moderateScale(120),marginTop:"auto"}]}>
                        <View style={styles.row}>
                            <View>
                                <SvgXml xml={locationIcon} width={moderateScale(18)} height={moderateScale(18)} style={styles.svg}/>
                            </View>
                            <View>
                                <NativeText style={styles.label} value={t('MeetupDetails.location')} />
                                <NativeText style={[styles.label_Light,]} value={"Les Manures Lift Station(0.5Km)"} />
                            </View>
                        </View>
                      

                    </View>
                </View>
                <Users/>
                <NativeText style={styles.title} value={t('MeetupDetails.description')} />
                <NativeText style={styles.subtitle} value={t('MeetupDetails.descriptionText')} />
<NativeButton
title={t('MeetupDetails.askToJoin')}
containerStyle={styles.btn}
/>
            </View>



        </SafeFlexView>
    )
}

export default MeetupDetails