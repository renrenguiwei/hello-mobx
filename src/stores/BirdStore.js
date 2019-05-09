import { observable, autorun, action, toJS, isObservableObject } from 'mobx';

class BirdStore {
  // object array map
  @observable birds;

  constructor() {
    this.birds = ["qiuzhi99"];
  }

  @action addBird = (bird) => {
    this.birds.unshift(bird);
  }
}

const store = new BirdStore();

export default store;

autorun(() => {
  console.log(store.birds);
})
