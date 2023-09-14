import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './authentication/auth';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    (isLogin ? (
      <Auth/>
    ) : (
      <Auth/>
    ))
  );
}

export default App;
