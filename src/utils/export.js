import { images } from "../assets/images";
import { CustomSurvicesIcon, DeleteIcon, eye, HelpCenter, LanguageIcon, LogoutIcon, ProfileIcon, Profilelcok, WebsiteIcon, WhatsappIcon } from "../assets/Svgs";
import { Routes } from "../navigation/Routes";

export const OnbordingData = [
  {
    id: 1,
    img: images.Onboarding1,
    titleKey: "Onboarding.title1",
    subtitleKey: "Onboarding.subtitle1",
  },
  {
    id: 2,
    img: images.Onboarding2,
    titleKey: "Onboarding.title2",
    subtitleKey: "Onboarding.subtitle2",
  },
  {
    id: 3,
    img: images.Onboarding3,
    titleKey: "Onboarding.title1",
    subtitleKey: "Onboarding.subtitle1",
  },

];

export const languageData = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
];

export const ProfileData = [
  {
    id: 1,
    titleKey: 'Profiles.editProfile',
    icon: ProfileIcon,
    route: Routes.EditProfile,
  },
  {
    id: 2,
    titleKey: 'Profiles.updateProfile',
    icon: ProfileIcon,
    route: Routes.EditSkill,
  },
  {
    id: 3,
    titleKey: 'Profiles.visibilityOnMap',
    icon: eye,
    route: Routes.PrivacyPolicy,
  },
  {
    id: 4,
    titleKey: 'Profiles.privacyPolicy',
    icon: Profilelcok,
    route: Routes.PrivacyPolicy,
  },
  {
    id: 5,
    titleKey: 'Profiles.language',
    icon: LanguageIcon,
    route: Routes.Language,
  },
  {
    id: 6,
    titleKey: 'Profiles.helpCenter',
    icon: HelpCenter,
    route: Routes.HelpCenter,
  },
  {
    id: 7,
    titleKey: 'Profiles.deleteAccount',
    icon: DeleteIcon,
    route: Routes.DeleteAccount,
  },
  {
    id: 8,
    titleKey: 'Profiles.logout',
    icon: LogoutIcon,
    route: null,
  }

];

export const HelpCenterData = [
  {
    id: 1,
    titleKey: 'HelpCenter.customerService',
    icon: CustomSurvicesIcon,
  },
  {
    id: 2,
    titleKey: 'HelpCenter.whatsapp',
    icon: WhatsappIcon,
  },
  {
    id: 3,
    titleKey: 'HelpCenter.website',
    icon: WebsiteIcon,
  }
]

export const MeetupData = [
  {
    id: 1,
    titleKey: 'Meetup.morningPowderRun',
    detailKey: "Meetup.morningPowderRunDetail",
    time: '10:00 AM',
    numberOfPeople: 4,
    location: 'Les Manures Lift Station(0.5Km)',
    date:"29-dec-2025",
    tags:["Meribel","SKI+APRES-SKi","Advanced"]
  },
  {
    id: 2,
    titleKey: 'Meetup.morningPowderRun',
    detailKey: "Meetup.morningPowderRunDetail",
    time: '10:00 AM',
    numberOfPeople: 4,
    location: 'Les Manures Lift Station(0.5Km)',
    date:"29-dec-2025",
     tags:["Meribel","SKI+APRES-SKi","Advanced"],
  },
  {
    id: 3,
    titleKey: 'Meetup.morningPowderRun',
    detailKey: "Meetup.morningPowderRunDetail",
    time: '10:00 AM',
    numberOfPeople: 4,
    location: 'Les Manures Lift Station(0.5Km)',
    date:"29-dec-2025",
     tags:["Meribel","SKI+APRES-SKi","Advanced"]
  },
  {
    id: 4,
    titleKey: 'Meetup.morningPowderRun',
    detailKey: "Meetup.morningPowderRunDetail",
    time: '10:00 AM',
    numberOfPeople: 4,
    location: 'Les Manures Lift Station(0.5Km)',
    date:"29-dec-2025",
     tags:["Meribel","SKI+APRES-SKi","Advanced"]
  },
]

export const UserData=[
  {
    id:1,
    img:images.User1,
    name:"Alex"
  },
  {
    id:2,
    img:images.User2,
    name:"Alex"
  },
  {
    id:3,
    img:images.User1,
    name:"Alex"
  },
  {
    id:4,
    img:images.User2,
    name:"Alex"
  },
  {
    id:5,
    img:images.User1,
    name:"Alex"
  },
]

export const initialMessages = [
  {
    _id: 1,
    text: "Hi Theresa, good morning 😊",
    createdAt: new Date(),
    user: {
      _id: "1",
      name: "James",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    _id: 2,
    text: "Hi, morning too James!",
    createdAt: new Date(),
    user: {
      _id: "2",
      name: "Maria",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    _id: 3,
    text: "Hi, morning too James!",
    createdAt: new Date(),
    user: {
      _id: "3",
      name: "Iesa",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
  },
];


export const chatGroups = [
  {
    id: 1,
    img:images.User1,
    name:"Moring powder Run",
    lastMessage:"See you all at 9!",
    unreadMessages:2,
    time:"10:00",
  },
  {
    id: 2,
    img:images.User1,
    name:"Moring powder Run",
    lastMessage:"See you all at 9!",
    unreadMessages:2,
    time:"10:00",
  },
  {
    id: 3,
    img:images.User1,
    name:"Moring powder Run",
    lastMessage:"See you all at 9!",
    unreadMessages:2,
    time:"10:00",
  },
]


export const HostEventList = [
  {
    id: 1,
    titleKey: 'HostEvent.morningPowderRun',
    detailKey: "HostEvent.morningPowderRunDetail",
    time: '10:00 AM',
    numberOfPeople: 4,
    location: 'Les Manures Lift Station(0.5Km)',
    date:"29-dec-2025",
    tags:["Meribel","SKI+APRES-SKi","Advanced"]
  },
]