import cn from "classnames";

export const FormGroup = ({ children, className, inline = false }) => {
  return (
    <div
      className={cn(className || "", "form-group", {
        "form-group-inline": inline,
      })}
    >
      {children}
    </div>
  );
}