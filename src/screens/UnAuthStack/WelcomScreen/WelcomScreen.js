import { Image, View } from 'react-native'
import React from 'react'
import { MessageCard, SafeFlexView } from '../../../components'
import { styles } from './style'
import NativeText from '../../../components/AppTexts/NativeText'
import combineStyle from '../../../libs/combineStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScale } from 'react-native-size-matters'
import { images } from '../../../assets/images';
import { map } from '../../../assets/Svgs';
import { SvgXml } from 'react-native-svg';
import { Routes } from '../../../navigation/Routes';



const WelcomScreen = ({navigation}) => {








  return (
    <SafeFlexView>
      <KeyboardAwareScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
      >
        <NativeText value={"Welcome to Toronto,\nExplorer!"} style={[combineStyle.text32Bold, { textAlign: "center" }]} />

        <View style={styles.imgcontainer}>
          <Image source={images.FogMap} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={styles.innerContainer}>
          <NativeText value={"Your cafe adventure begins here. You can see a few cafes nearby... but there's so much more hidden in the fog. Complete your first discovery to unlock new areas!"} style={combineStyle.text16Mid} />
          <View style={styles.badg}>
            <NativeText value={"Guide Tip:"} style={combineStyle.text14Mid} />
            <NativeText value={"Review a cafe you've visited to start unveiling the map!"} style={combineStyle.text14Regular} />
          </View>

          <MessageCard
            text='Start My First Discovery'
            isBtn={true}
            touchable={true}
            onPress={()=>{navigation.navigate(Routes.CafeSearchScreen)}}
            containerStyle={styles.btnContainer}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeFlexView>
  )
}

export default WelcomScreen