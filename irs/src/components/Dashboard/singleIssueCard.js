
import React from 'react';
import moment from "moment"


const singleIssueCard = props => {
  console.log(props);
  return (
    <div>
      <h3>
        {props.issue.name} {props.issue.category} {props.issue.status !=="ignored" ? props.issue.status: null} 
        {moment(`${props.issue.logDate}`, 'MMMDD YYYY HH:mm:ss a', 'en').fromNow()}
      </h3>
    </div>
  );
};

export default singleIssueCard;
