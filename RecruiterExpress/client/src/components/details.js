import React, { Component } from "react";
class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.currentIndex === this.props.indexToShow && (
          <div className="companyDetails">
            <h4>Details:</h4> <p>{this.props.details}</p>
            <h4>Requirement:</h4>
            <p>{this.props.requirement}</p>
            <h4>Salary:</h4>
            <p>{this.props.salary}</p>
            <button className="close" onClick={this.props.close}>
              close
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default Details;
