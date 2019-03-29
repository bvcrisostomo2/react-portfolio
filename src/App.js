import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Main } from "./components/main";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Brian Crisostomo" scroll>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                {/*<Link to="/aboutMe">About Me</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contacts</Link>
              </Navigation>
            </Header>
            <Drawer title="Brian Crisostomo">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                {/*<Link to="/aboutMe">About Me</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contacts</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
