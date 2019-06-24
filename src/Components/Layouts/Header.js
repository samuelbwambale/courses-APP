import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

// export default a function that is going to recieve props
export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Course Database
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
