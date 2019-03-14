import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class IssueStatusButtons extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }


render() {
    return (
      <div>
        <h5>Project Status: {this.state.rSelected}</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick("Needs To Be Done")} active={this.state.rSelected === "Needs To Be Done"}>Needs To Be Done</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick("Scheduled")} active={this.state.rSelected === "Scheduled"}>Scheduled</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick("Completed")} active={this.state.rSelected === "Completed"}>Completed</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default IssueStatusButtons;
