import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import IssueStatusButtons from "./IssueStatusButtons";
import { deleteIssue, editIssue } from "../../actions/index";

class Issue extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      category: "",
      status: "",
      username: "",
      isEditing: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchIssue(id);
  }

  fetchIssue = id => {
    axios
      .get(`https://international-rural-school.herokuapp.com/api/issues/${id}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          category: response.data.category,
          notes: response.data.notes,
          status: response.data.status,
          username: response.data.username
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  editIssueHandler = (e, issue) => {
    e.preventDefault();
    this.props.editIssue(this.props.match.params.id, issue);
    this.toggleEditing();
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleEditing = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };

  delete = () => {
    this.props.deleteIssue(this.props.match.params.id);
    this.props.history.push("/");
  };

  render() {
    if (!this.state.name) {
      return <div>Loading Issue information...</div>;
    }

    const { name, category, notes } = this.state;

    if (!this.state.isEditing) {
      return (
        <div className="d-flex justify-content-center">
          <div className="save-wrapper">
            <div className="Issue-card">
              <h2>{name}</h2>
              <div className="Issue-category">
                category: <em>{category}</em>
              </div>
              {notes !== null ? (
                <div className="Issue-notes">
                  notes: <strong>{notes}</strong>
                </div>
              ) : null}
            </div>

            {/* {localStorage.getItem('authLevel')==="admin" ? 
          <>
          <button onClick={this.toggleEditing}>Edit</button>
          <button onClick={this.delete}>Delete</button>
           </>
           : localStorage.getItem('authLevel')==="board" ?
          <IssueStatusButtons issue={{name: this.state.name, category: this.state.category, id: this.state.id, notes: this.state.notes, status: this.state.status}} changeHandler={this.changeHandler} />
          : null} */}

            <button onClick={this.toggleEditing}>Edit</button>
            <button onClick={this.delete}>Delete</button>
            <IssueStatusButtons
              issue={{
                name: this.state.name,
                category: this.state.category,
                id: this.state.id,
                notes: this.state.notes,
                status: this.state.status
              }}
              changeHandler={this.changeHandler}
            />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="d-flex justify-content-center">
            <form
              className="editForm"
              onSubmit={e =>
                this.editIssueHandler(e, {
                  name: this.state.name,
                  username: this.state.username,
                  category: this.state.category,
                  id: this.state.id,
                  notes: this.state.notes,
                  status: this.state.status
                })
              }
            >
              <h1>Edit issue</h1>
              <input
                onChange={this.changeHandler}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
              />
              <br />
              <input
                onChange={this.changeHandler}
                type="text"
                name="category"
                value={this.state.category}
                placeholder="category"
              />
              <br />
              <button variant="success">Update</button>
            </form>
            <button onClick={this.toggleEditing}>Cancel</button>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { deleteIssue, editIssue }
)(Issue);
