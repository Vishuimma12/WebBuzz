import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && password) {
      setIsSubmitted(true);

      setTimeout(() => {
        closeModal(); 
        setIsSubmitted(false); 
      }, 2000);  
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        ) : (
          <div className="success-message">
            <h3>Success!</h3>
            <p>You have logged in successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
