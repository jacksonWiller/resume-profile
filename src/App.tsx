import "./App.css";
import Home from "./pages/Home";

import Login from "./pages/Login";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;