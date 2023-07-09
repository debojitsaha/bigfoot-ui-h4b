import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import "./styles/index.scss";
import AppState from "./context-api/State";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from './pages/Homepage'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <AppState>
        <ChakraProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route index path="" element={<HomePage />} />
        <Route index path="profile" element={<Profile />} />  
        </Routes>
        <Footer/>
        </BrowserRouter>
        </ChakraProvider>
      </AppState>
    </>
  );
}

export default App;
