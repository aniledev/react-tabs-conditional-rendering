import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tabs from "./Tabs";

describe("Tabs Component", () => {
  // array of objects, each with a name and content property
  const tabsProp = [
    {
      name: "First tab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
    },
    {
      name: "Second tab",
      content:
        "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Third tab",
      content:
        "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
    },
  ];

  // start with a smoke test inside a describe block; does the component render
  it("should render without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test using react-test-renderer; does the component render properly
  it("should render the first tab by default", () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // make a new test for when there are no tabs passed as a prop to the component
  it("should render empty given no tabs", () => {
    // the shallow function in Enzyme will create a wrapper instance of our component that we can interact with.
    //Wrapper allows us to find nodes within this component's tree; also allows us to simulate events on nodes
    const wrapper = shallow(<Tabs />);
    toJson(wrapper);
  });
});
