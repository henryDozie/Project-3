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
              <h2>{job.jobTitle}</h2>
              <h5>{job.jobId}</h5>
              <h4>{job.jobDescription}</h4>
              <h4>{job.salary}</h4>
              <h4>{job.jobRequirements}</h4>
              <h3>{job.location}</h3>
            </div>
          ))}
        </div>
      
    );
  }
}
