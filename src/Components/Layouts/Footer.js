import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

// export default a function that is going to recieve props
export default ({ categories, category, onSelect }) => {
  const index = category
    ? categories.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "" : categories[index - 1]);
  };
  return (
    <Paper style={{ margin: 10 }}>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        scrollable
        centered
      >
        <Tab label="All" />
        {categories.map(category => (
          <Tab key={category} label={category} />
        ))}
      </Tabs>
    </Paper>
  );
};
