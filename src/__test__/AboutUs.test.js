import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "../components/AboutUs";

test("renders learn react link", () => {
  const { getByText } = render(<AboutUs />);
  const linkElement = getByText(/About us/i);
  expect(linkElement).toBeInTheDocument();
});
