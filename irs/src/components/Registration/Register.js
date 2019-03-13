import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { register } from '../../actions';

class Register extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      authLevel: '',
      organization: ''
    },
    data: {
      firstName: '',
      lastName: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  };

  handleRegister = () => {
    this.props.register(this.state.credentials)
  }

  render() {
    return (
      <Form onSubmit={this.handleRegister}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Username">Username</Label>
              <Input type="text" name="Username" placeholder="Username" value={this.state.credentials.username} onChange={this.handleChange} required />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.handleChange} required />
            </FormGroup>
          </Col>
        </Row>
        {/* <FormGroup>
          <Label for="auth">Username</Label>
          <Input type="text" name="auth" id="auth" placeholder="Username" required />
        </FormGroup>
        <FormGroup>
          <Label for="password">New Password</Label>
          <Input type="text" name="password" id="password" placeholder="Password" required />

          
        </FormGroup> */}
        <Button>Register</Button>
      </Form>
    );
  }
}

export default Register;
