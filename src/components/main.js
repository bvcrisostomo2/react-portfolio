import React from "react";
import { Route, Switch } from "react-router-dom";
//Route Components
import { LandingPage } from "./landingPage";
import { AboutMe } from "./aboutMe";
import { Contact } from "./contact";
import { Projects } from "./projects";
import { Resume } from "./resume";

export class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/react-portfolio" component={LandingPage} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    );
  }
}
export default Main;
