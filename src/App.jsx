import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landingPage/Landing";
import Login from "./login/Login";
import './index.css'; // Global CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
