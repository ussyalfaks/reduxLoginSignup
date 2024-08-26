import React from 'react';
// import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProfileUpdate from './components/ProfileUpdate';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profileupdate" element={<ProfileUpdate />} />
    </Routes>
  );
}

export default App;
