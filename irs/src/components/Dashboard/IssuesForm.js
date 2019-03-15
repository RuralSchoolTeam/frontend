import React from 'react';
import { connect } from 'react-redux';
import { addIssue } from '../../actions/index';
import styled from 'styled-components';

import moment from 'moment';

const IssueFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  input {
    display: flex;
    margin: 0 10px;
  }
`;

class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      logDate: parseInt(moment().format('YYYYMMDD')),
      status: 'ignored',
      username: 'Josh Disney'
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addIssue(this.state);
    this.setState({ name: '', category: '', username: '' });
  };

  render() {
    return (
      <IssueFormWrapper>
        <form onSubmit={this.handleSubmit}>
          <h3 className="d-flex justify-content-center">Add a new Issue</h3>
          <div className="d-flex justify-content-center">
            <input name="name" value={this.state.name} text="text" placeholder="Name" onChange={this.handleChange} />
            <input name="category" value={this.state.category} text="text" placeholder="category" onChange={this.handleChange} />
            <button>Add</button>
          </div>
        </form>
      </IssueFormWrapper>
    );
  }
}

export default connect(
  null,
  { addIssue }
)(IssueForm);
