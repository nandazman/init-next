import App from "@/pages/_app";
import initHoneyBadger from "@/utils/honeybadger";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


jest.mock("@/utils/honeybadger");

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

  it("should call initiate honeybadger", () => {
    render(<App Component={test} pageProps={{}} />);
    expect(initHoneyBadger).toHaveBeenCalled();
  });
});