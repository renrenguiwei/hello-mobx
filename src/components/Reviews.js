import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

function Review({ data }) {
  return (
    <li className="list-group-item">
      <div className="float-left">{ data.review }</div>
      <div className="float-right">1</div>
    </li>
  )
}

function Reviews() {
  console.log(this.props.ReviewStore);
  return (
    <div className="reviewsWrapper">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-comments"></i> Reviews
            </div>
            <ul className="list-group list-group-flush">
                {this.props.ReviewStore.reviewList.map((e, i) =>
                  <Review key={ i } data={ e } />
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject("ReviewStore")(observer(Reviews));
