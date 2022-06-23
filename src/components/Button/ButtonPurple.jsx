import cn from "classnames";
import { Button } from "./Button";

export const ButtonPurple = (props) => (
  <Button
    {...props}
    data-testid="component-button-purple"
    className={cn("bg-identity text-white", props.className)}
  />
);