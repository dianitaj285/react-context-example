import React from "react";
import { ThemeContext } from "./ThemeProvider";

export function Button() {
  return (
    <ThemeContext.Consumer>
      {({ color }) => <button style={{ color: color }}>Click Me</button>}
    </ThemeContext.Consumer>
  );
}
