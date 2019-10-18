import React from "react";
import ReactDOM from "react-dom";
import BlockContainer from "./blockContainer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BlockContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
