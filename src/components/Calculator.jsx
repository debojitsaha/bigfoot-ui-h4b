import React from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import "../styles/Calculator.scss";

const Calculator = () => {
  return (
    <Box p={3}>
      <Text
        color={"#000000"}
        fontSize={"34px"}
        fontStyle={"normal"}
        fontWeight={"500"}
        lineHeight={"normal"}
      >
        Calculator
      </Text>
      <Text
        color={"#868686"}
        fontSize={"16px"}
        fontStyle={"normal"}
        fontWeight={"500"}
        lineHeight={"normal"}
      >
        Calculate your car emissions and make a contribution to climate
        protection:
      </Text>
      <Box py={3} display={"flex"} flexDirection={"column"} gap={3} justifyContent={"center"}>
        <Box
          gap={4}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div class="input-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder=" "
            />
            <label for="text1">Engine Size</label>
          </div>
          <div class="input-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder=" "
            />
            <label for="text1">Cylinder</label>
          </div>
          <div class="input-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder=" "
            />
            <label for="text1">Fuel Consumption City (L/100 km)</label>
          </div>
        </Box>
        <Box
          gap={4}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div class="input-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder=" "
            />
            <label for="text1">Fuel Consumption Highway (L/100 km)</label>
          </div>
          <div class="input-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder=" "
            />
            <label for="text1">Fuel Consumption Combination (L/100 km)</label>
          </div>
          <div class="input-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder=" "
            />
            <label for="text1">Fuel Consumption Combination (mpg)</label>
          </div>
        </Box>
        <Box
          gap={4}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div class="input-group">
            <select name="countrycode" id="countrycode">
              <option value="+91">+ 91</option>
              <option value="+1">+ 1</option>
              <option value="+54">+ 54</option>
              <option value="+61">+61</option>
            </select>
            <label for="text1">Fuel type</label>
          </div>
          <div class="input-group">
            <select name="countrycode" id="countrycode">
              <option value="+91">+ 91</option>
              <option value="+1">+ 1</option>
              <option value="+54">+ 54</option>
              <option value="+61">+61</option>
            </select>
            <label for="text1">Transmission Type</label>
          </div>
          <div class="input-group">
            <select name="countrycode" id="countrycode">
              <option value="+91">+ 91</option>
              <option value="+1">+ 1</option>
              <option value="+54">+ 54</option>
              <option value="+61">+61</option>
            </select>
            <label for="text1">Make Type</label>
          </div>
        </Box>
        <Box
          gap={4}
          display={"flex"}
          flex={"1 3"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div class="input-group" style={{ width: "34%" }}>
            <select name="countrycode" id="countrycode">
              <option value="+91">+ 91</option>
              <option value="+1">+ 1</option>
              <option value="+54">+ 54</option>
              <option value="+61">+61</option>
            </select>
            <label for="text1">Vehicle Class</label>
          </div>
          <div class="input-group" style={{ width: "69%" }}>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder=" "
            />
            <label for="text1">Your CO2 Consumption Rate</label>
          </div>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            bgColor={"#06B5A3"}
            color={"#FFFFFF"}
            _hover={{ bgColor: "#31DEC1" }}
            style={{ width: "200px" }}
          >
            Calculate
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
