import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import './App.css';
import Login from "./pages/login";
import { AuthProvider } from "./components/auth";
import {PrivateRoute} from "./pages/private";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cats" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
