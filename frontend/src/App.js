// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import ProductList from './components/ProductList';
import UsersList from './components/UsersList';
import Login from './components/Login';
import Register from './components/Register';
//import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </Router>
  );
};

export default App;
