import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';
import NativeText from '../AppTexts/NativeText';
import combineStyle from '../../libs/combineStyle';
import { GoldenStar, speaker, switchBoard, wifiIcon } from '../../assets/Svgs';
import { Theme } from '../../libs';



const CardItem = ({ item, onPress }) => (
    <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => onPress?.(item)}
        style={styles.card}
    >
        {/* Thumbnail */}
        <Image source={item.image} style={styles.thumbnail} />
        <View style={styles.info}>

            {/* Title + Rating */}
            <View style={styles.titleRow}>
                <NativeText
                    value={item.title}
                    style={[combineStyle.text18Bold, styles.title]}
                    numberOfLines={1}
                />
                <View style={styles.ratingRow}>
                    <NativeText
                        value={String(item.rating)}
                        style={[combineStyle.text12Regular, styles.ratingText]}
                    />
                    <SvgXml xml={GoldenStar} width={moderateScale(14)} height={moderateScale(14)} />
                </View>
            </View>

            {/* Subtitle */}
            <NativeText
                value={item.subtitle}
                style={[combineStyle.text12Regular, styles.subtitle]}
                numberOfLines={1}
            />
            <View style={[combineStyle.rowStyle, { justifyContent: "space-between" }]}>
                <View style={styles.badge}>
                    <SvgXml xml={wifiIcon} width={moderateScale(14)} height={moderateScale(14)} />
                    <NativeText value={item.wifi} style={combineStyle.text10Bold} />
                </View>
                <View style={styles.badge}>
                    <SvgXml xml={switchBoard} width={moderateScale(14)} height={moderateScale(14)} />
                    <NativeText value={item.switch} style={combineStyle.text10Bold} />
                </View>
                <View style={styles.badge}>
                    <SvgXml xml={speaker} width={moderateScale(14)} height={moderateScale(14)} />
                    <NativeText value={item.speaker} style={combineStyle.text10Bold} />
                </View>
            </View>



        </View>

    </TouchableOpacity>
);

const CafeCard = ({ data = [], onPress, containerStyle }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.listContent, containerStyle]}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
            renderItem={({ item }) => (
                <CardItem item={item} onPress={onPress} />
            )}
        />
    );
};

export default CafeCard;

/* ─── Styles ───────────────────────────────────────────────────── */
const styles = StyleSheet.create({
    listContent: {
paddingBottom:moderateScale(20)
    },

    cardSeparator: {
        height: moderateScale(12),
    },

    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(16),
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
        padding: moderateScale(16),
        gap: moderateScale(12),
    },

    thumbnail: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: moderateScale(12),
        resizeMode: 'cover',
    },

    info: {
        flex: 1,
        gap: moderateScale(8),
        justifyContent: 'center',
    },

    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        color: '#FFFFFF',
        flex: 1,
        marginRight: moderateScale(8),
    },

    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(4),
    },

    ratingText: {
        color: '#FFFFFF',
    },

    subtitle: {
        color: 'rgba(255,255,255,0.5)',
        // marginTop: moderateScale(2),
    },

    tagsRow: {
        marginTop: moderateScale(8),
    },

    tagSeparator: {
        width: moderateScale(6),
    },

    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(5),
        paddingVertical: moderateScale(5),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(20),
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'transparent',
    },

    tagText: {
        color: '#FFFFFF',
    },
    badge: {
        borderWidth: 1,
        paddingVertical: moderateScale(4),
        paddingHorizontal: moderateScale(8),
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(4),
        ...combineStyle.rowStyle,
        gap: moderateScale(4)
    }
});