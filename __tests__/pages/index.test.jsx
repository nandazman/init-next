import Index from "@/pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page index", () => {
  it("should render the page", () => {
    render(<Index />);
    expect(screen.getByTestId("page-index")).toBeInTheDocument();
  });
});
