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

function App() {
  return (
    <>
      <AppState>
        <ChakraProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index path="" element={<HomePage />} />
              <Route index path="profile" element={<Profile />} />
              <Route index path="contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ChakraProvider>
      </AppState>
    </>
  );
}

export default App;
