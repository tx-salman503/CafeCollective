import { View,  } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { SvgXml } from 'react-native-svg';
import {  Onboarding14men } from '../../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording14 = () => {
    return (
        <SafeFlexView>
            <View style={styles.container}>
                <View style={styles.innerContiner}>
                    <SvgXml xml={Onboarding14men} width={moderateScale(501)} height={moderateScale(334)} />
                   <View style={styles.mcgBox}>
                   <MessageCard
                        text="Invite friends, grow the community, and compete with fellow café explorers."
                       
                    />
                   </View>
                </View>
            </View>
        </SafeFlexView>
    );
};

export default Onbording14;