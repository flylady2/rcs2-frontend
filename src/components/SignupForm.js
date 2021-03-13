import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/createUser'

class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    this.props.createUser(user)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Username</label>
          <input name="username" type="text" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Username" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>

      </form>

    );
  }

}
export default connect(null, {createUser})(SignupForm)
