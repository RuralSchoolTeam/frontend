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
  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="name" name="firstName" id="firstName" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="name" name="lastName" id="lastName" placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="password">New Password</Label>
          <Input type="text" name="password" id="password" placeholder="Password" />
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    );
  }
}

export default Register;
