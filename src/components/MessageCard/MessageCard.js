import React from "react";
import { View, TouchableOpacity } from "react-native";
import NativeText from "../AppTexts/NativeText";
import combineStyle from "../../libs/combineStyle";
import { styles } from "./style";

const MessageCard = ({
  text = "Today your café discovery journey begins.",
  containerStyle,
  firstWrapStyle,
  secondWrapStyle,
  textStyle,
  touchable = false,
  isBtn=false,
  onPress = () => {},
}) => {

  const Content = (
    <View style={[styles.wrapper, containerStyle]}>
      
      {/* Dark offset shadow layer */}
      <View style={[styles.shadowLayer,firstWrapStyle,textStyle,isBtn&& styles.border]}>
        <View style={[styles.card,firstWrapStyle,isBtn&& styles.border]}>
          <NativeText
            value={text}
            style={[combineStyle.text20Semi, styles.titleText, textStyle,isBtn&& styles.btn]}
          />
        </View>
      </View>

    </View>
  );

  if (touchable) {
    return (
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[{ width: "100%", alignItems: "center" }, containerStyle]}
    >
        {Content}
      </TouchableOpacity>
    );
  }

  return Content;
};

export default MessageCard;