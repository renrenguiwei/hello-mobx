import { decorate, observable } from 'mobx'

class ReviewStore {
  reviewList = [
    {review: "This is a nice article", stars: 2},
    {review: "A lovely review", stars: 4},
  ];
}

decorate(ReviewStore, {
  reviewList: observable
})

export default new ReviewStore();
