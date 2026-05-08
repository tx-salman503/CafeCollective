import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import { SvgXml } from 'react-native-svg';
import { Onboarding12men } from '../../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording12 = () => {
    return (
        <SafeFlexView>
            <View style={styles.container}>
                <View style={styles.innerContiner}>
                    <SvgXml xml={Onboarding12men} width={moderateScale(288)} height={moderateScale(180)} />
                   <View style={styles.mcgBox}>
                   <MessageCard
                        text="Every review earns you beans. Beans are your reward for helping the community discover great cafés."
                       
                    />
                   </View>
                </View>
            </View>
        </SafeFlexView>
    );
};

export default Onbording12;