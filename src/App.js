import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pets from "./Pets";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/petsforadoption" element={<Pets />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
