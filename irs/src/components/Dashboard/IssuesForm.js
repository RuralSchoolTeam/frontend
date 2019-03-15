import React from "react";
import { connect } from "react-redux";
import { addIssue } from "../../actions/index";

import moment from "moment";

class IssueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      logDate: parseInt(moment().format("YYYYMMDD")),
      status: "ignored",
      username: "Josh Disney"
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addIssue(this.state);
    this.setState({ name: "", category: "", username: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3 className="d-flex justify-content-center">Add a new Issue</h3>
        <div className="d-flex justify-content-center">
          <input
            name="name"
            value={this.state.name}
            text="text"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            name="category"
            value={this.state.category}
            text="text"
            placeholder="category"
            onChange={this.handleChange}
          />
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { addIssue }
)(IssueForm);
