import React from "react";
import img_1 from "../assets/img_1.jpg";
import { Box, Image, Img, Text } from "@chakra-ui/react";

const Slider = () => {
  return (
    <Box display={"flex"} >
      <Box>
      <Image width={"650px"} p={1} src={img_1} alt="big-foot"/>
      </Box>
      <Box p={3}>
        <Text
          color={"#000000"}
          fontSize={"38px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          lineHeight={"normal"}
        >
          Welcome To
        </Text>
        <Text
          color={"#06B5A3"}
          fontSize={"50px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          lineHeight={"normal"}
        >
          Big Foot
        </Text>
        <Text
          color={"#000000"}
          fontSize={"13px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          lineHeight={"normal"}
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
