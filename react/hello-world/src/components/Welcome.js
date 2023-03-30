import React from 'react';
import { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.firstname} {this.props.lastname}!
      </h1>
    );
  }
}

class WelcomeTwo extends Component {
  render() {
    const { firstname, lastname } = this.props;
    return (
      <h1>
        Welcome {firstname} {lastname}!
      </h1>
    );
  }
}

export { Welcome, WelcomeTwo };
