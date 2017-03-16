import React from 'react';
import {render} from 'react-dom';

export default class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1 className="">Welcome Back, {this.props.user}!</h1>
        <h3>Have a nice day!</h3>
      </div>
    );
  }
}
