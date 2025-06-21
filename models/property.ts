import { Ionicons } from "@expo/vector-icons";
import { IAgent } from "./user";

export interface IFacility {
  id: string;
  name: string;
  data?: number;
  icon: keyof typeof Ionicons.glyphMap;
}

export interface ILocation {
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}

export interface IProperty {
  _id: string;
  imageUrl: string;
  title: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  category: string;
  reviews: [];
  comfort: number;
  facilities: IFacility[];
  area: number;
  bedrooms: number;
  bathrooms: number;
  safetyRank: number;
  agent: IAgent;
  location: ILocation;
  images: IImage[];
}

export interface IImage {
  imageUrl: string;
}
