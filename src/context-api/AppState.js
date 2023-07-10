import React, { useEffect, useState } from "react";
import AppContext from "./appContext";
import { FetchUser } from "../api/userService";

const AppState = (props) => {
  // declare your states here
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState();

  const fetchUserProfile = async () => {
    const profile = await FetchUser();
    setUserProfile(profile);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) fetchUserProfile();
  }, [localStorage.getItem("authToken")]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        userProfile,
        setUserProfile
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
