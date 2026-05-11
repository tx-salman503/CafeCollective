import { images } from "../assets/images";
import { Cafe, GiveRating, TeaCup } from "../assets/Svgs";



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