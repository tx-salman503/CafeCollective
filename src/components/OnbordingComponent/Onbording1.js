import { View, Image } from 'react-native';
import React from 'react';
import SafeFlexView from '../SafeFlexView/SafeFlexView';
import { styles } from './style';
import { images } from '../../assets/images';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';

const Onbording1 = () => {
  return (
    <SafeFlexView>
      <View style={styles.imgcontainer}>
        <Image
          source={images.onbording1img}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.txtContainer}>
<View style={styles.badge}>
    <NativeText value={"1000+ Cafés in Toronto."} style={combineStyle.text18Semi}/>
</View>
<NativeText value={"But somehow, the experience of finding a café still sucks."} style={[combineStyle.text24Mid,styles.subtxt]}/>
      </View>
    </SafeFlexView>
  );
};

export default Onbording1;