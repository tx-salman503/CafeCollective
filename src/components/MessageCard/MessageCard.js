import React from "react";
import { View } from "react-native";
import NativeText from "../AppTexts/NativeText";
import combineStyle from "../../libs/combineStyle";
import { styles } from "./style";

const MessageCard = ({
  text = "Today your café discovery journey begins.",
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>

      {/* Dark offset shadow layer */}
      <View style={styles.shadowLayer}>
        <View style={styles.card}>
          <NativeText
            value={text}
            style={[combineStyle.text20Semi, styles.titleText, textStyle]}
          />
        </View>

      </View>
    </View>
  );
};

export default MessageCard;