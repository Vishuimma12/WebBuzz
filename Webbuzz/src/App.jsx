import { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  return (
    <>
      <button onClick={openLoginModal}>Login</button>
      {isLoginOpen && <LoginForm closeModal={closeLoginModal}/>}
    </>
  )
}

export default App
