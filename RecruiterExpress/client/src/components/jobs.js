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
          {this.state.jobs.map(jobs => (
            <div className="jobCard">
              <h3>{jobs.jobTitle}</h3>
              <h4>{jobs.jobId}</h4>
              <p>{jobs.jobDescription}</p>
              <p>{jobs.salary}</p>
              <p>{jobs.jobRequirements}</p>
            </div>
          ))}
        </div>
      
    );
  }
}
