import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      flag: false,
      searchedJobs: [],
      apiLoaded: false,
      jobTitle: ["Software Engineer", "Computer Science", "Architecture", "DJ"],
      location: [
        "New York",
        "New Jersey",
        "Conneticut",
        "Virginia",
        "Orlando",
        "LA",
        "Texas"
      ],
      formData: {
        jobTitle: null,
        location: null
      },
      isClicked: false
    };
  }
  handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }



  componentDidMount = async e => {
    const response = await axios.get("http://localhost:3001/jobs");
    let jobList = response.data;
    let latestJobs = [];
    console.log(jobList);
    for (let i = 0; i < 3; i++) {
      latestJobs.push(jobList[i]);
    }
    this.setState({
      jobs: latestJobs,
      apiLoaded: true
    });
  };

  submitJob = async e => {
    e.preventDefault();
    const formData = this.state.formData;
    try {
      console.log(formData.location);
      const response = await axios.get(
        `http://localhost:3001/jobs/job-titles/${formData.jobTitle}/${formData.location}`
      );
      this.setState({
        jobs: response.data,
        isClicked: true
      });
      console.log(this.state.jobs);
    } catch (e) {
      console.error(e);
    }
  };
  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <div className="homepage">
        <div className="homePageFormDiv">
          <form className="homepageForm" onSubmit={this.submitJob}>
            <select
              className="jobTitle"
              onChange={this.handleChange}
              name="jobTitle"
              type="text"
              placeholder="Job Title"
              defaultValue="Job Title"
            >
              <option disabled>Job Title</option>
              {this.state.jobTitle.map(job => (
                <>
                  <option>{job}</option>
                </>
              ))}
            </select>
            <select
              className="location"
              onChange={this.handleChange}
              name="location"
              type="text"
              placeholder="location"
              defaultValue="City"
            >
              <option disabled>City</option>
              {this.state.location.map(city => (
                <>
                  <option>{city}</option>
                </>
              ))}
            </select>
            <input type="submit" id="searchButton" />
          </form>
          {/* <img className="anim" src="https://images.pexels.com/photos/2705660/pexels-photo-2705660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800"/> */}
        </div>

        <div className="top3Jobs">
          {this.state.jobs.map(job => (
            <div className="home3Jobs">
              <h1>{job.jobTitle}</h1>
              <h3>{job.jobId}</h3>
              <h3>{job.salary}</h3>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    );
  }
}

export default Home;
