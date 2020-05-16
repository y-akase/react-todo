import React from 'react';
import { RootState } from '../../stores';
import { ShowMode, setMode } from '../../stores/todo';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

export default function ShowTabs() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.todo.mode);

  const handleChange = (event: React.ChangeEvent<{}>, newMode: ShowMode) => {
    dispatch(setMode(newMode));
  };

  return (
    <Paper square>
      <Tabs
        value={mode}
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
