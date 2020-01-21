import React, { Component } from "react";
import axios from "axios";
import Jobs from "./jobs";
export default class CreateJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: "",
      jobId: "",
      jobDescription: "",
      jobRequirements: "",
      location: "",
      salary: "",
      jobs: []
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitJob = async e => {
    e.preventDefault();
    try {
      const newJob = axios.post(
        `http://localhost:3001/jobs`,
        {
          jobTitle: this.state.jobTitle,
          jobId: this.state.jobId,
          jobDescription: this.state.jobDescription,
          jobRequirements: this.state.jobRequirements,
          location: this.state.location,
          salary: this.state.salary
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      const response = await axios.get(`http://localhost:3001/jobs/user/${this.state.jobId}`);
      this.setState({
        jobs: response.data
      })
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.submitJob} className="jobCreateForm">
        <select onChange={this.handleChange} name="jobTitle" type="text" placeholder="Job Title" defaultValue="Job Title">
          <option disabled>Job Title</option>
          {this.props.jobTitle.map(job => <>
            <option>{job}</option>
          </>)}
        </select>
        <input
          type="textarea"
          name="jobId"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job ID"
        />
        <input
          type="textarea"
          name="jobDescription"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job Description"
        />
        <input
          type="textarea"
          name="jobRequirements"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job Requirements"
        />
        <select onChange={this.handleChange} name="location" type="text" placeholder="Location" defaultValue="Location">
          <option disabled>Location</option>
          {this.props.location.map(city => <>
            <option>{city}</option>
          </>)}
        </select>
        <input
          type="textarea"
          name="salary"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Salary"
        />
        <input type="submit" />
            
        <Jobs
          jobs={this.state.jobs} />
      </form>
    );
  }
}
