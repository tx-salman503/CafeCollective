import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording8 = () => {
    return (
        <SafeFlexView>
           <View style={styles.container}>
           <MessageCard
                    text="Today your café discovery journey begins." />
           </View>
           <View style={styles.imgcontainer}>
<Image source={images.Onboarding8men} style={styles.img}/>
           </View>
        </SafeFlexView>
    );
};

export default Onbording8;