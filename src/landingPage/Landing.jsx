import React from 'react';
import { Link } from 'react-router-dom'; // for navigation
import '../index.css';


const Landing = () => {
  return (
    <div className="card">
      <div className="text-section">
        <h1 className="section-title">NOTE TAKING APP</h1>
        <h1 className="main-heading">Introducing<br />Note Taking App</h1>
        <Link to="/login" className="login-button">LOG IN</Link>
      </div>
      <div>
        <img src="/new%20note.jpg" alt="Note Sticker" className="note-image" />
      </div>
    </div>
  );
};

export default Landing;
