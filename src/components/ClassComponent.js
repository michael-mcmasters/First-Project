import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Tampa", "Wilmington", "Philly", "Austin", "San Francisco"]
    }
  }

  render() {
    const city = this.state.names.map(name => <div>{name}</div>);

    return (
      <div>
        {city}
      </div>
    );
  }
}

export default ClassComponent;

