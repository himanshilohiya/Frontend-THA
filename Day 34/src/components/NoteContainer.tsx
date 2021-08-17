import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddNote, DeleteNote } from "../actions";
import { reducerType } from "../reducers";
const NoteContainer = () => {
  const [input, setInput] = useState<string>("");

  const notes: string[] = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="inpt">
        <input
          className="inptt"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          className="btn1"
          onClick={() => {
            if (input !== "") {
              dispatch(AddNote(input));
              setInput("");
            }
          }}
        >
          Add
        </button>
        <ul className="notes">
          {notes.length === 0 ? (
            <h2 className="heading">Click on Add to add notes</h2>
          ) : (
            notes.map((note: string, index: number) => (
              <li key={index}>
                <h3>
                  {note}{" "}
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(DeleteNote(index));
                    }}
                  >
                    Delete
                  </button>{" "}
                </h3>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default NoteContainer;
