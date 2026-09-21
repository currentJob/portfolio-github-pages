import React, { useState } from 'react';
import './ProjectSection.css';
import { portfolioData, additionalProjects, demoProjects } from '../data/portfolioData';

function Tags({ items }) {
  return <div className="project-tech-row">{items.map(item => <span key={item} className="project-tech-tag">{item}</span>)}</div>;
}

export default function ProjectSection() {
  const [category, setCategory] = useState('전체');
  const categories = ['전체', ...new Set(portfolioData.map(project => project.category))];
  const projects = portfolioData.filter(project => category === '전체' || project.category === category);
  return (
    <section className="project-section section" id="portfolio">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">02 · Work notes</span>
          <h2 className="section-title">현장에서 해결한 문제들</h2>
          <p className="section-subtitle">문제 정의, 구현, 검증과 결과를 프로젝트별로 기록했습니다.</p>
        </div>
        <div className="project-filters" role="group" aria-label="프로젝트 분야">
          {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <p className="project-count" aria-live="polite">주요 프로젝트 {projects.length}건</p>
        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.id} id={project.id} className="project-card case-study" aria-labelledby={`${project.id}-title`}>
              <div className="project-card-inner">
                <div className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-card-content">
                  <div className="project-card-meta"><span className="project-category mono">{project.category}</span><span className="case-period">{project.period}</span></div>
                  <h3 className="project-title" id={`${project.id}-title`}>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <p className="case-role">{project.role}</p>
                  {project.scale && <p className="case-scale">{project.scale}</p>}
                  <Tags items={project.tech} />
                  <ul className="case-outcomes">{project.outcomes.map(item => <li key={item}>{item}</li>)}</ul>
                  <details className="case-details">
                    <summary>{project.title} 상세 보기</summary>

                    <h4>해결 과제</h4><p>{project.problem}</p>
                    <h4>담당 업무</h4><ul>{project.implementation.map(item => <li key={item}>{item}</li>)}</ul>
                    {project.validation && <><h4>검증 방법</h4><p>{project.validation}</p></>}
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
        <h3 className="portfolio-group-title">기타 수행 프로젝트</h3>
        <div className="portfolio-secondary-grid">
          {additionalProjects.map(project => <article className="secondary-project" key={project.title}>
            <p className="case-period">{project.period} · {project.role}</p><h4>{project.title}</h4><p>{project.description}</p>
          </article>)}
        </div>
        <h3 className="portfolio-group-title">개인 데모</h3>
        <div className="portfolio-secondary-grid">
          {demoProjects.map(project => <article className="secondary-project" key={project.id}>
            <h4>{project.title}</h4><p>{project.description}</p><Tags items={project.tech} />
            <a className="demo-link" href={project.link} target="_blank" rel="noreferrer">데모 열기 <span className="sr-only">— {project.title} (새 탭)</span> ↗</a>
          </article>)}
        </div>
      </div>
    </section>
  );
}
