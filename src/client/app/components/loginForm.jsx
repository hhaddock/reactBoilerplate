import React from 'react';
import {render} from 'react-dom';

export default class SignIn extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    userName: '',
    password: ''
  };

  this.Update = this.Update.bind(this);
  }

  Update(){
    var usr = this.refs.un.value;
    var pass = this.refs.pw.value;
    console.log("User: " + usr + " Pass: " + pass);

    this.setState({
      userName: usr,
      password: pass
    })
  }

  render(){
    return (
      <div className="form-group">
        <div>Username: </div>
        <div className="tInput"><input className="form-control" ref="un" type="text" placeholder="Username" /></div>
        <div>Password: </div>
        <div className="tInput"><input className="form-control" ref="pw" type="Password" placeholder="Password" /></div>
        <div><button className="btn btn-danger" onClick={this.Update}>Log In</button></div>
      </div>
    );
  }
}
