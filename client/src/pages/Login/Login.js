import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/welcome');
  };

  return (
    <div className="login-containers">
      <h1 className='prijava-tekst'>Prijavi se</h1>
      <form className='prijava-forma' onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Ime"
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
        <button className='login-submit' type="submit">Prijava</button>
      </form>
      <p>
        Još nemaš korisnički račun? <Link to="/register">Napravo ga ovdje</Link>
      </p>
    </div>
  );
};
