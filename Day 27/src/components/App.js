import React from "react";
import { connect } from "react-redux";
import { addItems } from "../actions";

const App = ({ qty, dispatch }) => {
  let input, item;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    item = {
      text: input.value
    };
    dispatch(addItems(item));
    input.value = "";
  };

  return (
    <div className={"wrapper"}>
      <h1 className="heading">TODOS</h1>
      <form onSubmit={handleSubmit}>
        <div className={"div-wrapper"}>
          <label className="lbl">Todo: </label>
          <input type="text" name="name" ref={(node) => (input = node)} />
        </div>
        <div className={"div-wrapper"}>
          <label>&nbsp;</label>
          <input className="inpt_btn" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default connect()(App);
