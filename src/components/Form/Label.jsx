import cn from "classnames";

export const FormLabel = ({
  color = "text-white",
  children,
  className,
  gapBottom = "mb-6px",
  htmlFor = "",
}) => {
  return (
    <label htmlFor={htmlFor} className={cn(className, color, gapBottom)}>
      {children}
    </label>
  );
};
