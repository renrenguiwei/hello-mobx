import { observable, action, runInAction, flow } from 'mobx'

class TopicStore {
  @observable topic = []
  @observable loading = false
  @observable error = ''

  loadTopics = () => {
    fetch('https://5b87b1cd35589600143c1440.mockapi.io/api/v1/list')
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        if (+data.code === 200) {
          // this.renderData(data.data)
          // 2. 写法二  action内置写法
          runInAction(() => {
            this.topic = data.data
          })

        }
      });
  }

  // 此处修改observer必须经过action，上面的方法用action没效果
  // 1. 写法一
  @action
  renderData(data) {
    this.topic = data
  }

  // 3. 写法三 Async/await
  loadTopicsAsync = async() => {
    try{
      // loading用户体验
      runInAction(() => {
        this.loading = true
        this.error = ''
      })
      let response = await fetch('https://5b87b1cd35589600143c1440.mockapi.io/api/v1/list')
      let data = await response.json()
      if (+data.code === 200) {
        runInAction(() => {
          this.topic = data.data
          this.loading = false
        })
      }
    }catch (e) {
      console.dir(e)
      runInAction(() => {
        this.loading = false
        this.error = e.message
      })
    }
  }

  // 4. 写法四 flow generator写法
  loadTopicsGenerator = flow(function*() {
    let response = yield fetch('https://5b87b1cd35589600143c1440.mockapi.io/api/v1/list')
    let data = yield response.json()
    console.log(data)
    if (+data.code === 200) {
      // flow为mobx内置方法，可不用action直接修改
      this.topic = data.data
    }
  })
}

class Ticker {
  @observable tick = 0

  @action.bound // 强制绑定到所在class
  increment() {
    console.log(this)
    this.tick++ // 'this' 永远都是正确的
  }
}

const ticker = window.ticker = new Ticker()
// setInterval(ticker.increment, 1000) // setInterval默认指向window

export default new TopicStore()




















