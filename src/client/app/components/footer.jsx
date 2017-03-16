import React from 'react';
import {render} from 'react-dom';

export default class Footer extends React.Component {
  render(){
    return(
      <a href={this.props.link}>{this.props.children}</a>
    );
  }
}
