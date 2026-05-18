import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";
import combineStyle from "../../../libs/combineStyle";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: moderateScale(15),
        paddingHorizontal: moderateScale(15),
        gap: moderateScale(12),
        paddingBottom: moderateScale(10),
    },

    // ── Image Gallery ─────────────────────────────────────────
    galleryList: {
        gap: moderateScale(8),
    },
    galleryImg: {
        width: moderateScale(220),
        height: moderateScale(160),
        borderRadius: moderateScale(16),
        resizeMode: "cover",
    },
    galleryImgFirst: {
        width: moderateScale(260),
    },

    // ── Section Header ────────────────────────────────────────
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: moderateScale(14),
        paddingHorizontal: moderateScale(3)
    },
    sectionTitle: {
        ...combineStyle.text20Bold,
        paddingHorizontal:moderateScale(4)
    },

    cardContent: {
        padding: moderateScale(16),
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(16)
    },


    scoreList: {
        gap: moderateScale(8),
    },
    scoreCard: {
        paddingVertical: moderateScale(16),
        paddingHorizontal: moderateScale(18),
        borderWidth: 1,
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(24),
        gap: moderateScale(4),
    },
    scoreCardTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: moderateScale(6),
    },
    scoreCardLabel: {
        ...combineStyle.text12Mid,
    },
    scoreCardValue: {
        ...combineStyle.text20Bold,
        color: Theme.colors.white,
    },
    stars: {
        fontSize: moderateScale(10),
        color: Theme.colors.white,
        letterSpacing: 1,
    },

    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: moderateScale(12),
    },
    infoRowLast: {
        borderBottomWidth: 0,
    },
    rowLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: moderateScale(10),
        flex: 1,
    },
    rowLabel: {
        ...combineStyle.text14Regular,
        color: Theme.colors.white,
        flex: 1,
    },
    rowValue: {
        ...combineStyle.text20Bold,
        color: Theme.colors.white,
        textAlign: "right",
    },

    // ── Pill value ────────────────────────────────────────────
    pill: {
        backgroundColor: Theme.colors.secondary,
        borderRadius: moderateScale(100),
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(5),
    },
    pillText: {
        ...combineStyle.text14Bold,
        color: Theme.colors.white,
    },

    // ── Vibe tags ─────────────────────────────────────────────
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        paddingBottom: moderateScale(10),
    },
    tag: {
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.white,
        borderRadius: moderateScale(100),
        paddingHorizontal: moderateScale(14),
        paddingVertical: moderateScale(6),
        backgroundColor: Theme.colors.lightTransparet
    },
    tagText: {
        ...combineStyle.text14Regular,
        color: Theme.colors.white,
    },

    // ── Secret Tip ────────────────────────────────────────────
    secretTip: {
        backgroundColor: Theme.colors.black ?? "#000",
        borderRadius: moderateScale(12),
        marginHorizontal: moderateScale(12),
        marginBottom: moderateScale(12),
        padding: moderateScale(14),
        gap: moderateScale(6),
    },
    secretTipLabel: {
        ...combineStyle.text14Semi,
        color: Theme.colors.lightGray,
    },
    secretTipText: {
        ...combineStyle.text14Mid,
        color: Theme.colors.white,
        lineHeight: moderateScale(20),
    },

    bottomBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(12),
        paddingBottom: moderateScale(24),
    },

    // Check-in button (white pill, takes remaining space)
    checkInBtn: {
        flex: 1,
        backgroundColor: Theme.colors.white,
        borderRadius: moderateScale(100),
        paddingVertical: moderateScale(16),
        alignItems: "center",
        justifyContent: "center",
    },
    checkInText: {
        ...combineStyle.text16Mid,
        color: Theme.colors.black ?? "#000",
    },

    // Small edit icon button
    editIconBtn: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(100),
        backgroundColor: Theme.colors.white,
        alignItems: "center",
        justifyContent: "center",
    },

    // Full-width Edit your Discovery button
    editDiscoveryBtn: {
        flex: 1,
        backgroundColor: Theme.colors.white,
        borderRadius: moderateScale(100),
        paddingVertical: moderateScale(16),
        alignItems: "center",
        justifyContent: "center",
    },
    editDiscoveryText: {
        ...combineStyle.text16Mid,
        color: Theme.colors.black ?? "#000",
    },
    pillContaier: {
        borderWidth: 1,
        borderColor: Theme.colors.lightTransparet,
        backgroundColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(15),
        justifyContent: "center",
        alignItems: "centers"
    }
});