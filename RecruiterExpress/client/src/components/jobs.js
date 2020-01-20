import React, { Component } from 'react';
import axios from 'axios';



export default class Jobs extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        {console.log("what is cooking?")}
        {this.props.jobs ?

          (this.props.jobs.map(job => (
            <div>
              {console.log('pos')}
              <h3>{job.jobTitle}</h3>
              <p>{job.jobDescription}</p>
              <p>{job.location}</p>
              <p>{job.jobRequirements}</p>
              <h1>{job.salary}</h1>
            </div>
          ))) :
          (<div>{console.log('neg')}</div>)
        }
      </div>
    )
  }
}