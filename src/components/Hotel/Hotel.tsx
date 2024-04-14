import { useState } from "react";
import { HotelDataType } from "../../types/types";
import "./hotel.css";

type HotelDataProps = {
  data: HotelDataType;
};

const Hotel = ({ data }: HotelDataProps) => {
  const [showMore, setShowMore] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
    setShowDescription(!showDescription);
  };

  return (
    <section className="hotel">
      <div className="hotel-container">
        <div className="hotel-image">
          <img src={data.image} alt={data.name} />
          <span onClick={toggleDescription}>
            {showMore ? (
              <>
                Read more about this hotel
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  width={20}
                  height={20}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <>
                Read less about this hotel
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  width={20}
                  height={20}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
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
      {showDescription ? (
        <div className="hotel-description">
          <h4>Overview</h4>
          <p>{data.description}</p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Hotel;
