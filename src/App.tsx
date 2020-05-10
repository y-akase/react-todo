import React from 'react';
import styles from './App.module.scss';

interface IPropsApp {}
interface IStateApp {}
export default class App extends React.Component<IPropsApp, IStateApp> {
  constructor(props: IPropsApp) {
    super(props);
  }
  render() {
    return <div className={styles.App}></div>;
  }
}
