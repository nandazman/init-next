import cn from "classnames";
import { bgColors } from "src/lib/constant";

export default function Button(props) {
  const {
    onClick,
    className,
    type = "button",
    children,
    width,
    size,
    variant = "identity",
    ...restProps
  } = props;

  const btnSize = size ? `btn-${size}` : "";
  return (
    <button
      data-testid="component-button"
      {...restProps}
      style={{ width }}
      className={cn(
        "btn",
        className,
        btnSize,
        bgColors[variant]
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
