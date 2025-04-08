import React from 'react';
import './mdafaculty.css';

const MdaFaculty = () => {
  const faculty = [
    {
      name: 'Mr. Ahuja',
      subject: 'Music',
      image: '/assets/images/Dnyanasa_logo.jpeg'
    },
    {
      name: 'Ms. Verma',
      subject: 'Dance',
      image: '/assets/images/Dnyanasa_logo.jpeg'
    },
    {
      name: 'Mr. Patel',
      subject: 'Singing',
      image: '/assets/images/Dnyanasa_logo.jpeg'
    },
    {
      name: 'Ms. Rao',
      subject: 'Art',
      image: '/assets/images/Dnyanasa_logo.jpeg'
    },
    {
      name: 'Dr. Sen',
      subject: 'Theatre',
      image: '/assets/images/Dnyanasa_logo.jpeg'
    },
  ];

  return (
    <div className="faculty-wrapper">
      {faculty.map((fac, index) => (
        <div className="faculty-card" key={index}>
          <div
            className="faculty-image"
            style={{ backgroundImage: `url(${fac.image})` }}
          />
          <div className="faculty-name">{fac.name}</div>
          <div className="faculty-subject">{fac.subject}</div>
        </div>
      ))}
    </div>
  );
};

export default MdaFaculty;
