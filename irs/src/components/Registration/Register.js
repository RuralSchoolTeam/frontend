import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state.credentials)
  }

  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="name" name="firstName" id="firstName" placeholder="First Name" required />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="name" name="lastName" id="lastName" placeholder="Last Name" required />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="username">Username</Label>

          <Input type="text" name="username" id="username" placeholder="Username" required />
        </FormGroup>
        <FormGroup>
          <Label for="password">New Password</Label>
          <Input type="text" name="password" id="password" placeholder="Password" required />

          
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    );
  }
}

export default Register;
