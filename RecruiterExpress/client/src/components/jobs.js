
import React, { Component } from 'react';
import axios from 'axios';

export default class Jobs extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        {this.props.jobs.map(job => (
          <div>
            <h3>{job.jobTitle}</h3>
            <p>{job.jobDescription}</p>
            <p>{job.salary}</p>
            <p>{job.jobRequirements}</p>
            <h1>{job.salary}</h1>
          </div>
        ))}
      </div>
    )
  }
}