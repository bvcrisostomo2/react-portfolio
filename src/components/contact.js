import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brian Crisostomo</h2>
            <img
              src={require("../images/man.png")}
              alt="avatar"
              style={{ height: "215px" }}
            />
            {/*<p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultricies mi nec elit pretium porta. Ut pellentesque mollis magna
              et molestie. In elementum nulla vel augue tempor non ultrices
              mauris semper. Vestibulum nulla augue, volutpat at bibendum id,
              interdum ut ante.
    </p>*/}
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-list">
                    <i class="fas fa-envelope-square" aria-hidden="true" />
                    bvcrisostomo2@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-list">
                    <i class="fab fa-skype" aria-hidden="true" />
                    bvcrisostomo
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="contact-list">
                    <i className="fas fa-phone-square" aria-hidden="true" />
                    +639177830190
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
