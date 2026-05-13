import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';
import { Theme } from '../../libs';
import { DoneSvg } from '../../assets/Svgs';
import MessageCard from '../MessageCard/MessageCard';
import { Routes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';

/* ─── Close Icon ───────────────────────────────────────────────── */
const CloseSvg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 5L5 15M5 5L15 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

/* ─── Component ────────────────────────────────────────────────── */
const AmazingWorkModal = ({
  visible = false,
  onClose,
  onShare,
  onContinue,
  title = 'Amazing Work',
  badgeText = '+100 Beans Earned & your First Invite Unlocked',
  description = 'You just helped hundreds of café lovers find their perfect spot!',
  rewardText = '3 new cafes revealed on your map',
  shareLabel = 'Share my Achievement',
  continueLabel = 'Continue',
}) => {

  const navigation=useNavigation(Routes.AllSetScreen)
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      {/* Dim overlay */}
      <Pressable style={styles.overlay} onPress={onClose}>

        {/* Card wrapper — handles border + rounded clipping */}
        <Pressable onPress={(e) => e.stopPropagation()} style={styles.cardWrapper}>
          <LinearGradient
            colors={['#273F6C', '#192135']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.card}
          >
            {/* Close button */}
            <TouchableOpacity style={styles.closeBtn} onPress={onClose} activeOpacity={0.7}>
              <SvgXml xml={CloseSvg} width={moderateScale(18)} height={moderateScale(18)} />
            </TouchableOpacity>

            {/* Done icon */}
            <View style={styles.iconWrapper}>
              <SvgXml xml={DoneSvg} width={moderateScale(124)} height={moderateScale(124)} />
            </View>

            {/* Title */}
            <NativeText
              value={title}
              style={[combineStyle.text28Bold, styles.title]}
            />

            {/* Badge pill */}
            <View style={styles.badgePill}>
              <NativeText
                value={badgeText}
                style={[combineStyle.text16Semi, styles.badgeText]}
              />
            </View>

            {/* Description */}
            <NativeText
              value={description}
              style={[combineStyle.text16Mid, styles.description]}
            />

            {/* Reward line */}
            <NativeText
              value={rewardText}
              style={[combineStyle.text18mid, styles.rewardText]}
            />

            <MessageCard
              text="Share my Achievement"
              isBtn={true}
              touchable={true}
              onPress={onShare}
            />

            {/* Continue text link */}
            <TouchableOpacity activeOpacity={0.7} onPress={onContinue}>
              <NativeText
                value={continueLabel}
                style={[combineStyle.text16Bold, styles.continueText]}
              />
            </TouchableOpacity>

          </LinearGradient>
        </Pressable>

      </Pressable>
    </Modal>
  );
};

export default AmazingWorkModal;

/* ─── Styles ───────────────────────────────────────────────────── */
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.99)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },

  // Outer wrapper — owns the border + borderRadius + overflow clip
  cardWrapper: {
    width: '100%',
    borderRadius: moderateScale(24),
    borderWidth: 1.5,
    borderColor: Theme.colors.lightTransparet,
    overflow: 'hidden', // clips LinearGradient to rounded corners
  },

  // LinearGradient fills the wrapper, owns padding & layout
  card: {
    width: '100%',
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(48),
    paddingBottom: moderateScale(32),
    alignItems: 'center',
    gap: moderateScale(14),
  },

  closeBtn: {
    position: 'absolute',
    top: moderateScale(16),
    right: moderateScale(16),
    padding: moderateScale(4),
  },

  iconWrapper: {
    marginBottom: moderateScale(4),
  },

  title: {
    color: Theme.colors.white,
    textAlign: 'center',
  },

  badgePill: {
    backgroundColor: Theme.colors.lightTransparet,
    borderWidth: 1,
    borderColor: Theme.colors.lightTransparet,
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
  },
  badgeText: {
    color: Theme.colors.white,
    textAlign: 'center',
    lineHeight: moderateScale(20),
  },

  description: {
    color: 'rgba(255,255,255,0.65)',
    textAlign: 'center',
    lineHeight: moderateScale(22),
  },

  rewardText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: moderateScale(30),
    marginTop: moderateScale(10),
  },

  continueText: {
    color: Theme.colors.white,
    textAlign: 'center',
    marginTop: moderateScale(4),
  },
});