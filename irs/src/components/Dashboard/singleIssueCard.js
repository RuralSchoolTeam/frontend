
import React from 'react';

const singleIssueCard = props => {
  console.log(props);
  return (
    <div>
      <h3>
        {props.issue.name} {props.issue.category} {props.issue.status} {props.issue.logDate}
      </h3>
    </div>
  );
};

export default singleIssueCard;
