import React, { Component } from 'react';
import { observer, inject } from "mobx-react"
import DevTools from 'mobx-react-devtools'
import { compose } from 'recompose'
import Fun from './FUN'
import TodoList from './components/TodoList'
import Topic from './components/Topic'
import ReviewApp from './components/ReviewApp'
import './App.css'

// 1. 写法一
@inject('BirdStore')
@observer // Excel表格的第三个单元格子
// @observer(['BirdStore', 'TodoListStore']) // 老旧 注入、观察者写法
class App extends Component {

  // 第三个单元格的方法
  handleSubmit = (e) => {
    e.preventDefault()
    const bird = this.bird.value
    // console.log(this.store.birds)
    // this.store.unshift(bird) // 常规操作
    this.store.addBirds(bird)         // 利用封装的的action操作
  }

  get store () {
    return this.props.BirdStore
  } // 别名 this.props.BirdStore，但没有get时需要加括号 this.store()

  // render：1. 当数据发生变化，但此数据没出现在DOM内，不会触发render
  //         2. 取[0]某一个值也不会触发

  // 第三个单元格的显示
  render() {
    // console.log('render')
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
        {/*<DevTools/>*/}
        {/*<Fun/>*/}
        {/*<Fun/>*/}
        {/*<TodoList/>*/}
        {/*<Fun/>*/}
        {/*<Topic/>*/}
        <ReviewApp />
        {/*<div>hello {this.store.birds[0]}</div>*/}

        {/*
        <div>{this.store.firstBird}</div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <div><input type="text" placeholder="enter the words" ref={input => this.bird = input} /></div>
          <button>Add Bird</button>
        </form>
        */}
      </div>
    );
  }
}

export default App
// 写法二、引入装饰器，第二种柯里化函数式写法
// export default inject('BirdStore')(observer(App))

// 写法三、引入recompose库，但Hook出现作者已经废弃，简化了柯里化写法
/*
export default compose(
  inject('BirdStore'),
  observer
)(App)
*/
