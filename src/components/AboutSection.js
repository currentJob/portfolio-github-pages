import React from 'react';
import './AboutSection.css';
import { profileData } from '../data/portfolioData';

function SkillChip({ skill }) {
  return <details className="skill-chip-wrapper skill-disclosure">
    <summary className="skill-chip">
      <span className="skill-name">{skill.name}</span>
      <span className="skill-count measured" aria-hidden="true">{skill.subSkills.length}</span>
      <svg className="skill-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
    </summary>
    <div className="sub-skill-list">{skill.subSkills.map((sub, i) => <span key={sub} className="sub-skill-tag" style={{ '--i': i }}>{sub}</span>)}</div>
  </details>;
}
function SocialIcon({ icon }) {
  if (icon === 'github') {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
  }
  if (icon === 'linkedin') {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
  }
  return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
}

export default function AboutSection() {
  return (<>
    <section className="about-section section" id="about">
      <div className="section-container">
        <div className="section-head" data-reveal>
          <h2 className="section-title">소개</h2>
        </div>

        <div className="about-grid">
          <aside className="about-profile-card" data-reveal>
            <div className="about-avatar-wrapper">
              <img src={profileData.avatar} alt="CurrentJob GitHub 프로필" className="about-avatar" width="460" height="460" loading="lazy" />
            </div>
            <h3 className="about-name">{profileData.name}</h3>
            <p className="about-role-text">{profileData.title}</p>
            <p className="about-bio">{profileData.description}</p>
            <div className="about-social-row">
              {profileData.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="about-social-link" aria-label={s.name}>
                  <SocialIcon icon={s.icon} />
                  <span aria-hidden="true">{s.name}</span>
                </a>
              ))}
            </div>
          </aside>

          <div className="about-details">
            <div className="about-timeline-card" data-reveal>
              <h3 className="about-card-title">경력</h3>
              <ol className="timeline">
                {profileData.experience.map((exp, i) => (
                  <li key={i} className="timeline-item">
                    <span className="timeline-year measured">{exp.year}</span>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-desc">{exp.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="about-strengths" data-reveal>
              <h3 className="about-card-title">주로 하는 일</h3>
              <ol className="strength-list">
                {profileData.strengths.map((item, i) => <li className="technical-strength" key={item.title} style={{ '--i': i }}>
                  <span className="strength-index measured" aria-hidden="true">{i + 1}</span>
                  <h4>{item.title}</h4><p>{item.description}</p>
                </li>)}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="tech-section section" aria-labelledby="tech-title">
      <div className="section-container">
        <div className="about-tech-card">
          <div className="tech-head" data-reveal>
            <h3 className="about-card-title tech-title" id="tech-title">써 본 기술</h3>
          </div>
          <div className="skill-groups panels">
            {profileData.techStack.map((group, i) => (
              <div key={group.category} className="skill-group" data-reveal style={{ '--i': i }}>
                <h4 className="skill-group-title">{group.category}</h4>
                <div className="skill-grid">
                  {group.skills.map((t) => (
                    <SkillChip key={t.name} skill={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>);
}
