import React, { Component } from 'react'
import { extendObservable, action, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import Todo from '../components/Todo'

@inject('TodoListStore')
@observer
class TodoList extends Component {
  constructor() {
    super()

    // 在class内部声明 "可观察对象（变量）"，而非store
    /*
    extendObservable(this, {
      newTodoTitle: '',
      // 第2种写法，如果是严格模式enforceActions，那只有用action来改变数据
      handleInputChange : action((e) => {
        this.newTodoTitle = e.target.value
      })
    })
    */
  }

  // 在class内写 store的另一种方法
  @observable newTodoTitle = ''

  // 第1种写法
  @action
  handleInputChange = (e) => {
    this.newTodoTitle = e.target.value
  }

  @action
  handleToSubmit = (e) => {
    e.preventDefault()
    this.props.TodoListStore.addTodo(this.newTodoTitle)
    console.log(this.props.TodoListStore)
    this.newTodoTitle = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={ e => this.handleToSubmit(e) }>
          New Todo:
          <input
            type="text"
            value={ this.newTodoTitle }
            onChange={ this.handleInputChange }
          />
          <button>Add Task</button>
        </form>
        <hr/>

        <ul>
          { this.props.TodoListStore.todos.map(todo => (
            /* 这里为何要这样传？不能用展开运算符来传？ */
            <Todo key={todo.id} todo={todo}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
