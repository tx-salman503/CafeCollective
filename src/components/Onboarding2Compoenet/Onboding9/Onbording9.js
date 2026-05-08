import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording9 = () => {
    return (
        <SafeFlexView>
           <View style={styles.container}>
           <MessageCard
                    text="Explore new cafés, discover hidden gems, and help fellow explorers find the best spots in the city" />
           </View>
           <View style={styles.imgcontainer}>
<Image source={images.Onboarding9men} style={styles.img}/>
           </View>
        </SafeFlexView>
    );
};

export default Onbording9;