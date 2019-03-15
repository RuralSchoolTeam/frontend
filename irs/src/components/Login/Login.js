import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions';

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  };

  // Change push location after you set up the correct auth routes
  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.user)
    this.props.history.push('/')
  }

  render() {
    return (
      <Form onSubmit={this.handleLogin}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input 
            type="username" 
            name="username" 
            id="exampleEmail" 
            placeholder="Username" 
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="examplePassword" 
            placeholder="password placeholder" 
            onChange={this.handleChange} />
        </FormGroup>
        <button
          onClick={this.handleLogin}>
          Submit
        </button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
