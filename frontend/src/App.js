import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Contacts from "./pages/contacts/Contacts";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
