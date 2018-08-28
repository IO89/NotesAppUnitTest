import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Note from "./Note";

class App extends Component {
  constructor() {
    super();

    this.state = { notes: [] };
  }

  addNote = () => {
    const { notes } = this.state;
    const ids = this.state.notes.map(note => note.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    notes.push({ id: max_id + 1 });

    this.setState({ notes });
  };

  removeNote = id => {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  };

  render() {
    return (
      <div>
        <h2>Unit Test App</h2>
        <div className="notes-list">
          {this.state.notes.map(note => {
            return (
              <Note key={note.id} 
              note={note} 
              removeNote={this.removeNote}
               />
            );
          })}
        </div>
        <Button className="btn-add" onClick={this.addNote}>
          Add Note
        </Button>
      </div>
    );
  }
}

export default App;
