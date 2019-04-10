import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText
} from "react-mdl";

export class ReactCard extends React.Component {
  render() {
    return (
      <div className="projects-grid">
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              height: "176px",
              background:
                "url(https://res.cloudinary.com/bvcrisostomo/image/upload/v1554489030/react-portfolio/rtds_logo.svg) center/cover"
            }}
          />
          <CardText>
            This is a project tracking web app for Redtomato Design Studio
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                href="https://github.com/bvcrisostomo2/RedtomatoDS"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                href="https://rtds-inhouse-web-brian.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            {/*<IconButton name="share" />*/}
          </CardMenu>
        </Card>

        {/*React Project 2 */}
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#ffff",
              height: "176px",
              background:
                "url(https://res.cloudinary.com/bvcrisostomo/image/upload/v1554489030/react-portfolio/Mountains.jpg) center/cover"
            }}
          >
            React Weather App
          </CardTitle>
          <CardText>
            Weather Application created using React and OpenWeather API
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                href="https://github.com/bvcrisostomo2/react-weather-app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </Button>
            <Button colored>
              <a
                href="https://bvcrisostomo2.github.io/react-weather-app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            {/*<IconButton name="share" />*/}
          </CardMenu>
        </Card>

        {/*React Project 2
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#ffff",
              height: "176px",
              background: "url(https://reactjs.org/logo-og.png) center/cover"
            }}
          >
            React Project #3
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>*/}
      </div>
    );
  }
}
