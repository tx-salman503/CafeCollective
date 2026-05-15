import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Theme } from '../../libs';
import { moderateScale } from 'react-native-size-matters';

import { SvgXml } from 'react-native-svg';
import { NotificationSvg, smallsearchIcon, whiteBack } from '../../assets/Svgs';
import { useNavigation } from '@react-navigation/native';
import NativeInput from '../NativeInput/NativeInput';


function SearchHeader({ onNotificationPress }) {
    const navigation = useNavigation();
    const [searchText, setSearchText] = React.useState('');
    return (
        <View style={styles.headerContainer}>
            <Pressable onPress={() => navigation.goBack()} style={styles.notifcation}>
                <SvgXml xml={whiteBack} width={moderateScale(22)} height={moderateScale(22)} />
            </Pressable>
            <NativeInput
                inputContainerStyle={styles.serach}
                placeholderTextColor={Theme.colors.white}
                placeholder={'Find productive workspaces'}
                value={searchText}
                onChangeText={setSearchText}
                ContainerStyle={{ width: '87%' }}
                leftComponent={
                    <SvgXml
                        xml={smallsearchIcon}
                        width={moderateScale(24)}
                        height={moderateScale(20)}
                    />
                }
            />
        </View>
    );
}

export default SearchHeader;
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        paddingTop: moderateScale(15),
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
        


    },
    serach: {
        width: '100%',
        borderRadius: moderateScale(40000),
        height: moderateScale(48),
    },
    notifcation: {
       justifyContent: 'center',
       marginBottom: moderateScale(8),
       marginLeft: moderateScale(5)
    }
});