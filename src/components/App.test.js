import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initialize the `state` with an empty list", () => {
    expect(app.state().notes).toEqual([]);
  });

  describe("When clicking `add button`", () => {
    const id = 1;

    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ notes: [] });
    });

    it("adds new note to `state`", () => {
      expect(app.state().notes).toEqual([{ id }]);
    });

    it("adds new note to rendered list", () => {
      expect(app.find(".notes-list").children().length).toEqual(1);
    });

    it("creates a Note component", () => {
      expect(app.find("Note").exists()).toBe(true);
    });

    describe("When person want to remove added note", () => {
      beforeEach(() => {
        app.instance().removeNote(id);
      });

      it("remove note from `state`", () => {
        expect(app.state().notes).toEqual([]);
      });
    });
  });
});
