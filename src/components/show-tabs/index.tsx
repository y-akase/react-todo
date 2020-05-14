import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default function ShowTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
        aria-label="target item"
      >
        <Tab label="All" />
        <Tab label="Incomplete" />
        <Tab label="Completed" />
      </Tabs>
    </Paper>
  );
}
