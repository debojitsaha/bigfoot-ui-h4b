import { Box, Image, Square, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo_with_name.png";

const AboutUs = () => {
  return (
    <Box margin={8} >
      <Box display={"flex"} justifyContent={"center"}>
        <Text color={"#000000"} fontSize={"40px"} fontWeight={"500"} m={8}>
          About Us
        </Text>
      </Box>
      <Box bgColor={"#0EA293"} display={"flex"} justifyContent={"space-evenly"} p={4} borderRadius={"15px"} boxShadow={"0px 0px 8px 0px rgba(0, 0, 0, 0.25)"}>
        <Box bgColor={"white"} borderRadius={"50%"} p={3} marginTop={"-100px"}>
          <Image width={"210px"} src={Logo} alt="big-foot" />
        </Box>
        <Box width={{ base: "100%", md: "40%" }}>
          <Text color={"#FFFFFF"} fontSize={"16px"} fontWeight={"500"} >
            Welcome to Big Foot, your partner in carbon emission protection. We
            are committed to a sustainable future, offering innovative solutions
            to reduce your carbon footprint. Our experts provide tailored
            strategies, cutting-edge technologies, and insightful consultation
            to drive real results. Join us on the journey towards a greener
            world. Big Foot - Empowering Change.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
