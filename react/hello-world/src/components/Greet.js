import React from 'react';
import { Component } from 'react';

// function Greet()
//   return (
//     <div className="greeting" id="App">
//       <h1>Hello Robert!</h1>;
//       <h2>How are you today</h2>;
//       <div/>
//       };
//       }

// {/* class Greet extends Component {
// render() {
// return <h1>"Hello Robert!"</h1>;
// }
// } */

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.firstname} {props.lastname}!
      </h1>
      {props.children}
    </div>
  );
};

const GreetTwo = ({ firstname, lastname }) => {
  return (
    <div>
      <h1>
        Hello {firstname} {lastname}!
      </h1>
    </div>
  );
};

const GreetThree = (props) => {
  const { firstname, lastname } = props;
  return (
    <div>
      <h1>
        Hello {firstname} {lastname}!
      </h1>
    </div>
  );
};

export { Greet, GreetTwo, GreetThree };
