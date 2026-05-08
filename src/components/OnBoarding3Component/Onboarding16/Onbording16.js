import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import MessageCard from '../../MessageCard/MessageCard';
import { moderateScale } from 'react-native-size-matters';

const Onbording16 = () => {
    return (
        <SafeFlexView>
           <View style={styles.container}>
           <MessageCard
                    text="See how you stack up against other café explorers across the city."
                   />
           </View>
           <View style={styles.imgcontainer}>
<Image source={images.LastMen} style={styles.img}/>
           </View>
        </SafeFlexView>
    );
};

export default Onbording16;