import React from "react";

export default class Tabs extends React.Component {
  static defaultProps = { tabs: [] };

  render() {
    // mapp off the tabs array that was passed from App to make an array of buttons
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ));

    // access the first tab from props array
    const currentTab = this.props.tabs[0];

    return (
      <div>
        {buttons}
        {/* Display the first tab content by default */}
        <div className="content">{currentTab.content}</div>
      </div>
    );
  }
}
