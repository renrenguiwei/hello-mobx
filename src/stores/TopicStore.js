import { observable, action } from 'mobx';

class TopicStore {
  @observable topics = [];

  loadTopics() {
    fetch("https://cnodejs.org/api/v1/topics")
      .then(response => response.json())
      .then(({ data }) => {
        this.saveTopics(data);
      })
  }

  @action
  saveTopics(data) {
    this.topics = data;
  }
}

export default new TopicStore();
