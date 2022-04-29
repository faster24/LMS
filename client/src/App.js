import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/admin/Dashboard.jsx";
import { useEffect, useState } from "react";
import authService from "./services/auth.services.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user && user.isAdmin === true) {
      setAdmin(true);
    }
  }, []);

  return (
    <div
      className="App"
      style={{
        background:
          "linear-gradient(to right, #3c1053, #ad5389)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="dashboard" element={<Dashboard isAdmin={isAdmin} />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
