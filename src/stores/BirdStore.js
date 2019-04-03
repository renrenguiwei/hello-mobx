import { observable, autorun, toJS, isObservableObject } from 'mobx';

class BirdStore {
  // object array map
  @observable birds = [];
}

const store = window.store = new BirdStore();

export default store;

autorun(() => {
  console.log('print');
  console.log(store.birds);
  console.log(toJS(store.birds));
  console.log(isObservableObject(store));
})
