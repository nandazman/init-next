import cn from "classnames";

export const Button = (props) => {
  const {
    onClick,
    className,
    type = "button",
    children,
    width = "100px",
    ...restProps
  } = props;
  return (
    <button
      data-testid="component-button"
      {...restProps}
      style={{ width }}
      className={cn("p-10px rounded-[5px] text-button", className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
