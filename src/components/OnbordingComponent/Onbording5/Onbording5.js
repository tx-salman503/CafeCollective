import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../../assets/images';
import NativeText from '../../AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';

const Onbording5 = () => {
  return (
    <SafeFlexView>
      <View style={styles.container}>
        <Image
          source={images.Onboarding5img}
          style={styles.characterImg}
        />
        <View style={styles.mcgBox}> 
<Image
        source={images.MessegBox3}
          style={styles.messagebox}
          />
        </View>
        <View style={styles.txtBox}>
<NativeText value={"We don’t think it should be like this…"} style={[combineStyle.text20Semi,styles.txtarea]}/>
        </View>
        
      </View>
    </SafeFlexView>
  );
};

export default Onbording5;