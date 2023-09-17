import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import './App.css';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<>404</>}/>
    </Routes>
    </>
  );
}

export default App