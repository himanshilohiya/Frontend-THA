import React from "react";

const Input = (props) => (
  <div className="form">
    <input
      className="input"
      placeholder="Type your location..."
      onChange={props.onChange}
      required
    />
    <button type="submit" className="btn" onClick={props.onClick}>
      Check
    </button>
  </div>
);

export default Input;
