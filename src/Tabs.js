import React from "react";

export default class Tabs extends React.Component {
  render() {
    // mapp off the tabs array that was passed from App to make an array of buttons
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ));
    return <div>{buttons}</div>;
  }
}
