import React from 'react';
import {render} from 'react-dom';

export default class Header extends React.Component{
    render(){
      return(
        <div>
          <img src="../client/app/assets/logo.png" />
          <h1>{this.props.children}</h1>
        </div>
      );
    }
}
