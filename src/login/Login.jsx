import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log('Logging in with:', formData);
      // later: fetch('/login', ...)
    } else {
      console.log('Signing up with:', formData);
      // later: fetch('/signup', ...)
    }

    alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span className="toggle" onClick={handleToggle}>
          {isLogin ? 'Sign Up' : 'Log In'}
        </span>
      </p>
    </div>
  );
};

export default Login;
