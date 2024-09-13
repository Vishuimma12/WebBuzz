import React, { useState } from 'react';

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
    <div className="block fixed z-10 inset-0 pt-24 bg-black bg-opacity-40">
      <div className="bg-white mx-auto p-5 border border-gray-300 w-72 text-center rounded-lg shadow-lg relative">
        <span
          className="text-gray-400 float-right text-2xl font-bold cursor-pointer hover:text-black"
          onClick={closeModal}
        >
          &times;
        </span>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl mb-4">Login</h2>
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 my-2 border border-gray-300 rounded"
            />
            <label className="block mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 my-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer text-lg mt-4 hover:bg-green-600"
            >
              Login
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 text-lg">
            <h3 className="text-xl mb-2">Success!</h3>
            <p>You have logged in successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
