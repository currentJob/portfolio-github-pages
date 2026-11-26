import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
  // 첫 테마는 public/index.html 의 인라인 스크립트가 정한다(저장값, 없으면 OS 설정) — 다른 프로젝트 사이트와 같은 규칙.
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // 스크롤 등장 효과: 요소는 기본으로 보이고, index.html 이 붙인 .js 클래스 아래에서만 숨겼다가 화면에 들어오면 나타난다.
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main-content">본문으로 바로가기</a>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
