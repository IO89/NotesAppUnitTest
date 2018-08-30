import React from "react";
import { shallow } from "enzyme";
import Note from "./Note";

describe("Note", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { note: { id }, removeNote: mockRemove };
  const note = shallow(<Note {...props} />);

  it("renders properly", () => {
    expect(note).toMatchSnapshot();
  });
  it("initialize person and note in `state`", () => {
    expect(note.state()).toEqual({ person: "", note: "" });
  });

  describe("When typing in person input", () => {
    const person = "Danni";

    beforeEach(() => {
      note
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    it("updates the person `state`", () => {
      expect(note.state().person).toEqual(person);
    });
  });

  describe("When typing into note input", () => {
    const message = "Explain me voice recognition,please";

    beforeEach(() => {
      note
        .find(".input-note")
        .simulate("change", { target: { value: message } });
    });

    it("updates note in `state`", () => {
      expect(note.state().note).toEqual(message);
    });
  });

  describe("When clicking the `Remove note` button", () => {
    beforeEach(() => {
      note.find(".btn-remove").simulate("click");
    });

    it("calls removeNote callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
