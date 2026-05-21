import { images } from "../assets/images";
import {
  Cafe, CofeeSvg, discoveringSvg, filterSvg, GiveRating, laptopIcon, LaptopSvg, locationIcon, logoutSvg, profileSvg, resturantSvg, smallsearchIcon, TeaCup, wifiIcon, BeanSvg,
  InvitationAsseptedSvg,
  InvitationAvailableSvg,
  InvitationPendingSvg,
  InvitationUnlockedSvg,
  switchBoard,
  ManueSvg,
  CofeeCupWhite,
  fork,
  dollerSign,
  parking,
  Accessibility,
  speaker,
  crowd1,
} from "../assets/Svgs";



export const locationFeatures = [
  {
    text: "Show cafes near you",
    svgName: TeaCup
  },
  {
    text: "Unlock nearby areas first",
    svgName: Cafe
  },
  {
    text: "Personalize your map",
    svgName: GiveRating
  }
];

export const cafeReviewData = [
  {
    id: 1,
    image: images.Cafe1, // replace with your image import
    title: 'The Roasted Bean',
    distance: 0.2,
    rating: 4.8,
    address: '123 Espresso Lane, Downtown',
  },
  {
    id: 2,
    image: images.Cafe2,
    title: 'Mornings & Mugs',
    distance: 0.5,
    rating: 4.5,
    address: '88 Caffeine Way, North District',
  },
  {
    id: 3,
    image: images.Cafe3,
    title: 'Bibliophile Brews',
    distance: 0.8,
    rating: 4.9,
    address: '42 Page Turner Blvd',
  },
];


export const CAFE_DATA = [
  {
    id: '1',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.Cafe3,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '2',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.Cafe3,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '3',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.Cafe3,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },

];

export const HomeScreenData = [
  { id: 1, svg: filterSvg, text: "Filter" },
  { id: 2, svg: CofeeSvg, text: "Coffee" },
  { id: 4, svg: LaptopSvg, text: "Work Friendly" },
  { id: 5, svg: wifiIcon, text: "Wifi" },

]



export const FavouriteDataArray = [
  {
    id: '1',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.Cafe3,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '2',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.TableImg,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '3',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CofeeImg,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '4',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.Cafe3,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.TableImg,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '6',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CofeeImg,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },

];


export const RatingCafeArray = [
  { id: 1, title: "Cafe Artigiano", rating: "5.0", totalReview: "105 reviews", tagSvg: LaptopSvg, tagtext: "Work friendly", img: images.Cafe3 },
  { id: 2, title: "Cafe Haliso", rating: "5.0", totalReview: "105 reviews", tagSvg: LaptopSvg, tagtext: "Work friendly", img: images.Cafe3 },
  { id: 3, title: "Cafe Artigiano", rating: "5.0", totalReview: "105 reviews", tagSvg: LaptopSvg, tagtext: "Work friendly", img: images.Cafe3 },

]




export const AllCafeArray = [
  {
    id: '1',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CafeList1,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '2',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CafeList2,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '3',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CafeList2,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '4',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CafeList1,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CafeList2,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },
  {
    id: '6',
    title: 'Dark Horse Espresso',
    subtitle: 'Spadina Ave • 0.4km',
    image: images.CafeList1,
    rating: 4.8,
    wifi: "BAD",
    switch: "FEW",
    speaker: "QUIET",
  },

];


export const Settingsections = [
  {
    title: 'Account',
    items: [
      { id: 'editProfile', label: 'Edit Profile', icon: profileSvg, type: 'arrow', onPress: () => { } },
    ],
  },
  {
    title: 'Notifications',
    items: [
      { id: 'discovering', label: 'Discovering Opportunities', icon: discoveringSvg, type: 'toggle' },
      { id: 'nearbyCafes', label: 'Nearby Cafes', icon: resturantSvg, type: 'toggle' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { id: 'searchRadius', label: 'Search Radius', icon: smallsearchIcon, type: 'arrow', rightLabel: '5 km', onPress: () => { } },
    ],
  },
  {
    title: 'Privacy',
    items: [
      { id: 'locationAccess', label: 'Location Access', icon: locationIcon, type: 'toggle' },
      { id: 'logout', label: 'Log Out', icon: logoutSvg, type: 'arrow', onPress: () => { } },
    ],
  },
]


export const INVITATIONS = [
  { id: '1', label: 'Invitation Unlocked', value: 7, icon: InvitationUnlockedSvg, highlight: false },
  { id: '2', label: 'Invitations Available', value: 2, icon: InvitationAvailableSvg, highlight: false },
  { id: '3', label: 'Invitations Accepted', value: 3, icon: InvitationAsseptedSvg, highlight: false },
  { id: '4', label: 'Invitations Pending', value: 2, icon: InvitationPendingSvg, highlight: true },
];


export const STATS = [
  { id: '1', label: 'Beans Collected', value: 647, icon: BeanSvg },
  { id: '2', label: 'Cafes Discovered', value: 8, icon: resturantSvg },
];


export const shareOptions = {
  title: 'Invite Friends',
  message: 'Join me on Coffee XP! Use my code: COFFEE-XP-2026',
  url: 'https://your-app-link.com', // optional
};



export const WORKABILITY_SCORES = [
    { id: '1', label: 'WiFi', value: '4.8', stars: 5, icon:wifiIcon },
    { id: '2', label: 'Outlets', value: 'Plenty', stars: 5, icon: switchBoard },
    { id: '3', label: 'Laptop Friendly', value: 'Perfect', stars: 5, icon: LaptopSvg },
]

export const FOOD_ROWS = [
    { id: '1', label: 'Menu Variety', value: 'Limited - Pastries only', icon: ManueSvg, pill: false, type: "manue" },
    { id: '2', label: 'Coffee Quality', value: '4.8', icon: CofeeCupWhite, pill: false },
    { id: '3', label: 'Food Quality', value: '4.6', icon: fork, pill: false },
]



export const ACCESS_ROWS = [
    { id: '1', label: 'Opening Hours', value: 'Mon-Fri: 7 AM - 8 PM', icon: fork, pill: true },
    { id: '2', label: 'Best Working Time', value: 'Morning', icon: dollerSign, pill: true },
    { id: '3', label: 'Price Level', value: 'Mid-range $$', icon: dollerSign, pill: true },
    { id: '4', label: 'Parking', value: 'Street parking', icon: parking, pill: false },
    { id: '5', label: 'Accessibility', value: 'Partially Accessible', icon: Accessibility, pill: false },
]


export const COMFORT_SCORES = [
    { id: '1', label: 'Comfort', value: 'Okay Comfort', icon: wifiIcon },
    { id: '2', label: 'Noise Level', value: 'Moderate', icon: speaker },
    { id: '3', label: 'Crowded', value: 'Monday', icon: crowd1 },
]

export const VIBE_TAGS = ['Warm Lighting', 'Modern Style', 'Social hangouts', 'Outdoor seating']


export const CafeImgArray = [
    { id: '1', source: images.CafeList1 },
    { id: '2', source: images.CafeList2 },
    { id: '3', source: images.CafeList1 },
]