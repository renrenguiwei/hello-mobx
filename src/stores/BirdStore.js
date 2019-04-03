import { observable, autorun, toJS, isObservableObject } from 'mobx';

class BirdStore {
  // object array map
  @observable birds = ['rails365'];
}

const store = new BirdStore();

export default store;

autorun(() => {
  console.log(store.birds);
})
