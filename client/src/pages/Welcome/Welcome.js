import React, { useState, useEffect} from 'react';
import '../../fonts/pixelFont-sproutLands.ttf';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
  const [name, setName] = useState('');
  const [frame, setFrame] = useState(0);
  const subjects = ['hrvatski', 'mat'];
  const navigate = useNavigate();

  //getting the username animation of the rabbit
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      //navigate('/login'); //if there is no username, navigate to login page
    } else {
      setName(username);
    }

    const intervalId = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % 4);
    }, 400);

    return () => clearInterval(intervalId);
  }, [navigate]);

  const handleSubjectClick = (subject) => {
    // Handle subject selection logic here
    console.log(`Selected subject: ${subject}`);
  };

  return (
    <div className="welcome-container">
      <div className="top-icons">
        <button className="icon-button profile" aria-label="Profile">👤</button>
        <button className="icon-button leaderboard" aria-label="Leaderboard">🏆</button>
      </div>
      <div className="welcome-text">Pozdrav {name || 'ime'}!</div>
      <div className="rabbit-container">
        <div 
          className="rabbit" 
          style={{ backgroundPosition: `${-32 * frame}px 0` }}
        ></div>
      </div>
      <div className='chose-text'>Odaberi Predmet:</div>
      <div className="subject-buttons">
        {subjects.map((subject) => (
          <button 
            key={subject} 
            className="subject-button"
            onClick={() => handleSubjectClick(subject)}
          >
            {subject.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};
