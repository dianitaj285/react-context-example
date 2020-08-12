import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class MyComponent extends Component {
  state = { color: "purple" };

  changeColor = () => {
    this.setState({ color: "orange" });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ color: this.state.color, changeColor: this.changeColor }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
