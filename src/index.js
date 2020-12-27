import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* 
-build a Tabs component using both props and state together 
-it should accept one prop named tabs
-the tabs prop is an array of objects
-each item in the array has a name and content keys which are both strings
-the tabs prop should be used to generate a row of buttons
each button uses the tab object's name as its text
-when you click on a tab button, it opens the tab
-it shows a section underneath the buttons row
-the section contains the content for the opened tab
-the componentshould show the first tab content by default
*/
