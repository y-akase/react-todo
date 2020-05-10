import React from 'react';
import styles from './App.module.scss';
import AddField from './components/add-field';
import Tasks from './components/todos';

interface IPropsApp {}
interface IStateApp {}
export default class App extends React.Component<IPropsApp, IStateApp> {
  render() {
    return (
      <div className={styles.App}>
        <AddField />
        <Tasks />
      </div>
    );
  }
}
