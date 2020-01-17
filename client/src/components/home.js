import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div className="homepage">
        <form>
          <input
            type='text'
            name='username'
            placeholder='Job Title'
            value=''
            onChange='' />
          <input
            type='text'
            name='username'
            placeholder='City'
            value=''
            onChange='' />
          <input type='submit' placeholder='Search Job' />
        </form>
      </div>

    )
  }
}

export default Home;