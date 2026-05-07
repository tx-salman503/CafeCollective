import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';

const Onbording4 = () => {
  return (
    <SafeFlexView>
      <View style={styles.container}>
        <Image
          source={images.Onboarding3img}
          style={styles.characterImg}
        />
        <View style={styles.mcgBox}> 
<Image
        source={images.MessegBox2}
          style={styles.messagebox}
          />
        </View>
        <View style={styles.txtBox}>
<NativeText
value={"Or spend 20 minutes\ndigging through Google reviews, only to show up and find\nnowhere to sit."}
style={[combineStyle.text24Semi,styles.txtarea]}
/>
        </View>
        
      </View>
    </SafeFlexView>
  );
};

export default Onbording4;