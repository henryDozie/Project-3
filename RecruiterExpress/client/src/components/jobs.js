import React, { Component } from 'react';
import axios from 'axios';



export default class Jobs extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="jobOption">
        {this.props.jobs.map(job => (
          <div className="box">
            <div className="job">
              <h3>Position: {job.jobTitle}</h3>
              <p>Description: {job.jobDescription}</p>
              <p>City: {job.location}</p>
              <p>Requirements: {job.jobRequirements}</p>
              <p>Salary: {job.salary}</p>
              <button className="apply">DETAILS</button>
            </div>
            <button className="apply">APPLY</button>
          </div>
        ))}
      </div>
    )
  }
}