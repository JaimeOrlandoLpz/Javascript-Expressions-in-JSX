import React from "react";
import ReactDOM from "react-dom";

const fName = "Jaime";
const lName = "Orlando";
const luckyNumber = 11;

ReactDOM.render(
  <div>
    <h1>Hello, {fName + " " + lName}!</h1>
    <p> Your Lucky number is {Math.floor(Math.random() * 10) + 1}</p>
  </div>,
  document.getElementById("root")
);
