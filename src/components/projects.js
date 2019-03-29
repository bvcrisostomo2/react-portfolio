import React from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

import { ReactCard } from "./projectsCards/reactCard";
import { JavascriptCard } from "./projectsCards/javascriptCard";
import { MongoDbCard } from "./projectsCards/mongoDbCard";

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
    this.toggleCategories = this.toggleCategories.bind(this);
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <ReactCard />;
    } else if (this.state.activeTab === 1) {
      return <JavascriptCard />;
    } else if (this.state.activeTab === 2) {
      return <MongoDbCard />;
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
