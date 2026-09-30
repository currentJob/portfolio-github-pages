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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Small delay to let React finish rendering
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale'
      );
      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
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
