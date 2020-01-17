import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      jobTitle: ''
    }
  }



  submitJob = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log("HELLOOOO")
    console.log(this.state.jobTitle)
  }



  render() {
    return (

      <div className="homepage">
        <form onSubmit={(e) => {
          this.submitJob(e, { jobTitle: this.state.jobTitle })
        }}>
          <input type="textarea"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Job Title"
          />
          <input type="submit" />
        </form>
      </div>

    )
  }
}

export default Home;