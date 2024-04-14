import { useEffect, useState } from "react";
import Filters from "./components/Filters/Filters";
import Hotel from "./components/Hotel/Hotel";
import { hotelData } from "./constants/hotelData";
import "./index.css";
import { HotelData, HotelDataType } from "./types/types";
import { sortHotelsByName, sortHotelsByPrice, sortHotelsByRating } from "./utils/utils";

function App() {
  const [hotels, setHotels] = useState<HotelData>(hotelData);

  useEffect(() => {
    const sortedHotelsByPrice = sortHotelsByPrice(hotels);
        setHotels(sortedHotelsByPrice);
  }, [])
  

  const handleFilterChange = (filter: string) => {
    switch (filter) {
      case "alphabetical":
        const sortedHotelsByName = sortHotelsByName(hotels);
        setHotels(sortedHotelsByName);
        break;
      case "price":
        const sortedHotelsByPrice = sortHotelsByPrice(hotels);
        setHotels(sortedHotelsByPrice);
        break;
      case "starRating":
        const sortedHotelsByRating = sortHotelsByRating(hotels);
        setHotels(sortedHotelsByRating);
        break;
      default:
        break;
    }
  };

  return (
    <section className="container">
      <Filters onFilterChange={handleFilterChange} />
      <div className="hotel-list">
        {hotels.map((data: HotelDataType) => (
          <Hotel key={data.name} data={data} />
        ))}
      </div>
    </section>
  );
}

export default App;
