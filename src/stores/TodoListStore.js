import { observable, computed, action, toJS } from 'mobx'
import TodoStore from './TodoStore'

class TodoListStore {
  @observable todos = []

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  @computed
  get firstTodo() {
    return toJS(this.todos)[0]
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoStore(title)) // 这种引用有点不懂不懂不懂
  }
}

const store = window.store2 = new TodoListStore() // 实例化后输出

export default store
