import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';

const Onbording3 = () => {
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
value={"Overpay for\nmediocre coffee at a\nchain cafe, just to get\na normal seat."}
style={[combineStyle.text24Semi,styles.txtarea]}
/>
        </View>
        
      </View>
    </SafeFlexView>
  );
};

export default Onbording3;