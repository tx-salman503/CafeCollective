import React from 'react'
import { NativeInput, SafeFlexView } from '../../../components'
import NativeHeader from '../../../components/AppHeaders/NativeHeader'
import { SvgXml } from 'react-native-svg'
import { search } from '../../../assets/Svgs'
import { styles } from './style'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import NativeText from '../../../components/AppTexts/NativeText'
import { chatGroups } from '../../../utils/export'
import { Routes } from '../../../navigation/Routes'
import { useTranslation } from 'react-i18next'

const Chats = ({ navigation }) => {
  const { t } = useTranslation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatGroupContainer} activeOpacity={0.8} onPress={() => navigation.navigate(Routes.ChatScreen, { item })}>
      <Image source={item.img} style={styles.chatGroupImage} />
      <View style={styles.chatGroupInfo}>
        <NativeText value={item.name} style={styles.chatGroupName} />
        <NativeText value={item.lastMessage} style={styles.chatGroupLastMessage} />
      </View>
      <View style={styles.chatGroupUnreadMessages}>
        <NativeText value={item.unreadMessages} style={styles.chatGroupUnreadMessagesText} />
      </View>
      
      </TouchableOpacity>
    )
  return (
    <SafeFlexView  top={false}>
    <NativeHeader title={t('Chats.title')} />
    <View style={styles.main}>
    <NativeInput
    placeholder={t('Chats.searchPlaceholder')}
    onChangeText={() => {}}
    leftComponent={<SvgXml xml={search} width={20} height={20} />}
    />
    <NativeText
    style={styles.mcg}
    value={t('Chats.stayConnected')}
    />
    <NativeText
    style={styles.mcg}
    value={t('Chats.messagesLabel')}
    />
    <FlatList
    data={chatGroups}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
    showsVerticalScrollIndicator={false}
    />
    </View>
   </SafeFlexView>
  )
}

export default Chats