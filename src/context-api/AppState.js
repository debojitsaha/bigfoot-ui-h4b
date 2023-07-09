import React from "react";
import AppContext from "./appContext";

const AppState = (props) => {
  // declare your states here
  return <AppContext.Provider>{props.children}</AppContext.Provider>;
};

export default AppState;
