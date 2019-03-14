import React from 'react';
import { connect } from 'react-redux';
import { addIssue } from '../../actions/index';

class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      notes: ''
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addIssue(this.state);
    this.setState({ name: '', category: '', notes: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={this.state.name} text="text" placeholder="Name" onChange={this.handleChange} />
        <input name="category" value={this.state.category} text="text" placeholder="category" onChange={this.handleChange} />
        <input name="notes" value={this.state.notes} text="text" placeholder="notes" onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addIssue }
)(IssueForm);
