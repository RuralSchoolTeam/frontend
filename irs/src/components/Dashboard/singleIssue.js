import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteIssue, editForm, editIssue } from '../../actions/index';

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {
        id: '',
        name: '',
        category: '',
        notes: ''
      },
      isEditing: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchIssue(id);
  }

  fetchIssue = id => {
    axios
      .get(`https://international-rural-school.herokuapp.com/api/issues/${id}`)
      .then(response => {
        this.setState(() => ({ issue: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  editIssueHandler = (e, issue) => {
    e.preventDefault();
    this.props.editIssue(issue.id, issue);
    this.toggleEditing();
  };

  changeHandler = e => {
    this.setState({
      issue: {
        ...this.state.issue,
        [e.target.name]: e.target.value
      }
    });
  };

  toggleEditing = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };

  render() {
    if (!this.state.issue) {
      return <div>Loading Issue information...</div>;
    }

    const { name, category, notes } = this.state.issue;

    if (!this.state.isEditing) {
      return (
        <div className="save-wrapper">
          <div className="Issue-card">
            <h2>{name}</h2>
            <div className="Issue-category">
              category: <em>{category}</em>
            </div>
            <div className="Issue-notes">
              notes: <strong>{notes}</strong>
            </div>
          </div>
          <button onClick={this.toggleEditing}>Edit</button>
        </div>
      );
    } else {
      return (
        <>
          <form className="editForm" onSubmit={e => this.editIssueHandler(e, this.state.issue)}>
            <h1>Edit issue</h1>
            <input onChange={this.changeHandler} type="text" name="name" value={this.state.issue.name} placeholder="Name" />
            <br />
            <input onChange={this.changeHandler} type="text" name="category" value={this.state.issue.category} placeholder="category" />
            <br />
            <input onChange={this.changeHandler} type="notes" name="notes" value={this.state.issue.notes} placeholder="notes" />
            <br />
            <button variant="success">Update</button>
          </form>
          <button onClick={this.toggleEditing}>Cancel</button>
        </>
      );
    }
  }
}

export default connect(
  null,
  { deleteIssue, editIssue }
)(Issue);
