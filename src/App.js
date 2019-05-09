import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from "mobx-react"
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    console.log(this.props.BirdStore.birds.length);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <DevTools />
        <header className="App-header">
          <p>{ this.props.BirdStore.birds[0] }</p>

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
