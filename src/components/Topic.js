import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("TopicStore")
@observer
class Topic extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Topic
        <button onClick={ () => this.props.TopicStore.loadTopics() }>Get Topic</button>
        <p>{ this.props.TopicStore.topics[0] && this.props.TopicStore.topics[0]["title"] }</p>
      </div>
    );
  }
}

export default Topic;
