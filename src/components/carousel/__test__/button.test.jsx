import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { DotButton } from "../button";

describe("Carousel Button", () => {
  it("should render Dots Button", () => {
    render(<DotButton />);
    expect(screen.getByTestId("carousel-dot-button")).toBeInTheDocument();
  });

  it("should onClick function", () => {
    const onClick = jest.fn();
    render(<DotButton onClick={onClick} />);
    expect(onClick).toBeCalledTimes(0);

    fireEvent.click(screen.getByTestId("carousel-dot-button"));
    expect(onClick).toBeCalledTimes(1);
  })
});