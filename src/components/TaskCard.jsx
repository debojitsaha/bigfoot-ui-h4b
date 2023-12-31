import React from "react";
import Badge_1 from "../assets/Badge_1.png";
import { Text, Box, Card, CardHeader, CardBody, CardFooter, Avatar, Divider, Heading, ButtonGroup, Button } from '@chakra-ui/react'

const TaskCard = ({ data }) => {
  // console.log(data);
  return (
    <Box p={3}>
      <Card maxW="sm" boxShadow={"0px 0px 8px 0px rgba(0, 0, 0, 0.25)"}>
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {
            <Avatar
              name="Badge_1"
              src={Badge_1}
              size={"2xl"}
              alignSelf={"center"}
            />
          }
          <Box display={'flex'} flexDirection={'column'} mt="6" spacing="3">
            <Heading size="md">{data.title}</Heading>
            <Text>{data.description}</Text>
          </Box>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" alignItems={'center'} fontWeight={500}>
            <Button variant="solid" bgColor={"#31DEC1"} color={'white'} _hover={{ bgColor: "#1aab92" }}>
              Complete
            </Button>
            <Text variant="ghost">
              Your Rank for this task: {data.rank}
            </Text>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default TaskCard;
