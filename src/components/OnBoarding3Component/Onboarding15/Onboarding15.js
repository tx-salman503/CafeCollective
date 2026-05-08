import { View,  } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { SvgXml } from 'react-native-svg';
import { Onboarding12men, Onboarding15men } from '../../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording15 = () => {
    return (
        <SafeFlexView>
            <View style={styles.container}>
                <View style={styles.innerContiner}>
                    <SvgXml xml={Onboarding15men} width={moderateScale(288)} height={moderateScale(296)} />
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

export default Onbording15;