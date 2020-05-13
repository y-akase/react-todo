import React from 'react';
import AddField from './components/add-field';
import Todos from './components/todos';
import { Box } from '@material-ui/core';

interface IPropsApp {}
interface IStateApp {}
export default class App extends React.Component<IPropsApp, IStateApp> {
  render() {
    return (
      <Box textAlign="center">
        <AddField />
        <Todos />
      </Box>
    );
  }
}
