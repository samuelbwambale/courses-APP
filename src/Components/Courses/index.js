import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

// export default a function that is going to recieve props
export default ({ courses }) => (
  <Grid container>
    <Grid item sm={3}>
      <Paper style={styles.Paper}>
        {courses.map(([category, courses]) => (
          <Fragment>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
              {category}
            </Typography>
            <List component="ul">
              {courses.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm={9}>
      <Paper style={styles.Paper}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          Welcome
        </Typography>
        <Typography variant="subheading">
          Please select a course from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
