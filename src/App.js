import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import "./styles/index.scss";
import AppState from "./context-api/State";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <AppState>
        <ChakraProvider>
        <Navbar/>
        <Slider/> 
        <Calculator/>        
        <Footer/>
        </ChakraProvider>
      </AppState>
    </>
  );
}

export default App;
