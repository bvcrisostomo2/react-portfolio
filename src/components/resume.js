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
                src="https://res.cloudinary.com/bvcrisostomo/image/upload/v1568120514/react-portfolio/Grad_Pic.jpg"
                alt="photo"
                className="avatar-img"
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Brian Crisostomo</h2>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            {/* <hr
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
            </p>*/}
            <hr style={{ borderTop: "3px solid #4568dc", width: "50%" }} />
            <h5>Address</h5>
            <p>Philippines</p>
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
              startYear={"Jul 2018 - March 2019"}
              school={"Red Tomato Design Studio "}
              schoolDesc={
                "SOFTWARE ENGINEER: Helped in the creation of the website using ReactJS, and Adobe Illustrator for the design and assets"
              }
            />
            <ResumeInfo
              startYear={"Jun 2017 - Aug 2017 "}
              school={"UnionBank of the Philippines"}
              schoolDesc={
                "INTERN: Spearheaded and developed the foundation of the project called U:bot, that was used by the HR department, in order to alleviate their massive inquiries. Participated in the Student Mentoring Program as intern "
              }
            />
            <hr style={{ borderTop: "3px solid #b06ab3" }} />
            <h2>Competencies</h2>
            <ResumeInfo
              startYear={"Programming"}
              school={"Proficient in"}
              schoolDesc={
                "ReactJS, JavaScript, Python, PL/SQL, Data Visualization, Machine Learning, Data Structures, MySQL, Java, Struts2, Hibernate, DB2, HTML5, CSS"
              }
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
