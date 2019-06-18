import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("TopicStore")
@observer
class Topic extends Component {
  componentDidMount() {
    this.props.TopicStore.loadTopics()
  }
  render() {
    console.log(this.props);
    const store = this.props.TopicStore;
    let data;
    if (store.error) {
      data = store.error
    } else if (store.loading) {
      data = "loading..."
    } else {
      data = store.topics[0] && store.topics[0]["title"]
    }
    return (
      <div>
        Topic
        <button onClick={ () => this.props.TopicStore.loadTopicsInline() }>Get Topic</button>

        <p>{ data }</p>
      </div>
    );
  }
}

export default Topic;
