import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  DialogContent
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form";

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
  categories, // from the store
  editMode,
  onSelect,
  course,
  course: {
    id,
    title = "Welcome!",
    description = "Please select a course from the list on the left."
  },
  onCourseDelete,
  onCourseEdit,
  onEdit
}) => (
  <Grid container>
    <Grid item xs={12} sm={4}>
      <Paper style={styles.Paper}>
        {courses.map(([group, courses]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {courses.map(({ id, title }) => (
                  <ListItem button key={id} onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton>
                        <Edit onClick={() => onCourseEdit(id)} />
                      </IconButton>
                      <IconButton>
                        <Delete onClick={() => onCourseDelete(id)} />
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
    <Grid item xs={12} sm={8}>
      <Paper style={styles.Paper}>
        {editMode ? (
          <DialogContent>
            <Form
            course={course}
            categories={categories}
            onSubmit={onEdit}
            />
          </DialogContent>
        ) : (
          <Fragment>
            <Typography variant="h5" style={{ marginBottom: 20 }}>
              {title}
            </Typography>
            <Typography variant="subheading">{description}</Typography>
          </Fragment>
        )}
      </Paper>
    </Grid>
  </Grid>
);
