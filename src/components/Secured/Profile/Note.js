import React, { Component } from "react";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false, note: "" };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.setState({ active: true })}>
          {this.state.active ? "Submit" : "Add Note"}
        </button>
        {this.state.active ? (
          <div>
            <input
              onChange={e => this.handleChange(e)}
              name="note"
              placeholder="Note text"
              value={this.state.note}
            />
            <button
              onClick={() =>
                this.props.addNote(
                  parseInt(this.props.volunteerid),
                  this.props.userid,
                  this.props.eventid,
                  this.state.note
                )
              }
            >
              Save Note
            </button>
            <button onClick={() => this.setState({ active: false, note: "" })}>
              Cancel
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Note;
