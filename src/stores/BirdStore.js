import { observable, autorun, computed, action, toJS, isObservableObject } from 'mobx';

class BirdStore {
  // object array map
  @observable birds;

  constructor() {
    this.birds = [];
  }

  // 修改
  @action addBird = (bird) => {
    this.birds.unshift(bird);
    console.log(this.birds);
  }

  // 只读
  @computed get firstBird() {
    return "第一只鸟的名字： " + toJS(this.birds)[0]
  }

  @computed get birdCount() {
    return toJS(this.birds).length;
  }
}

const store = new BirdStore();

export default store;

autorun(() => {
  console.log(store.birds);
})
