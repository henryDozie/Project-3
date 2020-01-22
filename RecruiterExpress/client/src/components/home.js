import React, { Component } from "react";
import axios from "axios";
import Details from "./details";

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
      isClicked: false,
      isViewed: false,
      detailsToShow: ""
    };
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
      },

    }));
  };

  onClick = (e) => {
    // <Details
    //   jobDescription={job.jobDescription}
    //   jobRequirements={job.jobRequirements}
    //   salary={job.salary} />
    this.setState({
      isViewed: true
    })

  }

  close = e => {
    this.setState({
      isViewed: false
    })
  }

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
        </div>

        <div className="top3Jobs">
          {this.state.jobs.map((job, index) => (
            <div className="home3Jobs">
              <h3 key={index}>{job.jobTitle}</h3>
              <span>{job.location}</span>
              {this.state.isViewed &&
                <>
                  <button onClick={(e) => this.close}>close</button>
                </>
              }
              <Details
                currentIndex={index}
                indexToShow={this.state.detailsToShow}
                close={() => this.setState({ detailsToShow: -1 })}
                salary={job.salary}
                requirement={job.jobRequirements}
                details={job.jobDescription}
              />
              <button className="viewButton"
                onClick={() => {

                  this.setState({ detailsToShow: index }, () => console.log(job))
                }}>view
              </button>

            </div>
          ))}
          <div></div>
        </div>
      </div>
    );
  }
}

export default Home;