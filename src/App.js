import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from "mobx-react"
import DevTools from 'mobx-react-devtools';
import Fun from './Fun';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    // this.props.BirdStore.birds.unshift(bird);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <DevTools />
        <header className="App-header">
          <Fun />

          { this.props.BirdStore.firstBird }

          <form onSubmit={ e => this.handleSubmit(e) }>
            <input type="text" placeholder="Enter your bird name" ref={ input => this.bird = input } />
            <button>Add Bird</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
