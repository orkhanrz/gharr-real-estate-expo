import { Ionicons } from "@expo/vector-icons";
import { IAgent } from "./user";

export interface IFacility {
  id: string;
  label: string;
  data?: number;
  image: keyof typeof Ionicons.glyphMap;
}

export interface ILocation {
  address: string;
  lat: number;
  lng: number;
  city: string;
  country: string;
}

export interface IProperty {
  id: string;
  image: string;
  title: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  category: string;
  reviews: number;
  comfort: number;
  facilities: IFacility[];
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  safetyRank: number;
  agent: IAgent;
  location: ILocation;
  images: IImage[];
}

export interface IImage {
  id: string;
  url: string;
}
