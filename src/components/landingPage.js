import React from "react";
import { Grid, Cell } from "react-mdl";

export class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/*<img
              src={require("../images/man.png")}
              alt="avatar"
              className="avatar-img"
            />*/}
            <img
              src="https://res.cloudinary.com/bvcrisostomo/image/upload/v1568120514/react-portfolio/Grad_Pic.jpg"
              alt="photo"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>ReactJs Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | JavaScript | React.js | Python</p>
              <div className="social-links">
                {/*Github account */}
                <a
                  href="https://github.com/bvcrisostomo2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/brian-crisostomo-653144185/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  href="https://twitter.com/CrisostomoBrian"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
