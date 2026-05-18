import { View, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { NativeInput, SafeFlexView } from '../../../components';
import NativeHeader from '../../../components/AppHeaders/NativeHeader';
import { SvgXml } from 'react-native-svg';
import NativeText from '../../../components/AppTexts/NativeText';
import { styles } from './style';
import { InvitationUnlockedSvg, InvitationAvailableSvg, invitFriendSvg, CopySvg, ShearSvg } from '../../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import combineStyle from '../../../libs/combineStyle';
import Share from 'react-native-share';
import { shareOptions } from '../../../utils/export';


const STATS = [
  { id: '1', label: 'Invitation Unlocked', value: 7, icon: InvitationUnlockedSvg },
  { id: '2', label: 'Invitations Available', value: 2, icon: InvitationAvailableSvg },
];

const PENDING = [
  { id: '1', name: 'Marcus Smith', initials: 'MS', sentTime: 'Sent 2 days ago' },
  { id: '2', name: 'Marker Callum', initials: 'MC', sentTime: 'Sent 1 day ago' },
];

const ACCEPTED = [
  { id: '1', name: 'Aisha Patel', initials: 'AP', sentTime: 'Sent 2 days ago' },
  { id: '2', name: 'Adil Rehman', initials: 'AR', sentTime: 'Sent 1 day ago' },
  { id: '3', name: 'Marcus Chen', initials: 'MC', sentTime: 'Sent 12:18 AM' },
];

const Separator = () => <View style={styles.separator} />;

const MyInvitations = () => {


const handleShare = async () => {
  try {
    const res = await Share.open(shareOptions);
    console.log(res);
  } catch (err) {
    console.log('Share cancelled or error:', err);
  }
};

  const handleResend = (item) => { };


  const renderStat = ({ item }) => (
    <TouchableOpacity style={styles.statRow} activeOpacity={0.7}>
      <View style={styles.rowLeft}>
        <SvgXml xml={item.icon} width={moderateScale(22)} height={moderateScale(22)} />
        <NativeText value={item.label} style={styles.rowLabel} />
      </View>
      <NativeText value={String(item.value)} style={styles.rowValue} />
    </TouchableOpacity>
  );


  const renderPending = ({ item }) => (
    <View style={styles.personRow}>
      <View style={styles.avatar}>
        <NativeText value={item.initials} style={styles.avatarText} />
      </View>
      <View style={styles.personInfo}>
        <NativeText value={item.name} style={styles.personName} />
        <NativeText value={item.sentTime} style={styles.personTime} />
      </View>
      <TouchableOpacity
        style={styles.resendBtn}
        onPress={() => handleResend(item)}
        activeOpacity={0.7}
      >
        <NativeText value={'Resend Invite'} style={styles.resendBtnText} />
      </TouchableOpacity>
    </View>
  );


  const renderAccepted = ({ item }) => (
    <View style={styles.personRow}>
      <View style={styles.avatar}>
        <NativeText value={item.initials} style={styles.avatarText} />
      </View>
      <View style={styles.personInfo}>
        <NativeText value={item.name} style={styles.personName} />
        <NativeText value={item.sentTime} style={styles.personTime} />
      </View>
      <NativeText value={'Accepted'} style={styles.acceptedText} />
    </View>
  );

  return (
    <SafeFlexView>
      <NativeHeader title={'My Invitations'} back />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >

        {/* Invitations Stats */}
        <NativeText value={'Invitations Stats'} style={styles.sectionTitle} />
        <View style={styles.card}>
          <FlatList
            data={STATS}
            keyExtractor={(item) => item.id}
            renderItem={renderStat}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.cardContent}
            scrollEnabled={false}
          />
        </View>

        {/* Invitations Pending */}
        <NativeText value={'Invitations Pending'} style={styles.sectionTitle} />
        <View style={styles.card}>
          <FlatList
            data={PENDING}
            keyExtractor={(item) => item.id}
            renderItem={renderPending}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.cardContent}
            scrollEnabled={false}
          />
        </View>

        {/* Invitations Accepted */}
        <NativeText value={'Invitations Accepted'} style={styles.sectionTitle} />
        <View style={styles.card}>
          <FlatList
            data={ACCEPTED}
            keyExtractor={(item) => item.id}
            renderItem={renderAccepted}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.cardContent}
            scrollEnabled={false}
          />
        </View>


        <View style={styles.InvitFrindsContainer}>
          <View style={[combineStyle.rowStyle, { gap: moderateScale(10) }]}>
            <SvgXml xml={invitFriendSvg} width={moderateScale(24)} height={moderateScale(24)} />
            <NativeText value={"Invite  a Friend"} style={combineStyle.text18Bold} />
          </View>
          <NativeText value={"Invite friends and earn 50 beans for every successful sign-up."} style={combineStyle.text12Mid} />
          <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
            <NativeInput
              value={"COFFEE-XP-2026"}
              editable={false}
              rightComponent={<TouchableOpacity activeOpacity={0.7}>
                <SvgXml xml={CopySvg} width={moderateScale(18)} height={moderateScale(18)} />
              </TouchableOpacity>
              }
              ContainerStyle={{ width: "80%", }}
              inputStyle={combineStyle.text16Bold}
              inputContainerStyle={{ height: moderateScale(40) }}
            />
            <Pressable style={styles.shearContainer} onPress={handleShare}>
              <SvgXml xml={ShearSvg} width={moderateScale(24)} height={moderateScale(24)} />
            </Pressable>



          </View>
        </View>

      </ScrollView>
    </SafeFlexView>
  );
};

export default MyInvitations;