import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";

// start with a smoke test inside a describe block
describe("Tabs Component", () => {
  it("should render without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
