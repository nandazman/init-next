import NotFoundPage from "@/pages/404";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page 404", () => {
  it("should render the page", () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId("page-404")).toBeInTheDocument();
  });
});
