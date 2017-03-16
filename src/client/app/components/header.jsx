import React from 'react';
import {render} from 'react-dom';

import Navbar from './navbar.jsx'

export default class Header extends React.Component{
    render(){
      return(
        <div>
          <Navbar link1="https://Twitter.com" link2="https://Facebook.com" link3="https://google.com"/>
          <img src="../client/app/assets/logo.png" />
          <h1>{this.props.children}</h1>
          <hr/>
        </div>
      );
    }
}
