import React from 'react'
import { Box } from '@chakra-ui/layout';
import Slider from "../components/Slider";
import Calculator from "../components/Calculator";
// import Contributors from '../components/Contributors';

const Homepage = () => {
  return (
    <Box p={4}>
      <Slider />
      <Calculator />
      {/* <Contributors /> */}
    </Box>
  )
}

export default Homepage