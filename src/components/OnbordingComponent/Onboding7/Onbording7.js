import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording7 = () => {
    return (
        <SafeFlexView>
           <View style={styles.container}>
           <MessageCard
                    text="With your help, we are going to solve Cafe discovery. " />
           </View>
           <View style={styles.imgcontainer}>
<Image source={images.Onboarding7men} style={styles.img}/>
           </View>
        </SafeFlexView>
    );
};

export default Onbording7;