import React, { Component } from 'react';
import { extendObservable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class TodoList extends Component {
  constructor() {
    super();

    extendObservable(this, {
      newTodoTitle: "",
      handleInputChange: action((e) => {
        this.newTodoTitle = e.target.value
      })
    })
  }

  // handleInputChange = (e) => {
  //   this.newTodoTitle = e.target.value;
  // }

  render() {
    return (
      <div>
        <form>
          New Todo:
          <input
            type="text"
            value={ this.newTodoTitle }
            onChange={ this.handleInputChange  }
          />
        </form>
        <hr />
        
      </div>
    );
  }
}

export default TodoList;
