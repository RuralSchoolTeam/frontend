import React from 'react';

const singleIssueCard = props => {
  return (
    <div>
      <h3>
        {props.issue.name} {props.issue.category} {props.issue.notes}
      </h3>
    </div>
  );
};

export default singleIssueCard;
