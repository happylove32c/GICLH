import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offerings from "./pages/Offerings";
import Preachings from "./pages/Preachings";
import Navbar from "./components/Navbar"; // Optional navigation
import Services from "./pages/Services";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Navbar /> {/* Optional navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/preachings" element={<Preachings />} />
      </Routes>
    </Router>
  );
}

export default App;
