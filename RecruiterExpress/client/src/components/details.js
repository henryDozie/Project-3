import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (


      <React.Fragment>
        {this.props.currentIndex === this.props.indexToShow &&
          <div className="companyDetails">
            <p><h4>Details:</h4> {this.props.details}</p>
            <p><h4>Requirement:</h4>{this.props.requirement}</p>
            <span><h4>Salary:</h4>{this.props.salary}</span>
            <button onClick={this.props.close}>close</button>
          </div>
        }
      </React.Fragment>

    )
  }
}
export default Details;
