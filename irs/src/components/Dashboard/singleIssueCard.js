import React from 'react';
import moment from 'moment';

const singleIssueCard = props => {
  console.log(props);
  return (
    <div className="col-auto">
      <div className="card mt-4">
        <div className="card-title text-center">
          <h4>{props.issue.name}</h4>
        </div>
        <div className="card-body">
          <h5>Category: {props.issue.category}</h5>
          <h5>{props.issue.status !== 'ignored' ? props.issue.status : null}</h5>
        </div>
        <div className="card-footer text-muted">
          <p>{moment(`${props.issue.logDate}`, 'MMMDD YYYY HH:mm:ss a', 'en').fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default singleIssueCard;
