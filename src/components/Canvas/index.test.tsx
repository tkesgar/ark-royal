import React from "react";
import { render } from "@testing-library/react";
import Canvas from ".";

it("renders Canvas", () => {
  const { getByText } = render(<Canvas />);
  expect(getByText("Canvas")).toBeInTheDocument();
});
