import React from "react";
import { render } from "react-dom";

export default class Tabs extends React.Component {
  static defaultProps = { tabs: [] };

  // map off the tabs array that was passed from App to make an array of buttons

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ));
  }

  renderContent() {
    // access the first tab from props array
    const currentTab = this.props.tabs[0];
    return <div className="content">{currentTab.content}</div>;
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
        {/* Display the first tab content by default */}
        {/* Use the logical and operator to only show content when the tabs array has length, this avoids this.props.currentTab from being undefined*/}
        {this.props.tabs.length && this.renderContent()}
      </div>
    );
  }
}
