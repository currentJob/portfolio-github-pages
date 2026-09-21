import React from 'react';
import './HeroSection.css';
import { profileData, portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <p className="hero-kicker">산업 AI와 백엔드에 관한 작업 기록 · 2021—현재</p>
        <h1 className="hero-title">
          <span>현장의 데이터를</span>
          <span>작동하는 소프트웨어로.</span>
        </h1>
        <div className="hero-intro">
          <p className="hero-description">{profileData.description}</p>
          <a href="#portfolio" className="hero-link">프로젝트 기록 읽기 <span aria-hidden="true">↓</span></a>
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
