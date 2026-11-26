import React, { useEffect, useState } from 'react';
import './ProjectSection.css';
import { portfolioData, additionalProjects, personalProjects } from '../data/portfolioData';
import { OutIcon } from './Header';

const BLOG_URL = 'https://currentjob.github.io/devops-pipeline/';

// 블로그(Quartz) 글 목록. 날짜는 slug에 있는 YYYY-MM-DD를 쓰고, 라이프 글은 뺀다.
export function latestPosts(index, count = 3) {
  return Object.values(index)
    .map(post => ({ ...post, date: (post.slug.match(/\d{4}-\d{2}-\d{2}/) || [])[0] }))
    .filter(post => post.date && !post.slug.startsWith('라이프/'))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (typeof fetch !== 'function') return;
    fetch(`${BLOG_URL}static/contentIndex.json`)
      .then(res => (res.ok ? res.json() : {}))
      .then(index => setPosts(latestPosts(index)))
      .catch(() => {});
  }, []);
  if (!posts.length) return null;
  return <div className="portfolio-group blog-group">
    <h3 className="portfolio-group-title">최근 블로그 글</h3>
    <ol className="blog-list">
      {posts.map((post, i) => <li className="blog-post" key={post.slug} style={{ '--i': i }}>
        <time className="case-period measured" dateTime={post.date}>{post.date}</time>
        <h4><a className="blog-link" href={BLOG_URL + encodeURI(post.slug)} target="_blank" rel="noreferrer">{post.title} <OutIcon /></a></h4>
      </li>)}
    </ol>
  </div>;
}

function Tags({ items }) {
  return <div className="project-tech-row tags">{items.map(item => <span key={item} className="project-tech-tag tag">{item}</span>)}</div>;
}

export default function ProjectSection() {
  const [category, setCategory] = useState('전체');
  const categories = ['전체', ...new Set(portfolioData.map(project => project.category))];
  const projects = portfolioData.filter(project => category === '전체' || project.category === category);
  return (<>
    <section className="project-section section" id="portfolio">
      <div className="section-container">
        <div className="section-head" data-reveal>
          <h2 className="section-title">프로젝트</h2>
          <p className="section-subtitle">회사에서 참여한 과제 위주로 정리했습니다. 어떤 문제가 있었고 어떻게 해결했는지 적어 두었습니다.</p>
        </div>
        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label="프로젝트 분야">
            {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <p className="project-count" aria-live="polite">주요 프로젝트 {projects.length}건</p>
        </div>
        <div className="project-list" key={category}>
          {projects.map((project, index) => (
            <article key={project.id} id={project.id} className="project-card case-study" style={{ '--i': index }} aria-labelledby={`${project.id}-title`}>
              <div className="project-card-inner">
                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span className="project-index measured" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span className="project-category">{project.category}</span>
                    <span className="case-period measured">{project.period}</span>
                  </div>
                  <h3 className="project-title" id={`${project.id}-title`}>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <dl className="case-facts">
                    <div><dt>역할</dt><dd className="case-role">{project.role}</dd></div>
                    {project.scale && <div><dt>규모</dt><dd className="case-scale">{project.scale}</dd></div>}
                  </dl>
                  <Tags items={project.tech} />
                </div>
                <div className="project-card-outcomes">
                  <h4 className="outcomes-title">결과</h4>
                  <ul className="case-outcomes">{project.outcomes.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
                <details className="case-details">
                  <summary>구현 내용 보기<span className="sr-only"> — {project.title}</span><svg className="case-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg></summary>
                  <div className="case-body">
                    <div className="case-block"><h4>배경</h4><p>{project.problem}</p></div>
                    <div className="case-block case-block--wide"><h4>구현</h4><ol>{project.implementation.map(item => <li key={item}>{item}</li>)}</ol></div>
                    {project.validation && <div className="case-block"><h4>확인한 내용</h4><p>{project.validation}</p></div>}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="more-work-section section" aria-labelledby="more-work-title">
      <div className="section-container">
        <div className="portfolio-group portfolio-group--first">
          <h3 className="portfolio-group-title" id="more-work-title" data-reveal>그 외에 참여한 과제</h3>
          <div className="additional-list">
            {additionalProjects.map((project, i) => <article className="secondary-project additional-project" key={project.title} data-reveal style={{ '--i': i }}>
              <h4>{project.title}</h4>
              <p className="additional-meta"><span className="case-period measured">{project.period}</span><span className="additional-role">{project.role}</span></p>
              <p className="additional-desc">{project.description}</p>
            </article>)}
          </div>
        </div>

        <div className="portfolio-group">
          <h3 className="portfolio-group-title" data-reveal>개인 프로젝트</h3>
          <div className="personal-grid panels">
            {personalProjects.map((project, i) => <article className="secondary-project personal-project" key={project.id} data-reveal style={{ '--i': i }}>
              <h4>{project.title}</h4><p>{project.description}</p><Tags items={project.tech} />
              <div className="project-links">
                <a className="demo-link btn btn--small" href={project.link} target="_blank" rel="noreferrer">사이트 열기 <span className="sr-only">— {project.title} (새 탭)</span><OutIcon /></a>
                <a className="demo-link text-link" href={project.source} target="_blank" rel="noreferrer">소스 보기 <span className="sr-only">— {project.title} GitHub 저장소 (새 탭)</span><OutIcon /></a>
              </div>
            </article>)}
          </div>
        </div>
        <BlogPosts />
      </div>
    </section>
  </>);
}
