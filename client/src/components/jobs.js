
import React from 'react';
import { Link } from 'react-router-dom';

export default function Jobs(props) {
  return (
    <div>
      {props.namethis.map(name => (
        <div>{name}</div>
      ))}
    </div>
  )
=======
import React, { Component } from 'react';
import axios from 'axios';

export default class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    }
  }


  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3001/jobs');
      console.log(response);
      this.setState({
        jobs: response.data
      })
    } catch (e) {
      console.error(e);
    }
    console.log(this.state)
  }


  render() {
    return (
      <div>
        {this.state.jobs.map(jobs => (
          <div>
            <h3>{jobs.jobTitle}</h3>
            <h4>{jobs.jobId}</h4>
            <p>{jobs.jobDescription}</p>
            <p>{jobs.jobRequirements}</p>
          </div>
        ))}
      </div>
    )
  }
}