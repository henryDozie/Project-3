import React, { Component } from "react";
import axios from "axios";

export default class CreateJob extends Component {
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
        location: null,
        jobDescription: null,
        jobRequirement: null,
        salary: null,
        jobId: null
      },
      isClicked: false,
      recruiterId: null
    };
  }
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

  // #######################################
  //THIS IS THE NEW SUBMITJOB POST BY RICO
  // #######################################

  submitJob = async e => {
    e.preventDefault();
    try {
      axios.post(`http://localhost:3001/jobs/${this.state.recruiterId}`, {
        //   jobTitle: this.state.jobTitle,
        //   jobId: this.state.jobId,
        //   jobDescription: this.state.jobDescription,
        //   jobRequirements: this.state.jobRequirements,
        //   location: this.state.location,
        //   salary: this.state.salary
        // });
        formdata
      }
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount = e => {
    this.setState({
      recruiterId: this.state.recruiterId
    });
  };

  render() {
    return (
      <div>
        <h1>Create Job</h1>
        <form onSubmit={e => this.submitJob(e)} className="jobCreateForm">
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
                <option value={job}>{job}</option>
              </>
            ))}
          </select>
          <input
            type="textarea"
            name="jobId"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Job ID"
            id="jobId"
            required
          />
          <input
            type="textarea"
            name="jobDescription"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Job Description"
            id="jobDescription"
            required
          />
          <input
            type="textarea"
            name="jobRequirements"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Job Requirements"
            id="jobRequirement"
            required
          />
          <select
            className="location"
            // onChange={this.handleChange}
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
          <input
            type="textarea"
            name="salary"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Salary"
            id="jobSalary"
            required
          />
          <input type="submit" id="jobSubmit" />
        </form>
      </div>
    );
  }
}
