import { observable, action, runInAction, flow } from 'mobx';

class TopicStore {
  @observable topics = [];

  // 1
  loadTopics() {
    fetch("https://cnodejs.org/api/v1/topics")
      .then(response => response.json())
      .then(({ data }) => {
        this.saveTopics(data);
      })
  }

  // 2
  loadTopicsInline() {
    fetch("https://cnodejs.org/api/v1/topics")
      .then(response => response.json())
      .then(({ data }) => {
        runInAction(() => {
          this.topics = data;
        })
      })
  }

  // 3
  loadTopicsAsync = async () => {
    const response = await fetch("https://cnodejs.org/api/v1/topics");
    const json = await response.json();

    runInAction(() => {
      this.topics = json.data;
    })
  }

  // 4
  loadTopicsGenerator = flow(function*() {
    const response = yield fetch("https://cnodejs.org/api/v1/topics")
    const json = yield response.json();

    this.topics = json.data;
  })

  @action
  saveTopics(data) {
    this.topics = data;
  }
}

export default new TopicStore();
