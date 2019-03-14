import React from 'react';
import { connect } from 'react-redux';
import { deleteIssue, editForm } from '../../actions/index';

const Issue = props => {
  const handleClick = () => {
    props.deleteIssue(props.id);
  };

  return (
    <div>
      <h3>
        {props.issue.name} {props.issue.category} {props.issue.notes}
      </h3>
      <button onClick={() => props.editForm(props.issue)}>Edit</button>

      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { deleteIssue, editForm }
)(Issue);
