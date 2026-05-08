import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import MessageCard from '../../MessageCard/MessageCard';
import { moderateScale } from 'react-native-size-matters';

const Onbording19 = () => {
    return (
        <SafeFlexView>
           <View style={styles.container}>
           <MessageCard
                    text={"Let’s start\ndiscovering."}
                    textStyle={{fontSize:moderateScale(24),lineHeight:moderateScale(30)}}
                    />
                   
           </View>
       
        </SafeFlexView>
    );
};

export default Onbording19;