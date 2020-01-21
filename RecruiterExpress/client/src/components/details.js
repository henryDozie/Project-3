import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Details: {this.props.details}</p>
        <p>Requirement:{this.props.requirement}</p>
        <span>Salary: {this.props.salary}</span>
      </div>
    )
  }
}
export default Details;
