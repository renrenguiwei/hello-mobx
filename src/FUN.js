import React from 'react'
import { inject, observer } from "mobx-react"

const Fun = inject('TodoListStore')(observer((props) => {
  console.log(props)
  return (
    <div>{props.TodoListStore.firstTodo}</div>
  )
}))

export default Fun
