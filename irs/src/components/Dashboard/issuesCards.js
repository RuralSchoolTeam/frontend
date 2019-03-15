import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../../actions/index';
import { Link } from 'react-router-dom';

// subcomponents
import Issue from './singleIssueCard';
import IssuesForm from './IssuesForm';
import styled from 'styled-components';

const IssueCardsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
  .example {
    width: 25%;
  }
`;

class IssuesCards extends Component {
  componentDidMount() {
    this.props.getIssues();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.issues.length !== this.props.issues.length) {
      this.props.getIssues();
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.issues || !this.props.issues.length) {
      return <h4>Loading...</h4>;
    } else {
      return (
        <IssueCardsStyle>
          <div className="App">
            <IssuesForm />

            <br />
            <h1>Issues</h1>
            <div className="row">
              {this.props.issues.map(issue => (
                <Link key={issue.id} to={`/issues/${issue.id}`}>
                  <Issue className="example" issue={issue} key={issue.id} id={issue.id} />
                </Link>
              ))}
            </div>
          </div>
        </IssueCardsStyle>
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
