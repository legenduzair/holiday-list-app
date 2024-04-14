import { useState } from "react";
import "./filters.css";

const Filters = ({ onFilterChange }: any) => {
  const handleFilterChange = (filter: any) => {
    onFilterChange(filter);
  };
  return (
    <div className="filters-container">
      <button onClick={() => handleFilterChange("alphabetical")}>
        sort <strong>alphabetically</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="grey"
          width={20}
          height={20}
        >
          <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        </svg>
      </button>
      <button onClick={() => handleFilterChange("price")}>
        sort by <strong>price</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="grey"
          width={20}
          height={20}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.763 9.51a2.25 2.25 0 0 1 3.828-1.351.75.75 0 0 0 1.06-1.06 3.75 3.75 0 0 0-6.38 2.252c-.033.307 0 .595.032.822l.154 1.077H8.25a.75.75 0 0 0 0 1.5h.421l.138.964a3.75 3.75 0 0 1-.358 2.208l-.122.242a.75.75 0 0 0 .908 1.047l1.539-.512a1.5 1.5 0 0 1 .948 0l.655.218a3 3 0 0 0 2.29-.163l.666-.333a.75.75 0 1 0-.67-1.342l-.667.333a1.5 1.5 0 0 1-1.145.082l-.654-.218a3 3 0 0 0-1.898 0l-.06.02a5.25 5.25 0 0 0 .053-1.794l-.108-.752H12a.75.75 0 0 0 0-1.5H9.972l-.184-1.29a1.863 1.863 0 0 1-.025-.45Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button onClick={() => handleFilterChange("starRating")}>
        sort by <strong>star rating</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="grey"
          width={20}
          height={20}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Filters;
