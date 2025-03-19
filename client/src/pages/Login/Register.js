import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [classroomCode, setClassroomCode] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    localStorage.setItem('username', username);
    navigate('/welcome');
  };

  return (
    <div className="login-container">
      <h1 className='prijava-tekst'>Napravi profil</h1>
      <form className='prijava-forma' onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Ime/nadimak"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Ponovi lozinku"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Kod učionice"
          value={classroomCode}
          onChange={(e) => setClassroomCode(e.target.value)}
          required
        />
        <button className='login-submit' type="submit">Napravi!</button>
      </form>
      <p>
        Već imaš profil? <Link to="/login">Prijavi se ovdje</Link>
      </p>

    </div>
  );
};
