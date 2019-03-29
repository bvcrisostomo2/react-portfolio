import React from "react";
import { Grid, Cell } from "react-mdl";
import { ResumeInfo } from "./resumeInfo";

export class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../images/man.png")}
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Brian Crisostomo</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr
              style={{
                borderTop: "3px solid #4568dc",
                width: "50%"
              }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultricies mi nec elit pretium porta. Ut pellentesque mollis magna
              et molestie. In elementum nulla vel augue tempor non ultrices
              mauris semper. Vestibulum nulla augue, volutpat at bibendum id,
              interdum ut ante.
            </p>
            <hr style={{ borderTop: "3px solid #4568dc", width: "50%" }} />
            <h5>Address</h5>
            <p>73 Dona Carmen Ave. Don Jose Heights, Quezon City Philippines</p>
            <h5>Cellphone</h5>
            <p>+639177830190</p>
            <h5>Email</h5>
            <p>bvcrisostomo2@gmail.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <ResumeInfo
              startYear={"2010 - 2014"}
              school={"Sisters of Mount Carmel Catholic School "}
              schoolDesc={"HIGHSCHOOL"}
            />
            <ResumeInfo
              startYear={"Aug 2014 - June 2018"}
              school={"University of Santo Tomas"}
              schoolDesc={"BS COMPUTER SCIENCE MAJOR IN DATA ANALYTICS"}
            />
            <hr style={{ borderTop: "3px solid #b06ab3" }} />
            <h2>Experiences</h2>
            <ResumeInfo
              startYear={"Jan 2018 - Present"}
              school={"Red Tomato Design Studio "}
              schoolDesc={"CO-OWNER: SOFTWARE ENGINEER"}
            />
            <ResumeInfo
              startYear={"Jun 2017 - Aug 2017 "}
              school={"UnionBank of the Philippines"}
              schoolDesc={"INTERN"}
            />
            <hr style={{ borderTop: "3px solid #b06ab3" }} />
            <h2>Competencies</h2>
            <ResumeInfo
              startYear={"Programming"}
              school={"Proficient in"}
              schoolDesc={"Python, ReactJs, Javascript, HTML/CSS, Bootstrap"}
            />
            <ResumeInfo
              startYear={"Computer"}
              school={"Experienced in"}
              schoolDesc={
                "Experienced in using MS Office and Adobe Illustrator,Adobe Photoshop, Tableau, Adobe Lightroom"
              }
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;

/*<div className="resume-body">
        <Grid className="resume-grid">
          <Cell col={12}>
            <div className="resume-name">
              <h1>Brian Paul V. Crisostomo</h1>
            </div>
          </Cell>
        </Grid>
    </div>*/
