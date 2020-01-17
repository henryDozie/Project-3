import React, { Component } from 'react';
import axios from 'axios';

export default class CreateJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  submitJobApplication = async (e) => {
    e.preventDefault();
    try {

      const jobApplication = axios.post(`http://localhost:3000/applicatios/${this.props.match.params.application_id}/applications`, { text: this.state.text });

    } catch (e) {
      console.error(e);
    }
  }



  render() {
    return (
      <form onSubmit={this.submitJobApplication}>
        <input
          type="textarea"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Job Application"
        />
        <input type="submit" />
      </form>
    )
  }
}