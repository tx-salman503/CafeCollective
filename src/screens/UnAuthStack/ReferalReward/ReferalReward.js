import { View, ScrollView, } from 'react-native'
import React from 'react'
import { MessageCard, SafeFlexView } from '../../../components'
import { styles } from './style'
import AchivemntBadge from '../../../components/AchivemetBadge/AchivemntBadge'
import { Routes } from '../../../navigation/Routes'


const ReferalReward = ({ navigation }) => {



    return (
        <SafeFlexView>
            <ScrollView style={styles.main} contentContainerStyle={styles.containetContainer}>
                <AchivemntBadge
                    beansReceived="+50 Beans Recieved"
                    achievement="Achievement Unlocked: Referral Redeemed"
                    description="Congratulations for successful sign up using friend's referral"
                    totalBeans="50"
                    beansChange="+50"
               
                />



                <MessageCard text={'Start My First Discovery'} isBtn touchable onPress={() => { navigation.navigate(Routes.AllCafe) }} />
            </ScrollView>
        </SafeFlexView>
    )
}

export default ReferalReward