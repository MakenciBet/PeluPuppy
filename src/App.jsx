import './index.css'

import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Update from "./pages/Update";
import Favoritos from "./pages/Favoritos";
import Profile from "./pages/Profile";
import Carrito from './pages/Carrito';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

const App = () => {
  const {user} = useContext(UserContext);
  
  return (
    <div className="container">
    <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" /> }/>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" /> } />
        <Route path="/favoritos" element={user ? <Favoritos /> : <Navigate to="/login" /> } />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" /> } />
        <Route path="/carrito" element={user ? <Carrito /> : <Navigate to="/login" />} />
        <Route path="/update/:id" element={user ? <Update /> : <Navigate to="/login" /> } />
      </Routes>

      <Footer />
    </div>
  );
};
export default App;
