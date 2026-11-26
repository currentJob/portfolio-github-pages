import React, { useState, useRef } from 'react';
import './HeroSection.css';
import { profileData, portfolioData } from '../data/portfolioData';
import { OutIcon } from './Header';

// 히어로 패널: 프로젝트 성과 문장(portfolioData.outcomes)에 이미 적힌 값만 꺼내 계기판처럼 보여 준다.
const READINGS = [
  { project: 'food-ocr', label: 'OCR 인식률', before: '83%', value: '99.7%' },
  { project: 'industrial-monitoring', label: '신규 장비 기능 개발 기간', before: '2주', value: '3일' },
  { project: 'vision-marking', label: '레이저 각인 정밀도', before: null, value: '90%+' },
];

function ReadingPanel() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const reading = READINGS[active];
  const project = portfolioData.find(p => p.id === reading.project);

  const onKeyDown = (e) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + READINGS.length) % READINGS.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <figure className="reading-panel" aria-label="프로젝트에서 측정한 결과">
      <div className="reading-tabs" role="tablist" aria-label="측정 결과 선택" onKeyDown={onKeyDown}>
        {READINGS.map((r, i) => (
          <button
            key={r.project}
            ref={el => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`reading-tab-${i}`}
            aria-selected={i === active}
            aria-controls="reading-body"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div className="reading-body" id="reading-body" role="tabpanel" aria-labelledby={`reading-tab-${active}`} aria-live="polite">
        <div className="reading-values" key={active}>
          {reading.before
            ? <p className="reading-before measured"><s>{reading.before}</s> <span className="sr-only">에서</span></p>
            : <p className="reading-before reading-before--empty" aria-hidden="true">&nbsp;</p>}
          <p className="reading-value measured">{reading.value}</p>
          <p className="reading-outcome">{reading.label}</p>
        </div>
        <a className="reading-source" href={`#${project.id}`}>
          <span className="reading-source-title">{project.title}</span>
          <span className="reading-source-period measured">{project.period}</span>
        </a>
      </div>
      <dl className="hero-stats">
        <div className="stat-item">
          <dt className="stat-label">입사</dt>
          <dd className="stat-number measured">2021.11</dd>
        </div>
        <div className="stat-item">
          <dt className="stat-label">연동해 본 장비 종류</dt>
          <dd className="stat-number measured">8+</dd>
        </div>
        <div className="stat-item">
          <dt className="stat-label">정리한 프로젝트</dt>
          <dd className="stat-number measured">{portfolioData.length}</dd>
        </div>
      </dl>
    </figure>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span>안녕하세요,</span>
            <span>제조 분야 개발자 CurrentJob입니다.</span>
          </h1>
          <p className="hero-description">{profileData.description}</p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn--primary">
              프로젝트 보기
              <svg className="icon icon--down" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" /></svg>
            </a>
            <a href="https://currentjob.github.io/devops-pipeline/" className="btn" target="_blank" rel="noreferrer">
              기술 블로그 <OutIcon />
            </a>
          </div>
        </div>
        <ReadingPanel />
      </div>
    </section>
  );
}
