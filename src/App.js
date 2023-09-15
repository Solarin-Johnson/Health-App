import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './layout/auth';
import Dashboard from './layout/dashboard';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const getToken = (data) => {
    setIsLogin(data)
  }
  return (
    (isLogin ? (
      <Dashboard token={getToken} />
    ) : (
      <Auth token={setIsLogin} />
    ))
  );
}

export default App;
