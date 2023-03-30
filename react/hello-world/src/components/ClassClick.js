import React, { Component } from 'react';

class ClassClick extends Component {
  clickHandler() {
    alert('You clicked the class component');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
