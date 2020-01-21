import React, { Component } from "react";
import axios from "axios";

export default class CreateJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: "",
      jobId: "",
      jobDescription: "",
      jobRequirements: "",
      location: "",
      salary: ""
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
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.submitJob} className="jobCreateForm">
        <input
          type="textarea"
          name="jobTitle"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job Title"
        />
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
        <input
          type="textarea"
          name="location"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Location"
        />
        <input
          type="textarea"
          name="salary"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Salary"
        />
        <input type="submit" />
      </form>
    );
  }
}
