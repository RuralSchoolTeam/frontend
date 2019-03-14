import React, { Component } from 'react';

class Issue extends Component {
  componentDidMount() {
    this.props.getIssues();
  }
  render() { 
    return ( 
      <div>
      <div>
        <h2>{this.issue.name}</h2>
        <p>{this.issue.catergory}</p>
        <p>{this.issue.username}</p>
        <p>{this.issue.notes}</p>
        <p>{this.issue.logDate}</p>
        <p>{this.issue.status}</p>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div>
        <toggle></toggle>
      </div>
      </div>
     );
  }
}
 
export default Issue;