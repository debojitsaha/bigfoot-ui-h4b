import React from "react";
import "../styles/Calculator.scss";
import { Box, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const Login = () => {
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
          <input type="text" name="name" id="name" placeholder=" " />
          <label htmlFor="text1">Email</label>
        </div>
        <div className="input-group">
          <input type="text" name="email" id="email" placeholder=" " />
          <label htmlFor="text1">Password</label>
        </div>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={2} justifyContent={"start"}>
        <Button
          bgColor={"#06B5A3"}
          color={"#FFFFFF"}
          _hover={{ bgColor: "#31DEC1" }}
        >
          Log in
        </Button>
        <Text>
            Already have a account? <Link> Sign Up</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
