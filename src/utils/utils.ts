import { HotelData } from "../types/types";

// Utility Functions

// Sort Alphabetically
export const sortHotelsByName = (hotels: HotelData): HotelData => {
  return [...hotels].sort((a, b) => a.name.localeCompare(b.name));
};

// Sort by Price (Ascending)
export const sortHotelsByPrice = (hotels: HotelData): HotelData => {
  return [...hotels].sort((a, b) => a.price - b.price);
};

// Sort by Star Rating (Descending)
export const sortHotelsByRating = (hotels: HotelData): HotelData => {
  return [...hotels].sort((a, b) => b.rating - a.rating);
};
