import { render } from "@testing-library/react";
import StarRating from "./StarRating";

describe("StarRating component", () => {

  // Renders the component
  test("renders star rating component", () => {
    render(<StarRating rating={3} />);
  });

  // Tests if svg generated is correct
  test("renders the correct number of svg star icons", () => {
    const { container } = render(<StarRating rating={5} />);
    const stars = container.querySelectorAll("svg");
    expect(stars.length).toBe(5);
  });
});