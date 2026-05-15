import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import MessageCard from '../../MessageCard/MessageCard';
import combineStyle from '../../../libs/combineStyle';


const Onbording20 = ({ onStoreExplorerPress = () => {} }) => {
    return (
        <SafeFlexView>
            <View style={styles.container}>
                <Image source={images.LastMen} style={styles.img} />
         
            <MessageCard
                    text="Start Exploring"
                    containerStyle={styles.buttonConatiner}
                    firstWrapStyle={styles.buttonConatiner2}
                    touchable={true}
                    onPress={onStoreExplorerPress}
                    textStyle={[combineStyle.text20Bold,{color:"black"}]}
                    />
                     </View>  
        </SafeFlexView>
    );
};

export default Onbording20;