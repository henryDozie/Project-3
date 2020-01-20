import React, { Component } from 'react';
import axios from 'axios';
import Jobs from "./jobs";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      text: '',
      jobTitle: '',
      isClicked: false
    }
  }



  submitJob = async e => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/jobs/job-titles/${this.state.text}`);
      this.setState({
        jobs: response.data,
        isClicked: true
      })
    } catch (e) {
      console.error(e);
    }

  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    })

  }



  render() {
    return (

      <div className="homepage">

        {this.state.isClicked ?
          <Jobs
            jobs={this.state.jobs} /> :

          <form onSubmit={this.submitJob}>
            <input type="textarea"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Job Title"
            />
            <select onChange={this.handleChange} name="jobTitle" type="text" placeholder="Job Title" defaultValue="Job Title">
              <option disabled>Job Title</option>
              <option>Software Engineer</option>
              <option>Computer Science</option>
              <option>Architecture</option>
            </select>
            <input type="submit" />
          </form>}

      </div>

    )
  }
}

export default Home;