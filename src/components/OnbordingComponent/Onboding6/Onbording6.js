import { View, Image } from 'react-native';
import React from 'react';

import { styles } from './style';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { images } from '../../../assets/images';
import combineStyle from '../../../libs/combineStyle';
import NativeText from '../../AppTexts/NativeText';


const Onbording6 = () => {
  return (
    <SafeFlexView>
      <View style={styles.imgcontainer}>
        <Image
          source={images.Onboarding6img}
          style={styles.img}
          
        />
      </View>
      <View style={styles.txtContainer}>
<Image source={images.Onboarding6build} style={styles.chracter}/>
<View style={styles.txtBox}>
<Image source={images.MessegBox4} style={styles.messegBox}/>
<View style={styles.txt}>
  <NativeText value={"We have some of the best Cafés in the world, and it’s time to make them easy to find."} style={[combineStyle.text18Semi,styles.sutext]}/>
</View>
</View>
      </View>
   
    </SafeFlexView>
  );
};

export default Onbording6;