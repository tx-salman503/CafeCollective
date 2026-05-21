import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { MessageCard, NativeButton, NativeInput, SafeFlexView } from '../../../components'
import { styles } from './style'
import AchivemntBadge from '../../../components/AchivemetBadge/AchivemntBadge'
import combineStyle from '../../../libs/combineStyle'
import { moderateScale } from 'react-native-size-matters'
import { BlackGo, CopySvg, invitFriendSvg, ShearSvg, Unlock } from '../../../assets/Svgs'
import { LocalSvg, SvgXml } from 'react-native-svg'
import NativeText from '../../../components/AppTexts/NativeText'
import Share from 'react-native-share';
import { Routes } from '../../../navigation/Routes'


const AchievementBadgeScreen = ({navigation}) => {

    const handleShare = async () => {
        try {
            const res = await Share.open(shareOptions);
            console.log(res);
        } catch (err) {
            console.log('Share cancelled or error:', err);
        }
    };

    return (
        <SafeFlexView>
            <ScrollView style={styles.main} contentContainerStyle={styles.containetContainer}>
                <AchivemntBadge />
                <View style={styles.InvitFrindsContainer}>
                    <View style={[combineStyle.rowStyle, { gap: moderateScale(10) }]}>
                        <SvgXml xml={invitFriendSvg} width={moderateScale(24)} height={moderateScale(24)} />
                        <NativeText value={"Invite  a Friend"} style={combineStyle.text18Bold} />
                    </View>
                    <NativeText value={"Invite friends and earn 50 beans for every successful sign-up."} style={combineStyle.text12Mid} />
                    <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                        <NativeInput
                            value={"COFFEE-XP-2026"}
                            editable={false}
                            rightComponent={<TouchableOpacity activeOpacity={0.7}>
                                <SvgXml xml={CopySvg} width={moderateScale(18)} height={moderateScale(18)} />
                            </TouchableOpacity>
                            }
                            ContainerStyle={{ width: "80%", }}
                            inputStyle={combineStyle.text16Bold}
                            inputContainerStyle={{ height: moderateScale(40) }}
                        />
                        <Pressable style={styles.shearContainer} onPress={handleShare}>
                            <SvgXml xml={ShearSvg} width={moderateScale(24)} height={moderateScale(24)} />
                        </Pressable>



                    </View>
                </View>

                <View style={styles.LockContainer}>
                    <View style={[{ flexDirection: 'row', gap: moderateScale(10) }]}>
                        <SvgXml xml={Unlock} width={moderateScale(24)} height={moderateScale(24)} />
                        <View>
                            <NativeText value={"Search Unlocked!"} style={combineStyle.text18Bold} />
                            <NativeText value={"You can now view all 3 more work-friendly cafes in the metro area."} style={combineStyle.text14Regular} />
                        </View>
                    </View>
                    <NativeButton title={"View Results"} containerStyle={{width:"100%",borderRadius:moderateScale(220)}} titleStyle={[combineStyle.text16Bold,{color:"black"}]} RightIcon={BlackGo}/>


                </View>
                    <MessageCard text={'Discover other cafes'} isBtn touchable  onPress={()=>{navigation.navigate(Routes.AllCafe)}}/>
                    <NativeButton title={"Back to Home"} containerStyle={{backgroundColor:"transparent",borderWidth:0,}} titleStyle={[combineStyle.text16Bold]} onPress={()=>{navigation.navigate(Routes.BottomStack)}} />
            </ScrollView>
        </SafeFlexView>
    )
}

export default AchievementBadgeScreen