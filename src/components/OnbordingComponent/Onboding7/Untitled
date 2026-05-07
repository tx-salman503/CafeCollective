import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';

const Onbording2 = () => {
  return (
    <SafeFlexView>
      <View style={styles.container}>
        <Image
          source={images.Onboarding2img}
          style={styles.characterImg}
        />
        <View style={styles.mcgBox}> 
<Image
        source={images.MessegBox1}
          style={styles.messagebox}
          />
        </View>
        <View style={styles.txtBox}>
<NativeText value={"Your options right now?"} style={[combineStyle.text24Mid,styles.txtarea]}/>
        </View>
        
      </View>
    </SafeFlexView>
  );
};

export default Onbording2;