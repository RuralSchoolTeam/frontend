import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import { register } from '../../actions';

class Register extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      authLevel: '',
      organization: ''
    },
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  handleSelect = e => {
    console.log(e.target.value);
    this.setState({
      credentials: {
        ...this.state.credentials,
        authLevel: e.target.value
      }
    })
  }


  handleRegister = () => {
    if (this.state.credentials.authLevel !== ''){
    this.props.register(this.state.credentials)
    } else {
      alert("Please select your role")
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleRegister}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Username">Username</Label>
              <Input 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={this.state.credentials.username}
              onChange={this.handleChange} 
              required 
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input 
              type="current-password" 
              name="password" 
              placeholder="Password" 
              value={this.state.credentials.password} 
              onChange={this.handleChange} 
              required 
              />
            </FormGroup>
          </Col>
        </Row>
        <Form>
        
      </Form>
      <Form>
        <FormGroup>
          <Label for="exampleText">Organization Name</Label>
          <Input 
            type="textarea" 
            name="organization" 
            value={this.state.credentials.organization}
            onChange={this.handleChange}
            id="exampleText" 
            required/>
        </FormGroup>
      </Form>

      <div>
        <h1>Are you a School Admin or a Board Member?</h1>
        <FormGroup>
          <Label for="exampleSelect">Are you a School Admin or a Board Member?</Label>
          <Input 
            type="select" 
            name="authLevel" 
            id="exampleSelect" 
            onChange={this.handleSelect} 
            value={this.state.credentials.authLevel}>
              <option></option>
              <option value="School Admin">School Admin</option>
              <option value="Board Member">Board Member</option>
          </Input>
        </FormGroup>
    </div>
        <Button onSubmit={this.handleRegister}>Register</Button>
      </Form>
    );
  }
}

export default Register;
