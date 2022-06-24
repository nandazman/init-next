import { converArrayIntoObjectWithPrefix } from "./utils/utils";

export const colors = [
  "identity",
  "blue-tosca",
  "orange",
  "dark-blue",
  "blue",
  "red",
  "green",
  "grey",
  "black",
  "primary",
  "secondary",
  "white",
  "background",
  "stroke-of-box",
  "line",
  "placeholder",
  "disable-field",
  "modal",
];

export const bgColors = converArrayIntoObjectWithPrefix(colors, "bg-");
