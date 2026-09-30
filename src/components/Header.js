import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';

// [id, 이름, 밝은 테마 색, 어두운 테마 색] — 값은 global.css 의 색상표와 같다.
const ACCENTS = [
  ['green', '초록', '#245548', '#7cc4a6'], ['sky', '하늘', '#0b5f8a', '#7cc6ee'], ['yellow', '노랑', '#7a5600', '#f0c75e'],
  ['purple', '보라', '#5f3bab', '#b9a3f5'], ['orange', '주황', '#a8431b', '#f4a27c'], ['rose', '장미', '#a82d5c', '#f39bbd'],
];

const NAV_ITEMS = [
  { label: '소개', href: '#about' },
  { label: '작업 기록', href: '#portfolio' },
];

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = ['about', 'portfolio'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="logo-container" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-text">currentjob</span>
          <span className="logo-note">field notes</span>
        </a>

        <nav className={`header-nav ${mobileOpen ? 'nav-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'nav-active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://currentjob.github.io/devops-pipeline/"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            기술 블로그 ↗
          </a>
        </nav>

        {/* 테마·강조 색상: 모바일에서도 메뉴를 열지 않고 바로 쓰도록 메뉴 밖에 둔다. 색상 클릭은 public/index.html 의 공통 스크립트가 처리한다. */}
        <div className="header-controls">
          <details className="cj-accent">
            <summary aria-label="강조 색상 선택" title="강조 색상"><span className="cj-dot" /></summary>
            <div className="cj-swatches" role="group" aria-label="강조 색상">
              {ACCENTS.map(([id, label, light, dark]) => (
                <button key={id} type="button" data-cj-accent={id} aria-label={label} style={{ '--l': light, '--d': dark }} />
              ))}
            </div>
          </details>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'hamburger-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
