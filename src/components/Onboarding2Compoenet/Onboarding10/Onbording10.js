import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import MessageCard from '../../MessageCard/MessageCard';

const Onbording10 = () => {
    return (
        <SafeFlexView>
           <View style={styles.container}>
            <Image source={images.Onboarding10men} style={styles.img}/>
           </View>
           <MessageCard
                    text="Visit cafés and leave honest, helpful reviews." 
                    containerStyle={styles.imgcontainer}
                    textStyle={styles.txt}/>
        </SafeFlexView>
    );
};

export default Onbording10;