import React, { Component } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  ControlLabel
} from "react-bootstrap";

class Note extends Component {
  constructor() {
    super();
    this.state = { person: "", note: "" };
  }
  render() {
    return (
      <div className='note'>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Note</ControlLabel>
            <FormControl
              className="input-note"
              onChange={event => this.setState({ note: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button 
        className='btn-remove'
        onClick={() => this.props.removeNote(this.props.note.id)}
        >
        Remove Note
        </Button>
      </div>
    );
  }
}

export default Note;
