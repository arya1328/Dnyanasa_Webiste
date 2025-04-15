import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AppHeader from './components/header';
import Home from './home'; // your new Home component
import Classes from './classes';
import Blogs from './blogs'; // your new Blogs component
import About from './about'; // your new About component
import MusicDanceAcademy from './musicdanceacademy'; // your new MusicDanceAcademy component
import HealthcareTraining from './healthcaretraining'; // your new HealthcareTraining component
import CompClasses from './compclasses'; // your new CompClasses component
import SoftSkill from './softskill'; // your new SoftSkill component  
import Yoga from './yoga'; // your new Yoga component
import HealthCamp from './healthcamp'; // your new HealthCamp component

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/musicdanceacademy" element={<MusicDanceAcademy />} />
        <Route path="/healthcaretraining" element={<HealthcareTraining />} />
        <Route path="/services/softskill" element={<SoftSkill />} />
        <Route path="/services/compclasses" element={<CompClasses />} />
        <Route path="/services/yoga" element={<Yoga />} />
        <Route path="/services/healthcamp" element={<HealthCamp />} />
      </Routes>
    </Router>
  );
}

export default App;
