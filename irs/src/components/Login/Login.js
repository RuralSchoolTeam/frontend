import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/actionCreators';

class Login extends React.Component {
  nameRef = React.createRef();
  passRef = React.createRef();

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" ref={this.nameRef} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" ref={this.passRef} />
        </FormGroup>
        <button
          onClick={event => {
            event.preventDefault();
            this.props.login(this.nameRef.current.value, this.passRef.current.value);
            this.nameRef.current.value = '';
            this.passRef.current.value = '';
          }}>
          Submit
        </button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
