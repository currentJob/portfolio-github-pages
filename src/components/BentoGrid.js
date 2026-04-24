import React from 'react';
import './BentoGrid.css';
import { portfolioData } from '../data/portfolioData';

export default function BentoGrid() {
  return (
    <div className="bento-container" id="portfolio">
      <div className="portfolio-header">
        <h2>🚀 Featured Portfolios</h2>
        <p>가장 자신 있는 프로젝트와 학습 기록들을 살펴보세요.</p>
      </div>
      
      <div className="bento-grid">
        {portfolioData.map((project, index) => (
          <a 
            href={project.link} 
            key={project.id} 
            className={`bento-card glass-panel ${project.span}`}
            style={{ 
              background: project.color, 
              animationDelay: `${index * 0.1}s` 
            }}
          >
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="card-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-badge-small">{t}</span>
                ))}
              </div>
            </div>
            
            <div className="card-footer">
              <span className="read-more">자세히 보기 &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
