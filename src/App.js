import './App.css';
import Home from './Pages/Home/Home/Home';
import {  Routes, Route } from "react-router-dom";
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import Login from './Pages/Login/LogIn/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/Context/AuthProvider';
import PrivateOutlet from './Pages/Login/PrivateRoute/PrivateOutlet';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="appointment" element={<Appointment />} />
            <Route path="dashboard/*" element={<Dashboard />}>
              <Route path="dashboardHome" element={<DashboardHome />} />
              <Route path="addDoctor" element={<AddDoctor />} />
              <Route path="makeAdmin" element={<MakeAdmin />} />
            </Route>

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;