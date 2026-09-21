import React from 'react';
import './HeroSection.css';
import { profileData, portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <p className="hero-kicker">CurrentJob의 개발 기록 · 2021—현재</p>
        <h1 className="hero-title">
          <span>제조 현장에서</span>
          <span>AI와 백엔드를 개발합니다.</span>
        </h1>
        <div className="hero-intro">
          <p className="hero-description">{profileData.description}</p>
          <div className="hero-actions">
            <a href="#portfolio" className="hero-link">프로젝트 살펴보기 <span aria-hidden="true">↓</span></a>
            <a href="https://currentjob.github.io/devops-pipeline/" className="hero-link hero-blog-link" target="_blank" rel="noreferrer">
              기술 블로그 읽기 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">2021.11</span>
            <span className="stat-label">since</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">industrial systems</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{portfolioData.length}</span>
            <span className="stat-label">case notes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
