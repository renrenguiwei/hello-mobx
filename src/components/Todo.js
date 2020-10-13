import React from 'react'
import { action } from "mobx"
import { observer } from "mobx-react"

// 对于这里为何将整个 TodoStore store传入，比较疑惑
const Todo = observer(({todo}) => {
  console.log(todo)
  return (
    <div>
      <input
        type="checkbox"
        checked={ todo.finished }
        onChange={ action(() => {todo.finished = !todo.finished}) }
      />
      {todo.title}
    </div>
  )
})

export default Todo
