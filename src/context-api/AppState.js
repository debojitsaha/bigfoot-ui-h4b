import React, { useState } from "react";
import AppContext from "./appContext";

const AppState = (props) => {
  // declare your states here
  const [user, setUser] = useState({ email: "", password: "" });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
