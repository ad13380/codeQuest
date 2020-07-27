import React from "react";
import { render } from "@testing-library/react";
import Canvas from "../components/Canvas";

test("renders canvas", () => {
  const { getByTestId } = render(<Canvas />);
  const linkElement = getByTestId(/canvas/i);
  expect(linkElement).toBeInTheDocument();
});