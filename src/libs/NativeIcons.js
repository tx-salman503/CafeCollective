import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from './Theme.json';

const createIcon =
  (iconComponent, iconName) =>
  ({onPress, size, disabled, color}) =>
    (
      <TouchableOpacity
        disabled={disabled}
        style={styles(size || 18).wrapper}
        onPress={onPress}>
        {React.createElement(iconComponent, {
          name: iconName,
          color: color || Theme.colors.iconColor,
          size: size || 18,
        })}
      </TouchableOpacity>
    );

const AppIcons = {
  FrownoIcon: createIcon(Feather, 'smile'),
  InstagramLogin: createIcon(AntDesign, 'instagram'),
  GoogleLogin: createIcon(AntDesign, 'google'),
  AppleLogin: createIcon(AntDesign, 'apple1'),
  ArrowRight: createIcon(AntDesign, 'arrowright'),
  ArrowLeft: createIcon(AntDesign, 'arrowleft'),
  ArrowDown: createIcon(AntDesign, 'arrowdown'),
  ArrowUp: createIcon(AntDesign, 'arrowup'),
  DropDown: createIcon(AntDesign, 'down'),
  DropRight: createIcon(Feather, 'chevron-right'),
  CalendarIcon: createIcon(Feather, 'calendar'),
  MobileLogin: createIcon(Feather, 'smartphone'),
  FlagIcon: createIcon(Feather, 'flag'),
  QuestionMark: createIcon(AntDesign, 'questioncircleo'),
  LockIcon: createIcon(Feather, 'lock'),
  GridIcon: createIcon(Feather, 'grid'),
  GridCircle: createIcon(Feather, 'globe'),
  NotificationBell: createIcon(Feather, 'bell'),
  CameraIcon: createIcon(Feather, 'camera'),
  MenuIcon: createIcon(AntDesign, 'menu-fold'),
  LikeIcon: createIcon(AntDesign, 'like1'),
  PlusIcon: createIcon(AntDesign, 'plus'),
  Edit: createIcon(Feather, 'edit-3'),
  ReactionIcon: createIcon(AntDesign, 'meho'),
  SearchIcon: createIcon(Feather, 'search'),
  EmailIcon: createIcon(Feather, 'mail'),
  BackIcon: createIcon(Feather, 'chevron-left'),
  CardsHeartIcon: createIcon(AntDesign, 'heart'),
  HeartIcon: createIcon(AntDesign, 'hearto'),
  HeartFillIcon: createIcon(AntDesign, 'heart'),
  HomeIcon: createIcon(Feather, 'home'),
  ShoppingIcon: createIcon(Feather, 'shopping-bag'),
  LoginIcon: createIcon(AntDesign, 'logout'),
  ErrorIcon: createIcon(AntDesign, 'exclamationcircleo'),
  CloseIcon: createIcon(Feather, 'x'),
  DeleteIcon: createIcon(Feather, 'trash-2'),
  AdjustIcon: createIcon(Feather, 'disc'),
  CheckBox: createIcon(AntDesign, 'checksquare'),
  MessageIcon: createIcon(Feather, 'message-square'),
  PersonIcon: createIcon(Feather, 'user'),
  PictureIcon: createIcon(AntDesign, 'picture'),
  CheckBoxOutLine: createIcon(AntDesign, 'checksquareo'),
  EyeIcon: createIcon(Feather, 'eye'),
  EyeOffIcon: createIcon(Feather, 'eye-off'),
  ImageUpload: createIcon(Feather, 'plus'),
  PlayListIcon: createIcon(Feather, 'edit-3'),
  EditUserIcon: createIcon(Feather, 'user-plus'),
  PeopleIcon: createIcon(Feather, 'users'),
  Paperclip: createIcon(Feather, 'paperclip'),
  CharactorCounterIcon: createIcon(Feather, 'bar-chart'),
  ImageIcon: createIcon(Feather, 'image'),
  PauseIcon: createIcon(Feather, 'pause'),
  Attachment: createIcon(Feather, 'paperclip'),
  CheckIcon: createIcon(Feather, 'check'),
  TrophyIcon: createIcon(Feather, 'star'),
  LogoutIcon: createIcon(Feather, 'log-out'),
  TermConditionsIcon: createIcon(Feather, 'file-text'),
  LocationIcon: createIcon(Feather, 'map-pin'),
  FileinvoiceDollar: createIcon(Feather, 'dollar-sign'),
  ToolIcon: createIcon(Feather, 'sliders'),
  DollarSign: createIcon(Feather, 'dollar-sign'),
  PlayIcon: createIcon(Feather, 'play'),
  Calendar: createIcon(Feather, 'calendar'),
  StarIcon: createIcon(Feather, 'log-in'),
  InfoIcon: createIcon(Feather, 'info'),
  Music: createIcon(Feather, 'music'),
  Ellipsis: createIcon(Feather, 'more-horizontal'),
  GenderIcon: createIcon(Feather, 'smile'),
  GalleryIcon: createIcon(Feather, 'image'),
  EuroIcon: createIcon(Feather, 'divide'),
  ShareIcon: createIcon(Feather, 'share'),
  ThreeDots: createIcon(Feather, 'more-vertical'),
  BodyIcon: createIcon(Feather, 'user'),
  CrossIcon: createIcon(Feather, 'x'),
  GraduateIcon: createIcon(Feather, 'briefcase'),
  CopyRightIcon: createIcon(AntDesign, 'copyright'),
  PhoneIcon: createIcon(Feather, 'phone'),
  UsersIcon: createIcon(Feather, 'users'),
  PlayIconOutline: createIcon(Feather, 'play'),
  Send: createIcon(Feather, 'arrow-right-circle'),
  TagIcon: createIcon(Feather, 'tag'),
  BasketBal: createIcon(Feather, 'calendar'),
  InformationIcon: createIcon(Feather, 'info'),
  GridRectangle: createIcon(Feather, 'grid'),
  PersonOutline: createIcon(Feather, 'user'),
  FolderLine: createIcon(Feather, 'folder'),
};

export default AppIcons;

const styles = width =>
  StyleSheet.create({
    wrapper: {
      width: width + 4,
      padding: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
