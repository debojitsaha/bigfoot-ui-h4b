import React from "react";
import img_1 from "../assets/Homepage.png";
import { Box, Image, Text } from "@chakra-ui/react";

const Slider = () => {
  return (
    <Box display={"flex"} justifyContent={"space-evenly"} >
      <Box>
        <Image width={"650px"} p={1} src={img_1} alt="big-foot" ml={4} />
      </Box>
      <Box p={4} mt={8} ml={2}>
        <Text
          color={"#000000"}
          fontSize={"30px"}
          fontStyle={"normal"}
          fontWeight={"500"}
        >
          Welcome To
        </Text>
        <Text
          color={"#06B5A3"}
          fontSize={"50px"}
          fontStyle={"normal"}
          fontWeight={"500"}          
        >
          Big Foot
        </Text>
        <Text
          color={"#000000"}
          fontSize={"13px"}
          fontStyle={"normal"}
          fontWeight={"500"}          
          display={"flex"}
          width={"386px"}
          flexDirection={"column"}
          flexShrink={"0"}
        >
          Protecting our planet's future means safeguarding it from the carbon
          footprint we leave behind. Let us rise together, reduce emissions, and
          breathe life into a cleaner, greener world.
        </Text>
      </Box>
    </Box>
  );
};

export default Slider;
