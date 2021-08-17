import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";

import NoteContainer from "./components/NoteContainer";

const Day34 = () => {
  return (
    <Provider store={store}>
      <NoteContainer />
    </Provider>
  );
};

export default Day34;
