---
layout: default
title: Home
---

<div class="hero">
    <h1 class="text-gradient">Hello, I'm <br>{{ site.github_username | default: 'CurrentJob' }}.</h1>
    <h2>Software Engineer & Content Creator</h2>
    <p>
        산업 현장의 데이터를 지능형 서비스로 연결하는 4년차 AI 백엔드 엔지니어입니다.<br>
        다양한 산업용 프로토콜 기반의 실시간 모니터링 시스템 구축에 능숙하며, 이를 AI 모델과 연계한 데이터 처리 파이프라인을 설계하고 구현한 경험이 있습니다.<br>
        단순한 기능 구현을 넘어, 확장 가능한 아키텍처 설계와 사용자 중심 인터페이스를 통해 실제 운영 환경에서 안정적으로 동작하는 서비스를 만드는 데 집중하고 있습니다.<br>
    </p>
    <div style="display:flex; gap: 1rem; margin-top: 2rem;">
        <a href="#portfolio" class="btn">포트폴리오 보기</a>
        <a href="#about" class="btn btn-secondary">About Me</a>
    </div>
</div>

<div id="about" style="margin-bottom: 4rem;">
    <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">About Me</h2>
    <p style="font-size: 1.1rem; max-width: 800px;">
        빠르게 변화하는 IT 기술 생태계에서 핵심을 놓치지 않으려 노력합니다.
        안정성을 보장하기 위한 아키텍처 설계에 뛰어난 관심을 갖고 있습니다.
    </p>
    <div class="tech-stack" style="margin-top: 1rem;">
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">Java</span>
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">C#</span>
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">Python</span>
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">Docker</span>
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">Git</span>
    </div>
</div>

<div id="portfolio" style="margin-bottom: 5rem;">
    <h2 style="font-size: 2.2rem; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">
        🚀 Featured Portfolios
        <span style="font-size: 1rem; color: var(--text-muted); font-weight: 400; display: block; margin-top: 0.5rem;">
            가장 자신 있는 프로젝트와 학습 기록들을 살펴보세요.
        </span>
    </h2>
    
    <div class="bento-grid">
        {% for project in site.portfolio %}
        <a href="{{ project.url | relative_url }}" class="bento-card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            {% if project.tech %}
            <div class="tech-stack">
                {% for t in project.tech limit:4 %}
                <span class="tech-badge">{{ t }}</span>
                {% endfor %}
            </div>
            {% endif %}
            
            <div style="margin-top: 2rem; text-align: right;">
                <span style="color: var(--accent); font-size: 0.9rem; font-weight: 600;">자세히 보기 &rarr;</span>
            </div>
        </a>
        {% else %}
        <div class="bento-card">
            <h3>포트폴리오가 없습니다.</h3>
            <p>_portfolio 폴더에 md 파일을 추가하여 포트폴리오를 업로드해보세요.</p>
        </div>
        {% endfor %}
    </div>
</div>