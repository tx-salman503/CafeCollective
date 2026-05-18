import { View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { SafeFlexView } from '../../../components';
import NativeHeader from '../../../components/AppHeaders/NativeHeader';
import { images } from '../../../assets/images';
import { SvgXml } from 'react-native-svg';
import NativeText from '../../../components/AppTexts/NativeText';
import combineStyle from '../../../libs/combineStyle';
import { styles } from './style';
import {
  whiteSettingSvg,
} from '../../../assets/Svgs';
import { moderateScale } from 'react-native-size-matters';
import { INVITATIONS, STATS } from '../../../utils/export';
import { Routes } from '../../../navigation/Routes';





const Separator = () => <View style={styles.separator} />;

const ProfileScreen = ({navigation}) => {

  const handleManageInvites = () => {navigation.navigate(Routes.MyInvitations)};
  const handleStatPress = (item) => {};


  const renderStat = ({ item }) => (
    <TouchableOpacity
      style={styles.statRow}
      onPress={() => handleStatPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.rowLeft}>
        <SvgXml xml={item.icon} width={moderateScale(22)} height={moderateScale(22)} />
        <NativeText value={item.label} style={[styles.rowLabel,item.label==="Invitations Pending"&&{color:"#FF4646"}]} />
      </View>
      <NativeText value={String(item.value)} style={[styles.rowValue,[item.label==="Invitations Pending"&&{color:"#FF4646"}]]} />
    </TouchableOpacity>
  );


  return (
    <SafeFlexView>
      <NativeHeader title={'My Profile'} />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

        {/* Profile Image & Name */}
        <View style={styles.imgContainer}>
          <View style={styles.profileContainer}>
            <Image source={images.Avtar} style={styles.img} />
          </View>
          <View style={styles.nameContainer}>
            <NativeText value={'Alex Rivera'} style={combineStyle.text24Bold} />
            <NativeText value={'@coffeelover_99'} style={combineStyle.text16Mid} />
          </View>
        </View>


        <View style={styles.card}>
          <NativeText value={'My  Overall Stats'} style={styles.sectionTitle} />
          <View style={styles.separator} />
          <FlatList
            data={STATS}
            keyExtractor={(item) => item.id}
            renderItem={renderStat}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.cardContent}
            scrollEnabled={false}
          />
        </View>

  
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <NativeText value={'My Invitations'} style={styles.sectionTitle} />
            <TouchableOpacity
              style={styles.manageBtn}
              onPress={handleManageInvites}
              activeOpacity={0.7}
            >
              <SvgXml xml={whiteSettingSvg} width={moderateScale(14)} height={moderateScale(14)} />
              <NativeText value={'Manage Invites'} style={styles.manageBtnText} />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <FlatList
            data={INVITATIONS}
            keyExtractor={(item) => item.id}
            renderItem={renderStat}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.cardContent}
            scrollEnabled={false}
          />
        </View>

      </ScrollView>
    </SafeFlexView>
  );
};

export default ProfileScreen;