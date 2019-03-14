import React from 'react';
import { connect } from 'react-redux';
import { editForm, editIssue } from '../../actions';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: {
        id: this.props.issue.id,
        name: this.props.issue.name,
        category: this.props.issue.category,
        notes: this.props.issue.notes
      }
    };
  }

  editIssueHandler = e => {
    e.preventDefault();
    this.props.editIssue(this.state.issue.id, this.state.issue);
    this.setState({
      issue: {
        name: '',
        category: '',
        notes: ''
      }
    });
  };

  changeHandler = e => {
    this.setState({
      issue: {
        ...this.state.issue,
        [e.target.name]: e.target.value,
        [e.target.category]: e.target.value,
        [e.target.notes]: e.target.value
      }
    });
  };
  render() {
    return (
      <form className="editForm" onSubmit={this.editIssueHandler}>
        <h1>Edit issue</h1>
        <input onChange={this.changeHandler} type="text" name="name" value={this.state.issue.name} placeholder="Name" />
        <br />
        <input onChange={this.changeHandler} type="text" name="category" value={this.state.issue.category} placeholder="category" />
        <br />
        <input onChange={this.changeHandler} type="notes" name="notes" value={this.state.issue.notes} placeholder="notes" />
        <br />
        <button variant="success" type="submit" onClick={() => this.props.editForm(this.props.issue)}>
          Update
        </button>
      </form>
    );
  }
}

function mstp(state) {
  return {
    issue: {
      id: state.issue.id,
      name: state.issue.name,
      category: state.issue.category,
      notes: state.issue.notes
    }
  };
}

export default connect(
  mstp,
  { editForm, editIssue }
)(EditForm);
