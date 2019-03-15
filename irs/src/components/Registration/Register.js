import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { register } from '../../actions';

class Register extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      authLevel: '',
      organization: ''
    },
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  };

  handleSelect = e => {
    console.log(e.target.value);
    this.setState({
      user: {
        ...this.state.user,
        authLevel: e.target.value
      }
    })
  }


  handleRegister = () => {
    if (this.state.user.authLevel !== ''){
    this.props.register(this.state.user)
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
              value={this.state.user.username}
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
              value={this.state.user.password} 
              onChange={this.handleChange} 
              required 
              />
            </FormGroup>
          </Col>
        </Row>
      <div>
        <FormGroup>
          <Label for="exampleText">Organization Name</Label>
          <Input 
            type="textarea" 
            name="organization" 
            value={this.state.user.organization}
            onChange={this.handleChange}
            id="exampleText" 
            required/>
        </FormGroup>
      </div>

      <div>
        <FormGroup>
          <Label for="exampleSelect">Are you a School Admin or a Board Member?</Label>
          <Input 
            type="select" 
            name="authLevel" 
            id="exampleSelect" 
            onChange={this.handleSelect} 
            value={this.state.user.authLevel}>
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

export default connect(
  null,
  { register }
)(Register);
