import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Offerings from "./pages/Offerings";
import Preachings from "./pages/Preachings";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/preachings" element={<Preachings />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
