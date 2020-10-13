import { observable } from 'mobx'

class TodoStore {
  id = Math.random()
  @observable title
  @observable finished = false

  constructor(title) {
    this.title = title
  }
}

// const store = new TodoStore() // 为何这样不可以？

export default TodoStore
