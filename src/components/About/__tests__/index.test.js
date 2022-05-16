import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

const { asFragment } = render(<About />);

// ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe("About component", () => {
  // renders About test
  // First Test
  it("renders", () => {
    render(<About />);
  });

  // Second Test
  it("matches snapshot DOM node structure", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
