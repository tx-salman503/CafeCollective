import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Theme } from "../../../libs";
import combineStyle from "../../../libs/combineStyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        paddingHorizontal: moderateScale(15),
        paddingBottom: moderateScale(78),
        flexGrow: 1,
    },

    imgContainer: {
        alignItems: "center",
        gap: moderateScale(10),
        paddingTop: moderateScale(20),
        marginBottom: moderateScale(24),
    },
    profileContainer: {
        width: moderateScale(124),
        height: moderateScale(124),
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.white,
        borderRadius: moderateScale(131),
        overflow: "hidden",
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    nameContainer: {
        alignItems: "center",
        gap: 4,
    },

    // ── Card ─────────────────────────────────────────────────
    card: {
        gap: moderateScale(12),
        marginBottom: moderateScale(20),
    },
    cardContent: {
        backgroundColor: Theme.colors.lightTransparet,
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.lightTransparet,
        borderRadius: moderateScale(14),
        paddingVertical: moderateScale(4),
    },

    // ── Separator — only between items, never after last ──────
    separator: {
        height: moderateScale(1),
        backgroundColor: Theme.colors.lightTransparet,
    },

    // ── Section header ───────────────────────────────────────
    sectionTitle: {
        ...combineStyle.text20Bold,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    // ── Manage Invites button ─────────────────────────────────
    manageBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: moderateScale(6),
        backgroundColor: Theme.colors.lightTransparet,
        borderWidth: moderateScale(1),
        borderColor: Theme.colors.lightTransparet,
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(6),
        borderRadius: moderateScale(100),
    },
    manageBtnText: {
        ...combineStyle.text14Semi
    },

    // ── Shared row ───────────────────────────────────────────
    rowLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: moderateScale(10),
    },
    rowLabel: {
        ...combineStyle.text16Mid,
    },
    rowValue: {
        ...combineStyle.text24Bold
    },

    // ── Stat row — NO border here ─────────────────────────────
    statRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
    },

    // ── Invitation row — NO border here ──────────────────────
    inviteRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
    },

    // ── Highlight (Pending row) ───────────────────────────────
    highlightText: {
        color: Theme.colors.error,
    },
});