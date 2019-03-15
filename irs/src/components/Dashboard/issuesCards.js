import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../../actions/index';
import { Link } from 'react-router-dom';

// subcomponents
import Issue from './singleIssueCard';

class IssuesCards extends Component {
  componentDidMount() {
    this.props.getIssues();
  }


componentWillReceiveProps(nextProps) {
if (nextProps.issues.length !== this.props.issues.length) {
  this.props.getIssues()
}

}



  render() {
    console.log(this.props);
    if(!this.props.issues || !this.props.issues.length){
      return(
        <h4>Loading...</h4>
      )
     
  
  } else {
    return (
      <div className="App">
        <h1>Issues</h1>
        {this.props.issues.map(issue => (
          <Link to={`/issues/${issue.id}`}>
            <Issue issue={issue} key={issue.id} id={issue.id} />
          </Link>
        ))}
      </div>
    );
        }

  }
}

function mstp(state) {
  return {
    issues: state.issues,
    fetchingIssues: state.fetchingIssues,
    addingIssue: state.addingIssue,
    updatingIssue: state.updatingIssue,
    deletingIssue: state.deletingIssue,
    error: state.error,
    user: state.user
  };
}

export default connect(
  mstp,
  { getIssues }
)(IssuesCards);
