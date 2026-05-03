import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
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
    const ids = ['about', 'portfolio', 'contact'];
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
          <div className="logo-icon">C</div>
          <span className="logo-text">CurrentJob.</span>
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
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            )}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'hamburger-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
