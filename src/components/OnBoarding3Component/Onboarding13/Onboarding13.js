import { View,  } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { SvgXml } from 'react-native-svg';
import {  Onboarding13men } from '../../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording13 = () => {
    return (
        <SafeFlexView>
            <View style={styles.container}>
                <View style={styles.innerContiner}>
                    <SvgXml xml={Onboarding13men} width={moderateScale(410)} height={moderateScale(254)} />
                   <View style={styles.mcgBox}>
                   <MessageCard
                        text="Use your beans to unlock invites to the app."
                       
                    />
                   </View>
                </View>
            </View>
        </SafeFlexView>
    );
};

export default Onbording13;