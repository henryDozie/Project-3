import React, { Component } from 'react';
import axios from 'axios';
import Jobs from "./jobs";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      text: '',
      formData: {      
        jobTitle: null,
        location: null,
      },
      jobTitle: ['Software Engineer', 'Architect', 'Computer Science'],
      location: ['New York', 'New Jersey', 'Conneticut', 'Virginia', 'Orlando'],
      isClicked: false
    }
  }


  submitJob = async e => {
    e.preventDefault();
    const formData = this.state.formData;
    try {
      console.log(formData.location)
      const response = await axios.get(`http://localhost:3001/jobs/job-titles/${formData.jobTitle}/${formData.location}`);
      this.setState({
        jobs: response.data,
        isClicked: true,
      })
      console.log(this.state.jobs);
    } catch (e) {
      console.error(e);
    }

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



  render() {
    return (

      <div className="homepage">
        <form className="search" onSubmit={this.submitJob}>
          <select className="jobTitle" onChange={this.handleChange} name="jobTitle" type="text" placeholder="Job Title" defaultValue="Job Title">
            <option disabled>Job Title</option>
            {this.state.jobTitle.map(job => (
              <><option>{job}</option></>))}
          </select>

          <select className="location" onChange={this.handleChange} name="location" type="text" placeholder="location" defaultValue="City">
            <option disabled>City</option>
            {this.state.location.map(city => (
              <><option>{city}</option></>))}
          </select>
          <button id="button">SUBMIT</button>
        </form>

        {this.state.jobs.map(job=>(
            <div>
            {job.jobTitle}
            {job.location}
            </div>
        ))}
      </div >

    )
  }
}

export default Home;