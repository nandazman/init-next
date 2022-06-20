import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../_app";

describe("Page _app", () => {
  it("should render the page", () => {
    render(<App Component={<div data-testid="page-app"></div>} />);
    expect(screen.getByTestId("page-app")).toBeInTheDocument();
  });
});