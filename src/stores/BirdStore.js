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
  }

  // 只读
  @computed get firstBird() {
    return "第一只鸟的名字： " + toJS(this.birds)[0]
  }

  @computed get birdCount() {
    return toJS(this.birds).length;
  }
}

const store = window.store1 = new BirdStore();

export default store;

autorun(() => {
  console.log('print');
  console.log(store.firstBird);
  console.log(store.birds);
  console.log(store.birds[0]);
})
