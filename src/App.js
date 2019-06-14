import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from "mobx-react"
import DevTools from 'mobx-react-devtools';
import Fun from './Fun';
import TodoList from './components/TodoList';
import { compose } from 'recompose';

// @inject('BirdStore', 'TodoListStore')
// @observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.store.addBird(bird);
    // this.props.BirdStore.birds.unshift(bird);
  }

  get store() {
    return this.props.BirdStore
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <DevTools />
        <header className="App-header">
          <TodoList />

          { this.store.firstBird }

          <form onSubmit={ e => this.handleSubmit(e) }>
            <input type="text" placeholder="Enter your bird name" ref={ input => this.bird = input } />
            <button>Add Bird</button>
          </form>
        </header>
      </div>
    );
  }
}

export default compose(
  inject('BirdStore', 'TodoListStore'),
  observer
)(App);
