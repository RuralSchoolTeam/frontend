import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import {connect} from 'react-redux';
import {editIssue} from "../../actions"

class IssueStatusButtons extends Component {
  
state = { cSelected: [] };

  

clickFunc=(e)=>{
  this.setState({ cSelected: e.target.value });
  this.props.changeHandler(e);
  this.props.editIssue(this.props.issue.id, this.props.issue)
}


render() {
    return (
      <div>
        <h5>Project Status: {this.state.cSelected}</h5>
        <ButtonGroup>
          <Button color="primary"  name="status" value="ignored" onClick={this.clickFunc} active={this.state.rSelected === "Ignored"}>Ignored</Button>
          <Button color="primary" name="status" value="scheduled" onClick={this.clickFunc} active={this.state.rSelected === "Scheduled"}>Scheduled</Button>
          <Button color="primary" name="status" value="completed" onClick={this.clickFunc} active={this.state.rSelected === "Completed"}>Completed</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default connect(null, {editIssue})(IssueStatusButtons);
