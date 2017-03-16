import React from 'react';
import {render} from 'react-dom';

export default class Navbar extends React.Component{
    render(){
      return(
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a target="_blank" href={this.props.link1}>Page 1</a></li>
                <li><a target="_blank" href={this.props.link2}>Page 2</a></li>
                <li><a target="_blank" href={this.props.link3}>Page 3</a></li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
}
