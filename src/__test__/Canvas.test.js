import React from "react";
import { render } from "@testing-library/react";
import Canvas from "../components/Canvas";

test("renders canvas", () => {
  const { getByTestId } = render(<Canvas />);
  const canvas = getByTestId('canvas');
  expect(canvas).toBeInTheDocument();
});





