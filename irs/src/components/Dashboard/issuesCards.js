import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../../actions/index';

// subcomponents
import Issue from './singleIssueCard';
import IssuesForm from './IssuesForm';

class IssuesCards extends Component {
  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Issues</h1>
        <IssuesForm />
        <p>
          {this.props.issues.map(issue => {
            return <Issue issue={issue} key={issue.id} id={issue.id} />;
          })}
        </p>
      </div>
    );
  }
}

function mstp(state) {
  return {
    issues: state.issues,
    fetchingIssues: state.fetchingIssues,
    addingIssue: state.addingIssue,
    updatingIssue: state.updatingIssue,
    deletingIssue: state.deletingIssue,
    error: state.error
  };
}

export default connect(
  mstp,
  { getIssues }
)(IssuesCards);
