import React from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/">
          <Image width={"48px"} p={1} src={Logo} alt="big-foot" />
        </NavLink>
        <Box
          display={"flex"}
          alignItems={"center"}
          fontWeight={400}
          gap={7}
          pr={2}
        >
          <NavLink to="/"
            color={"#000000"} _hover={{ color: "#555EAA", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Home
          </NavLink>
          <NavLink to="/#about"
            color={"#000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            About Us
          </NavLink>
          <NavLink to="reducecf"
            color={"#000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Reduce Carbon Footprint
          </NavLink>
          {/* <NavLink to="donate"
            color={"000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Donate
          </NavLink> */}
          <NavLink to="contact"
            color={"#000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Contact Us
          </NavLink>
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
              <NavLink to="profile">
                <MenuItem>Profile</MenuItem>
              </NavLink>
              <NavLink>
                <MenuItem>Log out</MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;