import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import NativeText from "../AppTexts/NativeText";
import { SvgXml } from "react-native-svg";
import { styles } from "./style";

const CustomModal = ({
  visible,
  onClose,
  SvgIcon,
  title,
  subtitle,
  buttonTitle,
  onButtonPress,
}) => {
  if (!visible) return null; // Early return to prevent rendering issues

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade" // Changed from slide to fade for better consistency
      onRequestClose={onClose}
      statusBarTranslucent
      hardwareAccelerated={true} // Add hardware acceleration
    >
      <View style={styles.overlay}>
        <View
          style={styles.blurContainer}
          
        >
          <TouchableOpacity 
            style={styles.backdropTouchable} 
            activeOpacity={1}
            onPress={onClose}
          >
            <View style={styles.modalContainer} onStartShouldSetResponder={() => true}>
                {SvgIcon && (
                <View style={styles.iconContainer}>
                  <SvgXml
                    xml={SvgIcon}
                    width={moderateScale(60)}
                    height={moderateScale(60)}
                  />
                </View>
              )}
              <NativeText style={styles.title}>{title}</NativeText>
              <NativeText style={styles.subtitle}>{subtitle}</NativeText>
              <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <NativeText style={styles.buttonNativeText}>
                  {buttonTitle}
                </NativeText>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

