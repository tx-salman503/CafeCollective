// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Modal,
//     TouchableOpacity,
//     StyleSheet,
// } from 'react-native';
// import { SvgXml } from 'react-native-svg';
// import { moderateScale } from 'react-native-size-matters';
// import { Theme } from '../../libs';
// import NativeInput from '../NativeInput/NativeInput';
// import { calendarIcon, Cross, eye, eyelock } from '../../assets/Svgs';
// import NativeText from '../AppTexts/NativeText';
// import { Responsive } from '../../libs';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import NativeButton from '../NativeButton/NativeButton';
// const { AppFonts } = Responsive;

// const FilterModal = ({
//     visible,
//     onClose,
// }) => {
//     const [showDate, setShowDate] = useState(false);
//     const [date, setDate] = useState('');
//     const [activeTabValley, setActiveTabVelly] = useState('Courchevel');        
//     const [activeTabTag, setActiveTabTag] = useState('SKI')
//     const [activeTab, setActiveTab] = useState('Beginner')


//     const formatDate = d =>
//         `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`



//     return (
//         <Modal
//             visible={visible}
//             transparent
//             animationType="fade"

//         >
//             <TouchableOpacity
//                 style={styles.overlay}
//                 activeOpacity={1}
//             >
//                 <TouchableOpacity
//                     activeOpacity={1}
//                     onPress={e => e.stopPropagation()}
//                     style={styles.modalWrapper}
//                 >
//                     <View
//                         style={[
//                             styles.container,
//                         ]}
//                     >

//                         <View style={styles.header}>
//                             <TouchableOpacity onPress={onClose} activeOpacity={0.7}>
//                                 <SvgXml xml={Cross} width={moderateScale(22)} height={moderateScale(22)} />
//                             </TouchableOpacity>
//                             <NativeText value="Filter" style={styles.headerTitle} />
//                             <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
//                                 <NativeText value={"Done"} style={styles.Done} />
//                             </TouchableOpacity>
//                         </View>

//                         <View style={styles.main}>
//                             <TouchableOpacity onPress={() => setShowDate(true)}>
//                                 <NativeInput
//                                     label="Date"
//                                     placeholder="Enter date"
//                                     leftComponent={<SvgXml xml={calendarIcon} width={24} height={24} />}
//                                     value={date}
//                                     editable={false}
//                                     ContainerStyle={styles.dateInput}
                                    
//                                 />
//                             </TouchableOpacity>


//                             <NativeText value="Valley Select" style={styles.titel} />
//                             <View style={styles.row}>
//                                 {['Courchevel', 'Meribel', 'Val Thorens'].map(v => (
//                                     <TouchableOpacity
//                                         key={v}
//                                         style={[styles.skillBox, activeTabValley === v && styles.ActiveTab]}
//                                         onPress={() => setActiveTabVelly(v)}
//                                     >
//                                         <NativeText value={v} style={[styles.skilltext, activeTabValley === v && styles.activeSkillText]} />
//                                     </TouchableOpacity>
//                                 ))}
//                             </View>
//                             <NativeText value="Tag" style={styles.titel} />
//                             <View style={styles.row}>
//                                 {['SKI', 'SKI+APRES-SKI', 'APRES-SKI'].map(v => (
//                                     <TouchableOpacity
//                                         key={v}
//                                         style={[styles.skillBox, activeTabTag === v && styles.ActiveTab]}
//                                         onPress={() => setActiveTabTag(v)}
//                                     >
//                                         <NativeText value={v} style={[styles.skilltext, activeTabTag   === v && styles.activeSkillText]} />
//                                     </TouchableOpacity>
//                                 ))}
//                             </View>
//                             <NativeText value="Skill Level" style={styles.titel} />
//                             <View style={styles.row}>
//                                 {['Beginner', 'Intermediate', 'Advanced'].map(v => (
//                                     <TouchableOpacity
//                                         key={v}
//                                         style={[styles.skillBox, activeTab === v && styles.ActiveTab]}
//                                         onPress={() => setActiveTab(v)}
//                                     >
//                                         <NativeText value={v} style={[styles.skilltext, activeTab === v && styles.activeSkillText]} />
//                                     </TouchableOpacity>
//                                 ))}
//                             </View>

//                             <NativeButton title={"Apply"} containerStyle={styles.btn} onPress={()=>{onClose()}} />

//                         </View>

//                         <DateTimePickerModal
//                             isVisible={showDate}
//                             mode="date"
//                             onConfirm={d => {
//                                 setShowDate(false)
//                                 setDate(formatDate(d))
//                             }}
//                             onCancel={() => setShowDate(false)}
//                         />



//                     </View>
//                 </TouchableOpacity>
//             </TouchableOpacity>
//         </Modal>
//     );
// };

// const styles = StyleSheet.create({
//     overlay: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         backgroundColor: 'rgba(0,0,0,0.5)', // Fallback background
//     },
//     modalWrapper: {
//         maxHeight: '100%',
//     },
//     scrollContent: {
//         justifyContent: 'flex-end',

//     },
//     container: {
//         width: '100%',
//         height: moderateScale(520),
//         backgroundColor: '#fff',
//         borderTopLeftRadius: moderateScale(12),
//         borderTopRightRadius: moderateScale(12),
//         paddingTop: moderateScale(15),
//         alignItems: 'center',
//         paddingHorizontal: moderateScale(20),
//     },
//     header: {
//         width: "100%",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
       
//     },
//     headerTitle: {
//         fontSize: AppFonts.h6,
//         fontFamily: Theme.fontFamily.poppinsSemiBold,
//         color: Theme.colors.black,
//     },
//     Done: {
//         fontSize: AppFonts.t2,
//         fontFamily: Theme.fontFamily.poppinsSemiBold,
//         color: Theme.colors.navyBlue,
//     },
//     main: {
//         flex: 1,
//         marginTop: moderateScale(2),
//     },
//     titel: {
//         fontSize: moderateScale(14),
//         color: Theme.colors.black,
//         fontFamily: Theme.fontFamily.poppinsSemiBold,
//         paddingHorizontal: moderateScale(2),
//         marginBottom: moderateScale(5),
//     },
//     row: {
//         height: moderateScale(47),
//         flexDirection: "row",
//         justifyContent: "space-between",
//         gap: moderateScale(5),
//         alignItems: "center",
//         marginBottom: moderateScale(20),
//     },
//     skillBox: {
//         backgroundColor: Theme.colors.white,
//         borderWidth: moderateScale(1),
//         borderColor: "#E2E1E1",
//         height: moderateScale(47),
//         borderRadius: moderateScale(6),
//         justifyContent: "center",
//         alignItems: "center",
//         minWidth: moderateScale(90),
        
       
//     },
//     skilltext: {
//         fontSize: AppFonts.h6,
//         fontFamily: Theme.fontFamily.poppinsMedium,
//         color: Theme.colors.gray,
//         paddingHorizontal: moderateScale(10)
//     },
//     ActiveTab: {
//         borderWidth: moderateScale(1),
//         borderColor: Theme.colors.navyBlue
//     },
// btn:{
//     marginTop: "auto",
//     bottom: moderateScale(25),
// },
// dateInput:{
//     marginBottom: moderateScale(16),
//     marginTop: moderateScale(20),
// },
// activeSkillText:{
//         color: Theme.colors.black,
    
// }


// });

// export default FilterModal;
