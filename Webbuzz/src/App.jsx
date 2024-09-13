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
    <div className="relative w-screen h-screen bg-blue-900 overflow-hidden">


      <button
        onClick={openLoginModal}
        className="flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-300 hover:shadow transition duration-150"
      >
        <span>Login</span>
      </button>


      {isLoginOpen && <LoginForm closeModal={closeLoginModal} />}
    </div>
  );
}

export default App;
