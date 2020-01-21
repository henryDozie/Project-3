import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      apiLoaded: false
    };
  }

  componentDidMount = async e => {
    const response = await axios.get("http://localhost:3001/jobs");
    let jobList = response.data;
    let latestJobs = [];
    console.log(jobList);
    for (let i = 0; i < jobList.length; i++) {
      latestJobs.push(jobList[i]);
    }
    this.setState({
      jobs: latestJobs,
      apiLoaded: true
    });
  };

  render() {
    return (
      <div className="homepage">
        <div className="homePageFormDiv">
          <form className="homepageForm">
            <input
              type="text"
              name="username"
              placeholder="Job Title"
              value=""
              className="homeInput1"
              value=""
              // onChange=""
            />
            <input
              type="text"
              name="username"
              placeholder="City"
              value=""
              className="homeInput2"
              value=""
              // onChange=""
            />
            <input type="submit" placeholder="Search Job" id="submitJob" />
          </form>
        </div>

        <div className="top3Jobs">
          {this.state.jobs.map(job => (
            <div className="home3Jobs">
              <h1>{job.jobTitle}</h1>
              <h3>{job.jobId}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
