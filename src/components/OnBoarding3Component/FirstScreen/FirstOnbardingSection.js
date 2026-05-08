import { View } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import MessageCard from '../../MessageCard/MessageCard';
import { moderateScale } from 'react-native-size-matters';
import { SvgXml } from 'react-native-svg';
import { map } from '../../../assets/Svgs';

const FirstOnboarding = ({ onNext = () => {} }) => {
    return (
        <SafeFlexView>
            <View style={styles.container}>
                <SvgXml xml={map} width={moderateScale(325)} height={moderateScale(302)} />
                <MessageCard
                    text="As you explore cafés, you'll unlock more areas of the city.The more you explore, the more the map reveals"
                />
                 <MessageCard
                    text="I am ready"
                    containerStyle={styles.img}
                    firstWrapStyle={styles.imgcontainer}
                    secondWrapStyle={styles.imgcontainer}
                    touchable={true}
                    onPress={onNext}
                />
            </View>
        </SafeFlexView>
    );
};

export default FirstOnboarding;