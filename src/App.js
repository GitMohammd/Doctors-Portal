import './App.css';
import Home from './Pages/Home/Home/Home';
import {  Routes, Route } from "react-router-dom";
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/LogIn/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
