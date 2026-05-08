import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
// import your back icon svg
import {  backBlack } from "../../assets/Svgs";  

function BackHeader({ onBack,marginleft ,margintop}) {
  return (
    <View style={{ padding: 10, flexDirection: "row", alignItems: "center" ,marginLeft:marginleft,marginTop:margintop}}>
      <TouchableOpacity onPress={onBack}>
        <SvgXml xml={backBlack} width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
}

export default BackHeader;
