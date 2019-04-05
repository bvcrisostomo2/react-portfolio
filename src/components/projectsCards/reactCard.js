import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

export class ReactCard extends React.Component {
  render() {
    return (
      <div className="projects-grid">
        {/*React Project 1 */}
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#ffff",
              height: "176px",
              background:
                "url(https://res.cloudinary.com/bvcrisostomo/image/upload/v1554489030/react-portfolio/Mountains.jpg) center/cover"
            }}
          >
            React Project #1
          </CardTitle>
          <CardText>
            Weather Application created using React and OpenWeather API
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                href="https://github.com/bvcrisostomo2/react-weather-app/tree/gh-pages"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </Button>
            <Button colored>Live Demo</Button>
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
