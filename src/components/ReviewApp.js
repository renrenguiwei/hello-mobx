import React, {Component} from 'react';
import DashBoard from './DashBoard'
import Form from './Form'
import Reviews from './Reviews'

class ReviewApp extends Component {
  render() {
    return (
      <div>
        <Form/>
        <DashBoard/>
        <Reviews/>
      </div>
    );
  }
}

export default ReviewApp;
