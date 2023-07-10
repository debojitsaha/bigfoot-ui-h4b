import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import "./styles/index.scss";
import AppState from "./context-api/AppState";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import ReduceCarbonFootprint from "./pages/ReduceCarbonFootprint";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <AppState>
        <ChakraProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route index path="/about" element={<AboutUs />} />
              <Route path="profile" element={<Profile />} />
              <Route path="contact" element={<Contact />} />
              <Route path="reducecf" element={<ReduceCarbonFootprint/>} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
            {/* <Footer /> */}
          </BrowserRouter>
        </ChakraProvider>
      </AppState>
    </>
  );
}

export default App;
