
import React, { Component } from 'react';
import axios from 'axios';

export default class Recruiters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recruiters: []
    }
  }
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3001/recruiters');
      console.log(response);
      this.setState({
        recruiters: response.data
      })
    } catch (e) {
      console.error(e);
    }
    // console.log(this.state)
  }

  // axios.get(`http://localhost:3001/jobs/${props.currentUser}`)


  render() {
    return (
      <div className="jobCardDiv">
        {this.state.recruiters.map(recruiters => (
          <div className="jobCard">
            <h3>{recruiters.name}</h3>
            <h4>{recruiters.rating}</h4>
            <p>{recruiters.jobCount}</p>
            <p>{recruiters.review}</p>
            <button>See Jobs</button>
          </div>
        ))}
      </div>
    )
  }
}