import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Filters from "./components/Filters/Filters";

// Mock Hotel Data
const mockData = [
  {
    name: "Iberostar Grand Salome",
  },
  {
    name: "Aguamarina Golf Hotel",
  },
  {
    name: "Las Piramedes Resort",
  },
];

describe("App Component", () => {
  // Render App Component
  test("renders app component without crashing", () => {
    render(<App />);
  });

  // Renders Filters Component
  test("renders filters component without crashing", () => {
    render(<Filters />);
  });

  // Renders Hotels
  test("renders hotel data on mount", () => {
    const { getByText } = render(<App />);
    mockData.forEach((hotel) => {
      const hotelNameElement = getByText(hotel.name);
      expect(hotelNameElement).toBeInTheDocument();
    });
  });

  // Tests alpha filer
  test("updates hotel list when alpha filter is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("sort-alphabetical"));
    const firstItem = await screen.findByTestId("hotel-0");
    expect(firstItem).toHaveTextContent("Aguamarina Golf Hotel");
  });

  // Tests price filer
  test("updates hotel list when price filter is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("sort-price"));
    const firstItem = await screen.findByTestId("hotel-0");
    expect(firstItem).toHaveTextContent("Las Piramedes Resort");
  });

  // Tests rating filer
  test("updates hotel list when rating filter is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId("sort-rating"));
    const firstItem = await screen.findByTestId("hotel-0");
    expect(firstItem).toHaveTextContent("Iberostar Grand Salome");
  });
});
