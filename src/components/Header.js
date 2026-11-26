import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';

// [id, 이름] — 색 값은 tokens.css 의 --sw-* 와 --cj-accent 에 있다.
const ACCENTS = [
  ['sky', '하늘'], ['green', '초록'], ['yellow', '노랑'],
  ['purple', '보라'], ['orange', '주황'], ['rose', '장미'],
];

const NAV_ITEMS = [
  { label: '소개', href: '#about' },
  { label: '작업 기록', href: '#portfolio' },
];

export function OutIcon() {
  return <svg className="icon icon--out" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" /></svg>;
}

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
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

  // 모바일 메뉴: 열려 있는 동안 배경 스크롤을 막고 Esc 로 닫는다.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('menu-open');
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'header-scrolled' : ''} ${mobileOpen ? 'header-menu-open' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="logo-container" onClick={(e) => handleNavClick(e, '#hero')} aria-label="currentjob, 맨 위로">
          <span className="logo-text">currentjob</span>
          <span className="logo-note">field notes</span>
        </a>

        <nav className={`header-nav ${mobileOpen ? 'nav-open' : ''}`} id="site-nav" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              style={{ '--i': i }}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'nav-active' : ''}`}
              aria-current={activeSection === item.href.slice(1) ? 'true' : undefined}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://currentjob.github.io/devops-pipeline/"
            className="nav-link"
            style={{ '--i': NAV_ITEMS.length }}
            target="_blank"
            rel="noreferrer"
          >
            기술 블로그 <OutIcon />
          </a>
        </nav>

        {/* 테마·강조 색상: 모바일에서도 메뉴를 열지 않고 바로 쓰도록 메뉴 밖에 둔다. 색상 클릭은 public/index.html 의 공통 스크립트가 처리한다. */}
        <div className="header-controls">
          <details className="cj-accent">
            <summary aria-label="강조 색상 선택" title="강조 색상"><span className="cj-dot" /></summary>
            <div className="cj-swatches" role="group" aria-label="강조 색상">
              {ACCENTS.map(([id, label]) => (
                <button key={id} type="button" data-cj-accent={id} aria-label={label} />
              ))}
            </div>
          </details>
          <button type="button" onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            <span className="theme-icon" key={theme} aria-hidden="true">
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              )}
            </span>
          </button>
          {/* Mobile menu button */}
          <button
            type="button"
            className={`hamburger ${mobileOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            aria-controls="site-nav"
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
