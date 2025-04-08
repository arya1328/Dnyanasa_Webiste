import React from 'react';
import './components/musicdanceacademy.css';
import MdaHero from './components/mdahero.js'; // Import the MDA hero component
import MdaClasses from './components/mdaclasses.js'; // Import the MDA classes component
import MdaFaculty from './components/mdafaculty.js'; // Import the MDA faculty component
function MusicDanceAcademy() {
  return (
    <main>
     <MdaHero />
     <MdaClasses />
     <MdaFaculty />
    </main>
  );
}

export default MusicDanceAcademy;
