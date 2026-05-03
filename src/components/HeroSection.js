import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { profileData, portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mouse-x', `${x}%`);
      hero.style.setProperty('--mouse-y', `${y}%`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section" ref={heroRef} id="hero">
      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          <span className="mono">Available for work</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">안녕하세요, 저는</span>
          <span className="hero-name gradient-text">{profileData.name}</span>
          <span className="hero-role">{profileData.title}</span>
        </h1>

        <p className="hero-description">{profileData.description}</p>

        <div className="hero-cta">
          <a href="#portfolio" className="btn-primary">
            <span>프로젝트 보기</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>
          <a href="#about" className="btn-secondary">
            <span>더 알아보기</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">
              {profileData.techStack.reduce((acc, group) => 
                acc + group.skills.reduce((sAcc, s) => sAcc + s.subSkills.length, 0), 0
              )}+
            </span>
            <span className="stat-label">Tech Stack</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">{portfolioData.length}</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text mono">scroll</span>
      </div>
    </section>
  );
}
