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

export class JavascriptCard extends React.Component {
  render() {
    return (
      <div className="projects-grid">
        {/*Javascript Project 1 */}
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#ffff",
              height: "176px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YgG7sgvnkGFHkmTN8PxkG0dtQEUF3J8C1yVBJ9uf5AFhFYdt) center/cover"
            }}
          >
            Javascript Project #1
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

        {/*Javascript Project 2 */}
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#ffff",
              height: "176px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YgG7sgvnkGFHkmTN8PxkG0dtQEUF3J8C1yVBJ9uf5AFhFYdt) center/cover"
            }}
          >
            Javascript Project #2
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

        {/*Javascript Project 3 */}
        <Card shadow={5} style={{ width: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#ffff",
              height: "176px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YgG7sgvnkGFHkmTN8PxkG0dtQEUF3J8C1yVBJ9uf5AFhFYdt) center/cover"
            }}
          >
            Javascript Project #3
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
