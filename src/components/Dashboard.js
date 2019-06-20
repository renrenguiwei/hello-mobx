import React, { Component } from 'react';

function Dashboard() {
  return (
    <div className="dashboardSection">
      <div className="row">
        <div className="col-md-6 col-xs-6">
          <div className="card text-white bg-primary mb-6">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <i className="fa fa-comments fa-5x"></i>
                </div>
                <div className="col-md-6 col-sm-6 text-right">
                  <p id="reviewCount">1</p>
                  <p className="announcement-text">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xs-6">
          <div className="card text-white bg-success mb-6">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <i className="fa fa-star fa-5x"></i>
                </div>
                <div className="col-md-6 col-sm-6 text-right">
                  <p id="averageScores">1</p>
                  <p className="announcement-text">Average Scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
