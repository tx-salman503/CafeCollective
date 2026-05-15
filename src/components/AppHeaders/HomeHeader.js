import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';
import { Theme } from '../../libs';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../AppTexts/NativeText';
import { SvgXml } from 'react-native-svg';
import {  NotificationSvg, smallsearchIcon } from '../../assets/Svgs';
import { useNavigation } from '@react-navigation/native';
import NativeInput from '../NativeInput/NativeInput';


function HomeHeader({ onNotificationPress }) {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState('');
  return (
    <View style={styles.headerContainer}>
      <NativeInput
    inputContainerStyle={styles.serach}
    placeholderTextColor={Theme.colors.white}
        placeholder={'Find productive workspaces'}
        value={searchText}
        onChangeText={setSearchText}
        ContainerStyle={{ width: '83%' }}
        leftComponent={
          <SvgXml
            xml={smallsearchIcon}
          width={moderateScale(24)}
            height={moderateScale(20)}
            />
          }
      />

<Pressable  onPress={onNotificationPress}>
    <SvgXml xml={NotificationSvg} width={moderateScale(50)} height={moderateScale(50)} />
</Pressable>

    </View>
  );
}

export default HomeHeader;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingTop: moderateScale(15),
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),

  },
 serach:{
  width: '100%',
  borderRadius:moderateScale(40000),
  height:moderateScale(48),
 },
 notifcation:{
  width: moderateScale(50),
  height: moderateScale(50),
  borderRadius: moderateScale(20),
  // backgroundColor:"red",
  alignSelf:"center"
 }
});