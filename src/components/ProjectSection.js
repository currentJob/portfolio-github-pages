import React, { useRef, useCallback } from 'react';
import './ProjectSection.css';
import { portfolioData } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const isExternal = project.link.startsWith('http');

  return (
    <a
      href={project.link}
      ref={cardRef}
      className={`project-card glass-panel fade-in-scale ${project.span === 'featured' ? 'project-featured' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseMove={handleMouseMove}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <div className="project-accent-bar" style={{ background: project.accentBar }} />
      <div className="project-glow" />

      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-icon">{project.icon}</span>
          <span className="project-category mono">{project.category}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech-row">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <span className="project-link-text">
          자세히 보기
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17l9.2-9.2M17 17V8H8" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function ProjectSection() {
  return (
    <section className="project-section section" id="portfolio">
      <div className="section-container">
        <div className="section-header fade-in-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">프로젝트</h2>
          <p className="section-subtitle">가장 자신 있는 프로젝트와 학습 기록들을 살펴보세요.</p>
        </div>

        <div className="project-grid">
          {portfolioData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
