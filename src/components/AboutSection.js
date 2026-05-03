import React from 'react';
import './AboutSection.css';
import { profileData } from '../data/portfolioData';

function SocialIcon({ icon }) {
  if (icon === 'github') {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
  }
  if (icon === 'linkedin') {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
  }
  return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
}

export default function AboutSection() {
  return (
    <section className="about-section section" id="about">
      <div className="section-container">
        <div className="section-header fade-in-up">
          <span className="section-label">About Me</span>
          <h2 className="section-title">개발자 소개</h2>
          <p className="section-subtitle">데이터를 활용하여 산업 현장의 복잡한 문제를 해결하는 AI Engineer입니다.</p>
        </div>

        <div className="about-grid">
          <div className="about-profile-card glass-panel fade-in-left">
            <div className="about-avatar-wrapper">
              <img src={profileData.avatar} alt="Profile" className="about-avatar" />
              <div className="about-status"><span className="status-dot-sm" /><span>Active</span></div>
            </div>
            <h3 className="about-name">{profileData.name}</h3>
            <p className="about-role-text">{profileData.title}</p>
            <p className="about-bio">{profileData.description}</p>
            <div className="about-social-row">
              {profileData.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="about-social-link" aria-label={s.name}>
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="about-details">
            <div className="about-tech-card glass-panel fade-in-right">
              <h3 className="about-card-title"><span className="about-card-icon">🛠</span>Tech Stack</h3>
              <div className="skill-grid">
                {profileData.techStack.map((t) => (
                  <div key={t.name} className="skill-chip-wrapper">
                    <div className="skill-chip">
                      <div className="skill-name-row">
                        <span className="skill-dot" />
                        <span className="skill-name">{t.name}</span>
                      </div>
                      <div className="skill-hover-content">
                        <div className="skill-level-container">
                          <div className="skill-level-label mono">{t.level}%</div>
                          <div className="skill-level-bar-bg">
                            <div className="skill-level-bar-fill" style={{ width: `${t.level}%` }} />
                          </div>
                        </div>
                        <div className="sub-skill-list">
                          {t.subSkills.map((sub) => (
                            <span key={sub} className="sub-skill-tag">{sub}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-timeline-card glass-panel fade-in-right" style={{ transitionDelay: '0.15s' }}>
              <h3 className="about-card-title"><span className="about-card-icon">📋</span>Experience</h3>
              <div className="timeline">
                {profileData.experience.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="timeline-dot" />
                      {i < profileData.experience.length - 1 && <div className="timeline-line" />}
                    </div>
                    <div className="timeline-content">
                      <span className="timeline-year mono">{exp.year}</span>
                      <h4 className="timeline-role">{exp.role}</h4>
                      <p className="timeline-company">{exp.company}</p>
                      <p className="timeline-desc">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
