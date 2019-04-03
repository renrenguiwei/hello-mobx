import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from "mobx-react"
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <DevTools />
        <header className="App-header">
          <p>{ this.props.store.birds[0] }</p>
        </header>
      </div>
    );
  }
}

export default App;
