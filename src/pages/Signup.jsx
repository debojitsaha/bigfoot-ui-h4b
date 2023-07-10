import React, { useContext, useState } from "react";
import "../styles/Calculator.scss";
import { Box, Text, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import appContext from "../context-api/appContext";
import { CreateUser } from "../api/userService";

const Signup = () => {
  const { loading, setLoading } = useContext(appContext);
  const [createUser, setCreateUser] = useState();
  const navigate = useNavigate();

  const handleRegister = async () => {
    // console.log(user);
    if (
      createUser.email == "" ||
      createUser.password == "" ||
      createUser.phone == "" ||
      createUser.name == ""
    )
      console.log("Empty Fields");
    else {
      setLoading(true);
      const res = await CreateUser(createUser);
      localStorage.setItem("authToken", res.authToken);
      setLoading(false);
      navigate("/");
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
            name="name"
            id="name"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, name: e.target.value })
            }
          />
          <label htmlFor="text1">Name</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, email: e.target.value })
            }
          />
          <label htmlFor="text1">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, password: e.target.value })
            }
          />
          <label htmlFor="text1">Password</label>
        </div>
        <div className="input-group">
          <input
            type="date"
            name="dob"
            id="dob"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, dob: e.target.value })
            }
          />
          <label htmlFor="text1">DOB</label>
        </div>
        <div className="input-group">
          <input
            type="number"
            name="age"
            id="age"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, age: e.target.value })
            }
          />
          <label htmlFor="text1">Age</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="sex"
            id="sex"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, sex: e.target.value })
            }
          />
          <label htmlFor="text1">Sex</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, phone: e.target.value })
            }
          />
          <label htmlFor="text1">Phone Number</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="country"
            id="country"
            placeholder=" "
            onChange={(e) =>
              setCreateUser({ ...createUser, country: e.target.value })
            }
          />
          <label htmlFor="text1">Country</label>
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
          onClick={handleRegister}
        >
          Sign Up
        </Button>
        <Text>Already have a account?</Text>
        <NavLink to="/login">Log in</NavLink>
      </Box>
    </Box>
  );
};

export default Signup;
