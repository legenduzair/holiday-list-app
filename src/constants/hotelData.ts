import { HotelData } from "../types/types";
import hotelOneImage from "../assets/hotel-image-1.png";
import hotelTwoImage from "../assets/hotel-image-2.png";
import hotelThreeImage from "../assets/hotel-image-3.png";

// Hotel Data
export const hotelData: HotelData = [
  {
    name: "Iberostar Grand Salome",
    image: hotelOneImage,
    location: "Costa Adeje, Tenerife",
    rating: 5,
    persons: "2 Adults, 2 children & 1 infant",
    dates: "3rd July 2018 for 7 days",
    airport: "departing from East Midlands",
    price: 1136.5,
    description:
      "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
  },
  {
    name: "Aguamarina Golf Hotel",
    image: hotelTwoImage,
    location: "Costa Adeje, Tenerife",
    rating: 4,
    persons: "2 Adults, 1 child",
    dates: "27th May 2019 for 7 days",
    airport: "departing from Liverpool",
    price: 686.8,
    description:
      "The 4-star Alua Atlantico Golf Hotel San Miguel de Abona is 10 minutes' drive away Alborada Beach Club and features a cash machine and a lift onsite. Providing access to such entertainment venues as Marina San Miguel merely 12 minutes' walk away, this San Miguel de Abona hotel has 4 restaurants.",
  },
  {
    name: "Las Piramedes Resort",
    image: hotelThreeImage,
    location: "Costa Adeje, Tenerife",
    rating: 3,
    persons: "2 Adults, 2 children",
    dates: "3rd July 2019 for 7 days",
    airport: "departing from Manchester",
    price: 499.99,
    description:
      "The 3-star Las Piramides hotel occupies a prime location, right in the heart of Playa de las Americas, Tenerife. The resort sits within easy striking distance of a local beach. With a good range of facilities and comfortable accommodation, this hotel is a wonderful choice for couples and families seeking a fun-filled and good value beach holiday.",
  },
];
