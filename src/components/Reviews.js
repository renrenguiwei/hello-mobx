import React, {Component} from 'react';
import { inject, observer } from 'mobx-react'

function Review({data}) {
  return (
    <li>
      <span>{data.review}</span>
      <span>{data.star}</span>
    </li>
  )
}

// @inject('ReviewStore')
// @observer
function Reviews() {
  console.log(this.props.ReviewStore)
  return (
    <div>
      <ul>
        {this.props.ReviewStore.reviewList.map((e, i) =>
          <Review key={i} data={e} />
        )}
      </ul>
    </div>
  );
}

export default inject('ReviewStore')(observer(Reviews));
