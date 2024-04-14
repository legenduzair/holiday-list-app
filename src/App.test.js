import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {

  // Render App Component
  test("renders app component without crashing", () => {
    render(<App />);
  });


});
