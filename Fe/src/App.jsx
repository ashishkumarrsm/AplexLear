import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UaserDashboard from "./pages/UaserDashboard";
import Forgot_password from "./pages/Forgot_password";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Default route */}
           <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot_password />} />
          <Route path="/dashboard" element={<UaserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
