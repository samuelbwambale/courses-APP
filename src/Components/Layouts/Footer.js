import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

// export default a function that is going to recieve props
export default ({ categories }) => (
  <Paper style={{ margin: 10 }}>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
    <Tab label="All"/>
      {categories.map(category => (
        <Tab label={category} />
      ))}
    </Tabs>
  </Paper>
);
