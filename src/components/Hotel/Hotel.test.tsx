import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Hotel from "./Hotel";
import hotelOneImage from "../../assets/hotel-image-1.png";

const mockData = {
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
};

describe("Hotel Component", () => {
  // Renders Hotel Component with above mock data
  test("renders the hotel component", () => {
    render(<Hotel data={mockData} data-testid="hotel-0" />);
  });

  //  Renders hotel details
  test("renders the hotel details", () => {
    const { getByText } = render(
      <Hotel data={mockData} data-testid="hotel-0" />
    );

    expect(getByText(mockData.name)).toBeInTheDocument();
    expect(getByText(mockData.location)).toBeInTheDocument();
    expect(getByText(mockData.persons)).toBeInTheDocument();
    expect(getByText(mockData.dates)).toBeInTheDocument();
    expect(getByText(mockData.airport)).toBeInTheDocument();
    expect(getByText(`£${mockData.price.toFixed(2)}`)).toBeInTheDocument();
  });

  // Tests to see if the description toggle is working
  test("toggles description", () => {
    const { getByText, queryByText } = render(
      <Hotel data={mockData} data-testid="hotel" />
    );

    expect(queryByText(mockData.description)).toBeNull();
    fireEvent.click(getByText("Read more about this hotel"));
    expect(getByText(mockData.description)).toBeInTheDocument();
    fireEvent.click(getByText("Read less about this hotel"));
    expect(queryByText(mockData.description)).toBeNull();
  });
});
