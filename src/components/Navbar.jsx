import React from "react";
import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Logo from "../assets/logo_without_name.png";
import { Avatar } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
      <Box
        px={1}
        py={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        background={"#FFFFFF"}
      >
        <Image width={"48px"} p={1} src={Logo} alt="big-foot" />
        <Box
          display={"flex"}
          alignItems={"center"}
          fontWeight={400}
          gap={7}
          pr={2}
        >
          <Text
             color={"#000000"} _hover={{ color: "#555EAA", borderBottom: "2px solid black"}}
            cursor={"pointer"}
          >
            Home
          </Text>
          <Text
             color={"#000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Reduce Carbon Footprint
          </Text>
          <Text
             color={"000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Donate
          </Text>
          <Text
             color={"#000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            About Us
          </Text>
          <Text
             color={"#000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Contact Us
          </Text>
          <Text>
            <Menu>
              <MenuButton
                 color={"#000000"} _hover={{ color: "#26283E", bg: "transparent" }}
                _active={{ bg: "transparent" }}
                bg={"transparent"}
                as={Button}
                p={0}
                cursor={"pointer"}
              >
                {<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />}
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Menu>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;