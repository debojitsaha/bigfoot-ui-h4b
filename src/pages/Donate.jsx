import React from "react";
import "../styles/Calculator.scss";
import { Box, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Solana from "../assets/Solana.png";
import { Image } from "@chakra-ui/image";
const Donate = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      bgColor={"#A6E7E0"}
      gap={7}
      mx={"auto"}
      my={8}
      maxWidth={"650px"}
      p={6}
      w={"100vw"}
      borderRadius={"15px"}
      boxShadow={"0px 0px 8px 0px rgba(0, 0, 0, 0.25)"}
    >
      <Box >
      <Box display={"flex"} justifyContent={"center"}>
      <Image width={"250px"} p={1} src={Solana} alt="Solana"/>
      </Box>
        <Box display={"flex"} flexDirection={"column"} gap={7}>
          <div className="input-group">
            <input type="text" name="name" id="name" placeholder=" " />
            <label htmlFor="text1">Recipient Address</label>
          </div>
          <div className="input-group">
            <input type="text" name="email" id="email" placeholder=" " />
            <label htmlFor="text1">Amount</label>
          </div>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={2} justifyContent={"center"}>
        <Button
          bgColor={"#000000"}
          color={"#FFFFFF"}
          _hover={{ bgColor: "#8F8F8F" }}
        >
          Claim Reward
        </Button>
      </Box>
    </Box>
  );
};

export default Donate;
