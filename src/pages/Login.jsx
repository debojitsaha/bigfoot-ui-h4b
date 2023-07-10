import React, { useContext } from "react";
import "../styles/Calculator.scss";
import { Box, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import appContext from "../context-api/appContext";
import showAlert from "../utils/showAlert";
import { LoginUser } from "../api/userService";

const Login = () => {
  const { user, setUser, loading, setLoading } = useContext(appContext);

  const handleLogin = async () => {
    // console.log(user);
    if (user.email == "" || user.password == "") console.log("Empty Fields");
    else {
      setLoading(true)
      const res = await LoginUser(user);
      localStorage.removeItem(authToken)
      localStorage.setItem("authToken", res.authToken)
      setLoading(false)
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={7}
      mx={"auto"}
      my={8}
      maxWidth={"650px"}
      p={6}
      w={"100vw"}
      borderRadius={"15px"}
      boxShadow={"0px 0px 8px 0px rgba(0, 0, 0, 0.25)"}
    >
      <Box w={"100%"} display={"flex"} flexDirection={"column"} gap={7}>
        <div className="input-group">
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
            onChange={(e) => setUser({ ...user, "email": e.target.value })}
          />
          <label htmlFor="text1">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            onChange={(e) => setUser({ ...user, "password": e.target.value })}
          />
          <label htmlFor="text1">Password</label>
        </div>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={2}
        justifyContent={"start"}
      >
        <Button
          bgColor={"#06B5A3"}
          color={"#FFFFFF"}
          _hover={{ bgColor: "#31DEC1" }}
          isLoading={loading}
          onClick={handleLogin}
        >
          Log in
        </Button>
        <Text>Don't have a account?</Text>
        <NavLink to="/signup">Sign Up</NavLink>
      </Box>
    </Box>
  );
};

export default Login;
