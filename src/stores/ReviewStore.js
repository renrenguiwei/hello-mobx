import React from 'react'
import { observable, decorate, action, computed } from 'mobx'

class ReviewStore {
  reviewList = [
    {review: '今天是个好日子吗？当然是喽！', star: 2},
    {review: '今天是个好日子吗？当然是喽！', star: 3}
  ]

  addReview = review => {
    console.log(review)
    this.reviewList.push(review)
  }

  get reviewsCount() {
    return this.reviewList.length
  }

  get starsAverage() {
    let sum = 0
    // let res = this.reviewList.map(e => sum += Number(e.star)) // 回传一个阵列，不太适用处理相加的
    this.reviewList.forEach(e => sum += Number(e.star))
    return Math.round(sum / this.reviewList.length * 100) / 100
  }

}
// 新写法，不用在class内声明可观察对象 @observable/action
decorate(ReviewStore, {
  reviewList: observable,
  addReview: action,
  reviewsCount: computed,
  starsAverage: computed
})

export default new ReviewStore()
