import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: ""
    }
  }


  render() {
    return (
      <div>
        <span><Link to="/createJob">Post Job</Link><Link to="/jobs">Posted Jobs</Link></span>
        

      </div>
    )
  }
}