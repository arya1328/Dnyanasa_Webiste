import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AppHeader from './components/header';
import Home from './home'; // your new Home component
import Classes from './classes';
import Blogs from './blogs'; // your new Blogs component
import About from './about'; // your new About component

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
