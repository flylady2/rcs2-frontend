import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/loginUser'


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      ...this.state
    }
    //debugger;
    this.props.loginUser(user)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    );
  }

}
export default connect(null, {loginUser})(LoginForm)
