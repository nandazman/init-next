import { Button } from "@/components/Button/Button";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Component Button", () => {
  it("should Button", () => {
    render(<Button />);
    expect(screen.getByTestId("component-button")).toBeInTheDocument();
  });

  describe("render with props", () => {
    it("should trigger onClick function", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} />);
      expect(onClick).toBeCalledTimes(0);

      fireEvent.click(screen.getByTestId("component-button"));
      expect(onClick).toBeCalledTimes(1);
    });

    it("should render with desired className", () => {
      const { rerender } = render(<Button />);

      expect(screen.getByTestId("component-button")).not.toHaveClass("test");

      rerender(<Button className="test" />);

      expect(screen.getByTestId("component-button")).toHaveClass(
        "btn text-button test"
      );
    });

    it("should render with desired type", () => {
      const { rerender } = render(<Button />);

      expect(screen.getByTestId("component-button").getAttribute("type")).toBe(
        "button"
      );

      rerender(<Button type="submit" />);

      expect(screen.getByTestId("component-button").getAttribute("type")).toBe(
        "submit"
      );
    });

    it("should render with desired width", () => {
      const { rerender } = render(<Button />);

      expect(screen.getByTestId("component-button").style.width).toBe("100px");

      rerender(<Button width="200px" />);

      expect(screen.getByTestId("component-button").style.width).toBe("200px");
    });
  })
});
