/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import { useEffect, useState } from "react";
const App = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("login") == "true") setIsLogedin(true);
  }, []);
  const handleLogout = () => {
    localStorage.setItem("login", "false"); // Set login status to false on logout
    setIsLogedin(false);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLogedin ? (
              <Navigate to="/Home" />
            ) : (
              <Login isLogedin={isLogedin} setIsLogedin={setIsLogedin} />
            )
          }
        />
        <Route
          path="/Home"
          element={
            <ProtectedRoute isLogedin={isLogedin}>
              <Home handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
