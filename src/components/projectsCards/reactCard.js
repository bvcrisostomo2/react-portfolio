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
              background: "url(https://reactjs.org/logo-og.png) center/cover"
            }}
          >
            React Project #1
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
        </Card>

        {/*React Project 2 */}
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#ffff",
              height: "176px",
              background: "url(https://reactjs.org/logo-og.png) center/cover"
            }}
          >
            React Project #2
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
        </Card>

        {/*React Project 3 */}
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
        </Card>
      </div>
    );
  }
}
