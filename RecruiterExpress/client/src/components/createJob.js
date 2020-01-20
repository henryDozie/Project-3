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
      axios.post(
        `http://localhost:3001/jobs`,
        {
          jobTitle: this.state.jobTitle,
          jobId: this.state.jobId,
          jobDescription: this.state.jobDescription,
          jobRequirements: this.state.jobRequirements,
          location: this.state.location,
          salary: this.state.salary,
          recruiterId: this.state.currentUser.id
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
    console.log(this.props.currentUser);
    return (
      <form onSubmit={this.submitJob} className="jobCreateForm">
        <input
          type="textarea"
          name="jobTitle"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job Title"
          id="jobTitle"
        />
        <input
          type="textarea"
          name="jobId"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job ID"
          id="jobId"
        />
        <input
          type="textarea"
          name="jobDescription"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job Description"
          id="jobDescription"
        />
        <input
          type="textarea"
          name="jobRequirements"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job Requirements"
          id="jobRequirement"
        />
        <input
          type="textarea"
          name="location"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Location"
          id="jobLocation"
        />
        <input
          type="textarea"
          name="salary"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Salary"
          id="jobSalary"
        />
        <input
          type="submit"
          id="jobSubmit"
        />
      </form>
    );
  }
}
