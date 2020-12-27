// I'M UNSURE ABOUT LINE 39 AND HOW THAT CONDTIONAL LOGIC FUNCTIONS

import React from "react";

export default class Tabs extends React.Component {
  static defaultProps = { tabs: [] };

  state = {
    currentTabIndex: 0,
  };

  handleClick = (index) => {
    console.log("clicked!", { index });
    this.setState({ currentTabIndex: index });
  };

  renderButtons() {
    // map off the tabs array that was passed from App to make an array of buttons
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleClick(index)}>
        {tab.name}
      </button>
    ));
  }

  renderContent() {
    // access the first tab from props array
    const { currentTabIndex } = this.state;
    const currentTab = this.props.tabs[currentTabIndex];
    return <div className="content">{currentTab.content}</div>;
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
        {/* Display the first tab content by default */}
        {/* Use the logical and operator to only show content when the tabs array has length, this avoids this.props.currentTab from being undefined*/}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    );
  }
}
