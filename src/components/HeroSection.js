import React from 'react';
import './HeroSection.css';
import { profileData, portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <p className="hero-kicker">CurrentJob · 포트폴리오</p>
        <h1 className="hero-title">
          <span>안녕하세요,</span>
          <span>제조 분야 개발자 CurrentJob입니다.</span>
        </h1>
        <div className="hero-intro">
          <p className="hero-description">{profileData.description}</p>
          <div className="hero-actions">
            <a href="#portfolio" className="hero-link">프로젝트 보기 <span aria-hidden="true">↓</span></a>
            <a href="https://currentjob.github.io/devops-pipeline/" className="hero-link hero-blog-link" target="_blank" rel="noreferrer">
              기술 블로그 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">2021.11</span>
            <span className="stat-label">입사</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">연동해 본 장비 종류</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{portfolioData.length}</span>
            <span className="stat-label">정리한 프로젝트</span>
          </div>
        </div>
      </div>
    </section>
  );
}
