import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import "twin.macro";

describe("HomePage", () => {
  it("Should Render", () => {
    render(<HomePage />);

    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
});

export {};
