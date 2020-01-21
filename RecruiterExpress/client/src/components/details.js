import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.details}</p>
        <p>{this.props.requirement}</p>
        <span>{this.props.salary}</span>
      </div>
    )
  }
}
export default Details;
