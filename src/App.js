import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser/:cid" element={<EditUser />} />
      </Routes>

    </div>
  );
}

export default App;
