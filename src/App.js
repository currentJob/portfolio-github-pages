import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BentoGrid from './components/BentoGrid';

function App() {
  const [theme, setTheme] = useState('dark'); // Default to dark for modern feel

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <Sidebar />
        <BentoGrid />
      </main>
    </div>
  );
}

export default App;
