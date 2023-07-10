import React, { useContext } from "react";
import { Avatar, Box, HStack, Spinner, Tag, TagLabel, TagLeftIcon, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAttachMoney, MdOutlineDoneAll } from "react-icons/md";
import appContext from "../context-api/appContext";

const Profile = () => {
  const { userProfile } = useContext(appContext);
  // console.log(userProfile);

  return (
    <Box p={6} display={"flex"} w={"100vw"} justifyContent={"space-evenly"}>
      {userProfile ? (
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
              name={userProfile.name}
              size="xl"
              src={userProfile.image}
              alt={userProfile.name}
              mb={3}
            />
            <Text color={"#0EA293"} fontSize={"24px"} fontWeight={500}>
              {userProfile.name}
            </Text>
            <Text fontSize={"16px"} fontWeight={500}>
              {userProfile.dob}
            </Text>
            <Text fontSize={"16px"} fontWeight={500}>
              {userProfile.sex[0].toUpperCase()}, {userProfile.age}
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Text fontSize={"18px"} fontWeight={500}>
              Contact
            </Text>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <AiOutlineMail size={"16px"} />
              <Text fontSize={"16px"} fontWeight={500}>
                {userProfile.email}
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <BiPhoneCall size={"16px"} />
              <Text fontSize={"16px"} fontWeight={500}>
                {userProfile.phone}
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <HiOutlineLocationMarker size={"16px"} />
              <Text fontSize={"16px"} fontWeight={500}>
                {userProfile.country}
              </Text>
            </Box>
          </Box>
        </Box>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
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
