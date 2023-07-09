import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BiLogoInstagram } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      bgColor={"#FBFADC"}
      p={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} gap={5}>
        <Text>Copyright @ 2023 </Text>
        <Text>Disclaimer </Text>
        <Text> Terms of Use </Text>
        <Text>Privacy Policy </Text>
      </Box>
      <Box display={"flex"} gap={4}>
        {<BiLogoInstagram size={"18px"}/>}
        {<AiFillTwitterCircle size={"18px"}/>}
        {<BsFacebook size={"18px"}/>}
      </Box>
    </Box>
  );
};

export default Footer;
