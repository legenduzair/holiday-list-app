import Filters from "./components/Filters/Filters";
import Hotel from "./components/Hotel/Hotel";
import { hotelData } from "./constants/hotelData";
import "./index.css";

function App() {
  const hotelDetails = hotelData;

  return (
    <section className="container">
      <Filters />
      <div className="hotel-list">
        {hotelDetails.map((data) => (
          <Hotel data={data} />
        ))}
      </div>
    </section>
  );
}

export default App;
