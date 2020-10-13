import { observable, autorun, action, computed, configure, toJS, isObservableObject } from 'mobx';

// false => never, true => observed, strict => always
// 在index入口文件内配置
// configure({ enforceActions: 'observed' }) // 强制使用action改变数据

class BirdStore {
  @observable birds

  // 在构造函数内初始化
  constructor() {
    this.birds = ['claus wong']
  }

  // 修改
  @action addBirds = bird => {
    this.birds.unshift(bird)
  }

  // 获取第一个
  // 1. 写法1
  // firstBird = () => {
  //   return `bonjour ${this.birds[0]}`
  // }

  // 2. 写法2 只读
  // computed 1）只要被读取 2）依赖数据发生变化，就会被触发
  @computed get firstBird() {
    // console.log('--- computed start ---')
    // return `bonjour ${this.birds[0]}` // proxy对象，在birds为空是不能读取0的属性，toJS强转
    return `bonjour ${toJS(this.birds)[0]}` // 自带库 toJS转
    // return `bonjour ${this.birds.slice()[0]}` // js自带方法转 slice
    // return `bonjour ${Array.from(this.birds)[0]}` // js自带方法转 Array.from
    // return `bonjour ${[...this.birds][0]}` // js自带方法转 ...扩展运算符
  }
}

const store = window.store1 = new BirdStore();

export default store;

// 1. 与computed计算属性关联，用到此计算属性中某一个，应付触发autorun触发执行
// 2. 且录入的值发生变化，会触发
// 3. store暴露在window下，console操作数据也会触发执行

// 结论：computed、render的触发条件比较好理解；autorun定义触发条件啥玩意儿
autorun(() => {
  // console.log('--- print start ---')
  // console.log(store.birds);
  // console.log(store.firstBird);
  // console.log('--- print end ---')
})
