import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import CreateDialog from '../Courses/Dialog'

// export default a function that is going to recieve props
export default ({ categories, onCourseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{flex : 1}}>
        Course Database
      </Typography>
      <CreateDialog
      categories={categories}
      onCreate={onCourseCreate}
      />
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
