import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppFooter from './components/footer';
import AppHeader from './components/header';
import Home from './home'; // your new Home component
import Classes from './classes';
import MusicDanceAcademy from './musicdanceacademy'; // your new MusicDanceAcademy component

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/musicdanceacademy" element={<MusicDanceAcademy />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
