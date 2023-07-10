import React, { useContext } from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo_without_name.png";
import { Avatar } from "@chakra-ui/react";
import appContext from "../context-api/appContext";

const Navbar = () => {
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { userProfile } = useContext(appContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
  };

  const handleLoginRoute= ()=> {
    navigate("/login")
  }

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
          <NavLink
            to="/"
            color={"#000000"}
            _hover={{ color: "#555EAA", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Home
          </NavLink>
          <NavLink
            to="/#about"
            color={"#000000"}
            _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            About Us
          </NavLink>
          <NavLink
            to="reducecf"
            color={"#000000"}
            _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Reduce Carbon Footprint
          </NavLink>
          <NavLink to="donate"
            color={"000000"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Donate
          </NavLink>
          <NavLink
            to="contact"
            color={"#000000"}
            _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Contact Us
          </NavLink>
          {authToken ? (
            <Menu>
              <MenuButton
                color={"#000000"}
                _hover={{ color: "#26283E", bg: "transparent" }}
                _active={{ bg: "transparent" }}
                bg={"transparent"}
                as={Button}
                p={0}
                cursor={"pointer"}
              >
                {
                  <Avatar
                    name={userProfile?.name}
                    src={userProfile?.image}
                    alt={userProfile?.name}
                  />
                }
              </MenuButton>
              <MenuList>
                <NavLink to="profile">
                  <MenuItem>Profile</MenuItem>
                </NavLink>
                <NavLink>
                  <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
          ) : (
            <Button
              bgColor={"#06B5A3"}
              color={"#FFFFFF"}
              _hover={{ bgColor: "#31DEC1" }}
              onClick={handleLoginRoute}
            >
              Log in/Sign Up
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
