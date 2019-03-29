import React from "react";
import { Grid, Cell } from "react-mdl";

export class ResumeInfo extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <p>{this.props.startYear}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}>{this.props.school}</h4>
            <p>{this.props.schoolDesc}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ResumeInfo;
