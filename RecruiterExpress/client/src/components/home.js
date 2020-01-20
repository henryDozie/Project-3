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
        location: null
      },
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
        isClicked: true
      })
      console.log(this.state.jobs.length);
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

        {this.state.isClicked ?
          <Jobs
            jobs={this.state.jobs} /> :

          <form onSubmit={this.submitJob}>
            <select onChange={this.handleChange} name="jobTitle" type="text" placeholder="Job Title" defaultValue="Job Title">
              <option disabled>Job Title</option>
              {this.props.jobTitle.map(job => (
                <><option>{job}</option></>))}
            </select>

            <select onChange={this.handleChange} name="location" type="text" placeholder="location" defaultValue="City">
              <option disabled>City</option>
              {this.props.location.map(city => (
                <><option>{city}</option></>))}
            </select>
            <input type="submit" />
          </form>}
      </div >

    )
  }
}

export default Home;