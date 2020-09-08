import React from "react";

import { render, fireEvent } from "@testing-library/react";

import Button from "../Button";

import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render the default state", () => {
    const { getByText } = render(<Button />);

    expect(getByText("1")).toBeVisible();
  });

  it("should render fizz buzz", () => {
    const { getByText, getByTestId } = render(<Button />);

    fireEvent.click(getByTestId("Button"));
    expect(getByText("2")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("Fizz")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("4")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("Buzz")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("Fizz")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("7")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("8")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("Fizz")).toBeVisible();

    fireEvent.click(getByTestId("Button"));
    expect(getByText("Buzz")).toBeVisible();

    // Here we are at 10 -> add another 5 clicks
    for (let i = 0; i < 5; i++) {
      fireEvent.click(getByTestId("Button"));
    }

    expect(getByText("Fizz Buzz")).toBeVisible();
  });
});
