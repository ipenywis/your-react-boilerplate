import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import "twin.macro";
import { ChakraProvider } from "ui";

describe("HomePage", () => {
  it("Should Render", () => {
    render(<HomePage />);

    const singupElement = screen.getByTestId("signup-link");
    expect(singupElement).toBeInTheDocument();
  });
});

export {};
