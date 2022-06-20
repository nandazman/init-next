import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "../index";

describe("Page index", () => {
  it("should render the page", () => {
    render(<Index />);
    expect(screen.getByTestId("page-index")).toBeInTheDocument();
  });
});
