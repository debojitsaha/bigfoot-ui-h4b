import React, { useState } from "react";
import AppContext from "./appContext";

const AppState = (props) => {
  // declare your states here
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, loading, setLoading }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
