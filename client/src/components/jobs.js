import React, { Component } from "react";
import axios from "axios";

export default class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:3001/jobs");
      console.log(response);
      this.setState({
        jobs: response.data
      });
    } catch (e) {
      console.error(e);
    }
    console.log(this.state);
  }

  render() {
    return (
      
        <div className="jobCardDiv">
          {this.state.jobs.map(job => (
            <div className="jobCard">
              <h3>{job.jobTitle}</h3>
              <h4>{job.jobId}</h4>
              <p>{job.jobDescription}</p>
              <p>{job.salary}</p>
              <p>{job.jobRequirements}</p>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      
    );
  }
}