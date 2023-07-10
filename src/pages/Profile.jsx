import React, { useContext, useEffect } from "react";
import {
  Avatar,
  Box,
  HStack,
  Spinner,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAttachMoney, MdOutlineDoneAll } from "react-icons/md";
import appContext from "../context-api/appContext";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const { userProfile } = useContext(appContext);
  // console.log(userProfile);
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (!userProfile) {
      navigate("/");
    }
  }, [location, userProfile]);

  return (
    <Box p={6} display={"flex"} w={"100vw"} justifyContent={"space-evenly"}>
      <Box
        p={16}
        borderRadius={12}
        boxShadow={"0px 0px 7px 0px rgba(0, 0, 0, 0.25)"}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Avatar
            name={userProfile ? userProfile.name : "Login"}
            size="xl"
            src={userProfile ? userProfile.image : "No"}
            alt={userProfile ? userProfile.name : "No"}
            mb={3}
          />
          <Text color={"#0EA293"} fontSize={"24px"} fontWeight={500}>
            {userProfile ? userProfile.name : ""}
          </Text>
          <Text fontSize={"16px"} fontWeight={500}>
            {userProfile ? userProfile.dob : ""}
          </Text>
          <Text fontSize={"16px"} fontWeight={500}>
            {userProfile ? userProfile.sex[0].toUpperCase() : ""},{" "}
            {userProfile ? userProfile.age : ""}
          </Text>
        </Box>
        {userProfile && (
          <Box display={"flex"} flexDirection={"column"}>
            <Text fontSize={"18px"} fontWeight={500}>
              Contact
            </Text>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <AiOutlineMail size={"16px"} />
              <Text fontSize={"16px"} fontWeight={500}>
                {userProfile ? userProfile.email : ""}
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <BiPhoneCall size={"16px"} />
              <Text fontSize={"16px"} fontWeight={500}>
                {userProfile ? userProfile.phone : ""}
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <HiOutlineLocationMarker size={"16px"} />
              <Text fontSize={"16px"} fontWeight={500}>
                {userProfile ? userProfile.country : ""}
              </Text>
            </Box>
          </Box>
        )}
      </Box>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text color={"#0EA293"} fontSize={"28px"} fontWeight={500}>
            Earned Badges
          </Text>
          <HStack spacing={1}>
            <Tag size={"md"} variant="subtle" colorScheme="cyan">
              <TagLeftIcon as={MdOutlineAttachMoney} />
              <TagLabel>50</TagLabel>
            </Tag>
            <Tag size={"md"} variant="solid" colorScheme="yellow">
              <TagLeftIcon as={MdOutlineDoneAll} />
              <TagLabel>6</TagLabel>
            </Tag>
          </HStack>
        </Box>
        <Wrap mt={2}>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              size="lg"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Kola Tioluwani"
              size="lg"
              src="https://bit.ly/tioluwani-kolawole"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Kent Dodds"
              size="lg"
              src="https://bit.ly/kent-c-dodds"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Ryan Florence"
              size="lg"
              src="https://bit.ly/ryan-florence"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Prosper Otemuyiwa"
              size="lg"
              src="https://bit.ly/prosper-baba"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Christian Nwamba"
              size="lg"
              src="https://bit.ly/code-beast"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Segun Adebayo"
              size="lg"
              src="https://bit.ly/sage-adebayo"
            />
          </WrapItem>
        </Wrap>
        <Wrap mt={2}>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              size="lg"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Kola Tioluwani"
              size="lg"
              src="https://bit.ly/tioluwani-kolawole"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Kent Dodds"
              size="lg"
              src="https://bit.ly/kent-c-dodds"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Ryan Florence"
              size="lg"
              src="https://bit.ly/ryan-florence"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Prosper Otemuyiwa"
              size="lg"
              src="https://bit.ly/prosper-baba"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Christian Nwamba"
              size="lg"
              src="https://bit.ly/code-beast"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Segun Adebayo"
              size="lg"
              src="https://bit.ly/sage-adebayo"
            />
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};

export default Profile;
