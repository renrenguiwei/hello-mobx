import BirdStore from './BirdStore'
import TodoListStore from './TodoListStore'
import TopicStore from './TopicStore'
import ReviewStore from './ReviewStore'

// 1. 利用构造函数合并 store
// class Store {
//   constructor() {
//     this.BirdStore = BirdStore
//     this.TodoListStore = new TodoListStore()
//   }
// }

// 2. 简写方式输出 store
export default {
  BirdStore,
  // TodoListStore: new TodoListStore() // 更简写
  TodoListStore,
  TopicStore,
  ReviewStore
}
