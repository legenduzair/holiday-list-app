import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Filters from "./Filters";

describe("Filter Component", () => {
  // Render Filter Component
  test("renders Filter Component", () => {
    const defaultFilter = jest.fn();

    render(<Filters onFilterChange={defaultFilter} />);
  });

  // Tests to see if callback is invoked when clicked
  test("clicking the sort alphabetically filter calls the onFilterChange callback", () => {
    const onFilterChange = jest.fn();
    const { getByTestId } = render(<Filters onFilterChange={onFilterChange} />);

    const alphabeticalButton = getByTestId("sort-alphabetical");
    fireEvent.click(alphabeticalButton);

    expect(onFilterChange).toHaveBeenCalledWith("alphabetical");
  });

  // Tests to see if filter highlighted
  test("clicking the sort by ratings button highlights the ratings filter", () => {
    const { getByTestId } = render(<Filters onFilterChange={jest.fn()} />);

    const ratingsButton = getByTestId("sort-rating");
    fireEvent.click(ratingsButton);

    const highlightedRatingsButton = getByTestId("sort-rating");
    expect(highlightedRatingsButton).toHaveClass("active");
  });
});
