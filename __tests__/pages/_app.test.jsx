import App from "@/pages/_app";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const test = () => (
  <div
    data-testid="test-app"
  />
);


describe("Page _app", () => {
  it("should render the page", () => {
    render(<App Component={test} pageProps={{}} />);
    expect(screen.getByTestId("test-app")).toBeInTheDocument();
  });
});