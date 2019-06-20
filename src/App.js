import React, { Component } from 'react';
import './App.css';
import { observer, inject } from "mobx-react"
import DevTools from 'mobx-react-devtools';
import TodoList from './components/TodoList';
import Topic from './components/Topic';
import { compose } from 'recompose';
import ReviewApp from './components/ReviewApp';

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
    return (
      <div className="container">
        <ReviewApp />
        <DevTools />
        <header className="App-header">
          <Topic />
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
