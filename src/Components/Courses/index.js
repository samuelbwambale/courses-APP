import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";


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
export default ({
  courses,
  category,
  onSelect,
  course: { id, title = 'Welcome!', description= 'Please select a course from the list on the left.' },
  onCourseDelete
}) => (
  <Grid container>
    <Grid item sm={3}>
      <Paper style={styles.Paper}>
        {courses.map(([group, courses]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {courses.map(({ id, title }) => (
                  <ListItem
                    button
                    key={id}
                    onClick={() => onSelect(id)}>
                    <ListItemText
                      primary={title}
                    />
                    <ListItemSecondaryAction>
                      <IconButton>
                        <Delete onClick={() => onCourseDelete(id)}/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm={9}>
      <Paper style={styles.Paper}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          {title}
        </Typography>
        <Typography variant="subheading">
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
