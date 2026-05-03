import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-cta fade-in-up">
          <h2 className="footer-heading">Let's Connect</h2>
          <p className="footer-subtext">프로젝트 협업이나 문의사항이 있으시면 연락해 주세요.</p>
          <a href="mailto:contact@example.com" className="footer-cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            <span>이메일 보내기</span>
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-brand">
            <div className="footer-logo-icon">C</div>
            <span className="footer-logo-text">CurrentJob.</span>
          </div>
          <p className="footer-copyright mono">
            © {new Date().getFullYear()} CurrentJob. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="https://github.com/currentJob" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
