import { HotelDataType } from "../../types/types";
import "./hotel.css";

type HotelDataProps = {
  data: HotelDataType;
};

const Hotel = ({ data }: HotelDataProps) => {
  return (
    <div className="hotel-container">
      <div className="hotel-image">Image</div>
      <div>
        <h2>{data.name}</h2>
        <small>{data.location}</small>
        <p>stars</p>
        <p>{data.persons}</p>
        <p>{data.dates}</p>
        <p>{data.airport}</p>
        <button className="btn-book">Book now <br /> £{data.price.toFixed(2)}</button>
      </div>
    </div>
  );
};

export default Hotel;
