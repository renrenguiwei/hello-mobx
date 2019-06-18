import { observable, action, runInAction, flow } from 'mobx';

class TopicStore {
  @observable topics = [];
  @observable loading = true;
  @observable error;

  // 1
  loadTopics() {
    runInAction(() => {
      this.loading = true;
    })

    fetch("https://cnodejs.org/api/v1/topics")
      .then(response => response.json())
      .then(({ data }) => {
        this.saveTopics(data);
      })
  }

  // 2
  loadTopicsInline() {
    fetch("https://cnodejs.org/api/v1/topics1")
      .then(response => response.json())
      .then(({ data }) => {
        runInAction(() => {
          this.topics = data;
        })
      })
      .catch((err) => {
        runInAction(() => {
          this.error = err.message;
        })
      })
  }

  // 3
  loadTopicsAsync = async () => {
    try {
      const response = await fetch("https://cnodejs.org/api/v1/topics1");
      const json = await response.json();

      runInAction(() => {
        this.topics = json.data;
      })
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      })
    }
  }

  // 4
  loadTopicsGenerator = flow(function*() {
    runInAction(() => {
      this.loading = true;
      this.error = null;
    })

    try {
      const response = yield fetch("https://cnodejs.org/api/v1/1topics")
      const json = yield response.json();
      this.topics = json.data;
      this.loading = false;
    } catch (err) {
      console.log(err.message);
      this.error = err.message;
    }
  })

  @action
  saveTopics(data) {
    this.topics = data;
    this.loading = false;
  }
}

export default new TopicStore();
