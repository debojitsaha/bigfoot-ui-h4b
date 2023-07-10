import React, { useContext, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import transmissionData from "../data/transmissionData.json";
import "../styles/Calculator.scss";
import { predictMLModel } from "../api/modelService";
import appContext from "../context-api/appContext";

const Calculator = () => {
  const [data, setData] = useState();
  const [co2level, setCo2level] = useState(0);
  const { loading, setLoading } = useContext(appContext);

  const predictCO2 = async () => {
    setLoading(true);
    const co2 = await predictMLModel(data);
    setLoading(false);
    setCo2level(co2);
  };

  return (
    <Box p={3}>
      <Text
        color={"#000000"}
        fontSize={"34px"}
        fontStyle={"normal"}
        fontWeight={"500"}
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
        protection
      </Text>
      <Box
        py={3}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        justifyContent={"center"}
      >
        <Box
          gap={4}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div className="input-group">
            <input
              type="text"
              name="engine"
              id="engine"
              placeholder=" "
              onChange={(e) => setData({ ...data, engine: e.target.value })}
            />
            <label htmlFor="text1">Engine Size</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="cylinder"
              id="cylinder"
              placeholder=" "
              onChange={(e) => setData({ ...data, cylinder: e.target.value })}
            />
            <label htmlFor="text1">Cylinder</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="city"
              id="city"
              placeholder=" "
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
            <label htmlFor="text1">Fuel Consumption City (L/100 km)</label>
          </div>
        </Box>
        <Box
          gap={4}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div className="input-group">
            <input
              type="text"
              name="highway"
              id="highway"
              placeholder=" "
              onChange={(e) => setData({ ...data, highway: e.target.value })}
            />
            <label htmlFor="text1">Fuel Consumption Highway (L/100 km)</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="combination"
              id="combination"
              placeholder=" "
              onChange={(e) =>
                setData({ ...data, combination: e.target.value })
              }
            />
            <label htmlFor="text1">
              Fuel Consumption Combination (L/100 km)
            </label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="combination_mpg"
              id="combination_mpg"
              placeholder=" "
              onChange={(e) =>
                setData({ ...data, combination_mpg: e.target.value })
              }
            />
            <label htmlFor="text1">Fuel Consumption Combination (mpg)</label>
          </div>
        </Box>
        <Box
          gap={4}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div className="input-group">
            <select
              name="countrycode"
              id="countrycode"
              onChange={(e) => setData({ ...data, make: e.target.value })}
            >
              <option value="Make_Type_Luxury">Luxury</option>
              <option value="Make_Type_Premium">Premium</option>
              <option value="Make_Type_Sports">Sports</option>
            </select>
            <label htmlFor="text1">Make type</label>
          </div>
          <div className="input-group">
            <select
              name="countrycode"
              id="countrycode"
              onChange={(e) => setData({ ...data, vehicle: e.target.value })}
            >
              <option value="Vehicle_Class_Type_Sedan">Sedan</option>
              <option value="Vehicle_Class_Type_SUV">SUV</option>
              <option value="Vehicle_Class_Type_Truck">Truck</option>
            </select>
            <label htmlFor="text1">Vehicle Type</label>
          </div>
          <div className="input-group">
            <select
              name="countrycode"
              id="countrycode"
              onChange={(e) =>
                setData({ ...data, transmission: e.target.value })
              }
            >
              {transmissionData.map((transmission) => {
                return (
                  <option key={transmission} value={transmission}>
                    {transmission}
                  </option>
                );
              })}
            </select>
            <label htmlFor="text1">Transmission</label>
          </div>
        </Box>
        <Box
          gap={4}
          display={"flex"}
          flex={"1 3"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <div
            className="input-group"
            style={{ width: "34%" }}
            onChange={(e) => setData({ ...data, fuel: e.target.value })}
          >
            <select name="countrycode" id="countrycode">
              <option value="Fuel_Type_E">Fuel E</option>
              <option value="Fuel_Type_N">Fuel N</option>
              <option value="Fuel_Type_X">Fuel X</option>
              <option value="Fuel_Type_Z">Fuel Z</option>
            </select>
            <label htmlFor="text1">Fuel</label>
          </div>
          <Box
            w={"69%"}
            bgColor={"white"}
            boxShadow={"0px 0px 7px 0px rgba(0,0,0,0.4)"}
            p={4}
            borderRadius={"8px"}
            fontWeight={500}
          >
            <Text>
              Your CO2 consumption rate: {co2level !== 0 ? co2level : ""}{" "}
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            bgColor={"#06B5A3"}
            color={"#FFFFFF"}
            _hover={{ bgColor: "#31DEC1" }}
            style={{ width: "200px" }}
            isLoading={loading}
            onClick={predictCO2}
          >
            Calculate
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
