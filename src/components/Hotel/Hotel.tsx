import { HotelDataType } from "../../types/types";
import "./hotel.css";

type HotelDataProps = {
  data: HotelDataType;
};

const Hotel = ({ data }: HotelDataProps) => {
  return (
    <section className="hotel">
      <div className="hotel-container">
        <div className="hotel-image">
          <img src={data.image} alt={data.name} />
          <span>
            <strong>Read more</strong> about this hotel
          </span>
        </div>
        <div className="hotel-details">
          <h2>{data.name}</h2>
          <small>{data.location}</small>
          <p>stars</p>
          <p>{data.persons}</p>
          <p>{data.dates}</p>
          <p>{data.airport}</p>
          <button className="btn-book">
            Book now <br /> <span>£{data.price.toFixed(2)}</span>
          </button>
        </div>
      </div>
      <div className="hotel-description">
        <h4>Overview</h4>
        <p>{data.description}</p>
      </div>
    </section>
  );
};

export default Hotel;
