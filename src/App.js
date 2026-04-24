import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <header className="glass-header">
        <nav className="nav-container">
          <div className="logo">나의 포트폴리오</div>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="테마 변경">
            {theme === 'light' ? '🌙' : '🌞'}
          </button>
        </nav>
      </header>

      <div className="content-wrapper">
        <aside className="glass-sidebar">
          <div className="profile-section">
            <img 
              src="https://avatars.githubusercontent.com/u/9919?v=4" 
              alt="프로필 이미지" 
              className="profile-img" 
            />
            <h2 className="sidebar-title">개발자</h2>
            <p className="sidebar-description">Bento UI 포트폴리오에 오신 것을 환영합니다!</p>
          </div>
        </aside>

        <main className="main-body">
          <div className="bento-grid">
            <div className="bento-card span-2 row-span-2">
              <h3>소개</h3>
              <p>안녕하세요! 웹 프론트엔드 개발에 열정을 가진 개발자입니다. 모던 툴과 우수한 UI/UX에 관심이 많습니다.</p>
            </div>
            
            <div className="bento-card">
              <h3>기술 스택</h3>
              <p>React, JavaScript, HTML, CSS</p>
            </div>

            <div className="bento-card">
              <h3>경력</h3>
              <p>프론트엔드 개발자</p>
            </div>

            <div className="bento-card span-2">
              <h3>최근 프로젝트 1</h3>
              <p>최신 디자인 트렌드를 반영한 웹 애플리케이션 구축 경험이 있습니다.</p>
            </div>

            <div className="bento-card span-2">
              <h3>최근 프로젝트 2</h3>
              <p>Jekyll 기반의 블로그를 React Bento Grid UI로 마이그레이션했습니다.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
