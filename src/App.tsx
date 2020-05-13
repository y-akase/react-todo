import React from 'react';
import AddField from './components/add-field';
import Todos from './components/todos';
import { Box, Container } from '@material-ui/core';

interface IPropsApp {}
interface IStateApp {}
export default class App extends React.Component<IPropsApp, IStateApp> {
  render() {
    return (
      <Container maxWidth="sm">
        <Box textAlign="center">
          <AddField />
          <Todos />
        </Box>
      </Container>
    );
  }
}
