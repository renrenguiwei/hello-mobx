import React, { Component } from 'react'
import { extendObservable, action, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import Todo from '../components/Todo'

@inject('TopicStore')
@observer
class Topic extends Component {

  componentDidMount() {
    this.props.TopicStore.loadTopicsAsync()
  }

  render() {
    let store = this.props.TopicStore
    let data
    if (store.error) {
      data = store.error
    }else if (store.loading){
      data = 'loading…'
    } else {
      data = store.topic[0] && store.topic[0].username
    }

    return (
      <div>
        <div>Topic title: {data}</div>
        <button onClick={ () => store.loadTopicsAsync() }>Get Topic</button>
      </div>
    )
  }
}

export default Topic
