import React from "react";
import { render } from "@testing-library/react";
import Instructions from "../components/Instructions";

test("renders learn react link", () => {
  const { getByText } = render(<Instructions />);
  const linkElement = getByText(/Instructions/i);
  expect(linkElement).toBeInTheDocument();
});
