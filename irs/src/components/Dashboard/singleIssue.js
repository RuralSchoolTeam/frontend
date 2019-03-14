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

    const { name, category, notes, status } = this.state.issue;
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
          <h3>Actors</h3>

          {status.map(star => (
            <div key={star} className="Issue-star">
              {star}
            </div>
          ))}
        </div>
        <div className="btn-danger">Edit</div>
      </div>
    );
  }
}
