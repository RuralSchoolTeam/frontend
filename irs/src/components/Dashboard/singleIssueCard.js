import React from 'react';
import { connect } from 'react-redux';
import { deleteIssue } from '../../actions/index';

const Issue = props => {
  const handleClick = () => {
    props.deleteIssue(props.id);
  };

  return (
    <div>
      <h3>
        {props.issue.name} {props.issue.category} {props.issue.username}
      </h3>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { deleteIssue }
)(Issue);
