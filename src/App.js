import React, { Component } from "react";
import "./App.css";
import { MyComponent, ThemeContext } from "./ThemeProvider";
import { Button } from "./Button";

function App() {
  return (
    <MyComponent>
      <div>
        <div>
          <ThemeContext.Consumer>
            {({ changeColor }) => <button onClick={changeColor}>Orange</button>}
          </ThemeContext.Consumer>

          <p>
            Hello world!!!
            <div>
              Do you want to click?
              <div>
                <Button />
              </div>
            </div>
          </p>
        </div>
      </div>
    </MyComponent>
  );
}

export default App;
