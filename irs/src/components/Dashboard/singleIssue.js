import React, { Component } from 'react';
import axios from 'axios';

export default class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: null
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

  render() {
    if (!this.state.issue) {
      return <div>Loading Issue information...</div>;
    }

    const {} = this.state.issue;
    return (
      <div className="save-wrapper">
        <div className="Issue-card" />
        <div className="btn-danger">Edit</div>
      </div>
    );
  }
}
