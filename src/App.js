import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './layout/auth';
import Dashboard from './layout/dashboard';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, []);
  const getToken = (data) => {
    setIsLogin(data)
  }
  return (
    (isLogin ? (
      <Dashboard />
    ) : (
      <Auth token={getToken} />
    ))
  );
}

export default App;
