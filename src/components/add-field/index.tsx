import React from 'react';

interface IPropsApp {}
interface IStateApp {}
export default class App extends React.Component<IPropsApp, IStateApp> {
  constructor(props: IPropsApp) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}
