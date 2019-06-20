import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="formSection">
        <div className="form-group">
          <p>Submit a Review</p>
        </div>
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" placeholder="Write a review" className="form-control" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="from-group">
                <select id="start" name="stars" className="form-control">
                  <option value="1">1 Star</option>
                  <option value="2">2 Star</option>
                  <option value="3">3 Star</option>
                  <option value="4">4 Star</option>
                  <option value="5">5 Star</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <button className="btn btn-success" type="submit">SUBMIT REVIEW</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
