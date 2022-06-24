import cn from "classnames";

export const FormInput = ({
  value = "",
  className,
  onChange,
  type = "text",
  color = "text-black",
  height = "h-[45px]",
  placeHolderColor = "placeholder:text-rgba(0, 0, 0, 0.26)",
  ...restProps
}) => {
  return (
    <input
      {...restProps}
      value={value}
      onChange={onChange}
      type={type}
      className={cn(className, height, placeHolderColor, color)}
    />
  );
};
