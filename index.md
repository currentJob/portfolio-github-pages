---
layout: default
title: Home
---

<div class="hero">
    <h1 class="text-gradient">Hello, I'm <br>{{ site.github_username | default: 'CurrentJob' }}.</h1>
    <h2>Software Engineer & Content Creator</h2>
    <p>
        최신 트렌드와 사용자 경험을 최우선으로 설계하는 프론트엔드/풀스택 개발자입니다.<br>
        문제 해결의 본질을 파고들며, 마이크로 인터랙션과 우아한 코드 구조를 지향합니다.
    </p>
    <div style="display:flex; gap: 1rem; margin-top: 2rem;">
        <a href="#portfolio" class="btn">포트폴리오 보기</a>
        <a href="#about" class="btn btn-secondary">About Me</a>
    </div>
</div>

<div id="about" style="margin-bottom: 4rem;">
    <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">About Me</h2>
    <p style="font-size: 1.1rem; max-width: 800px;">
        빠르게 변화하는 웹 기술 생태계에서 핵심을 놓치지 않으려 노력합니다. React, TS, Next.js 등 모던 웹 스택을 능숙하게 다루며, 
        안정성을 보장하기 위한 아키텍처 설계에 뛰어난 관심을 갖고 있습니다.
    </p>
    <div class="tech-stack" style="margin-top: 1rem;">
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">TypeScript</span>
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">React / Next.js</span>
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">Node.js / Bun</span>
        <span class="tech-badge" style="font-size:0.85rem; padding: 0.5rem 1rem;">Jekyll</span>
    </div>
</div>

<div id="portfolio">
    <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Featured Portfolios</h2>
    <div class="bento-grid">
        {% for project in site.portfolio %}
        <a href="{{ project.url | relative_url }}" class="bento-card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            {% if project.tech %}
            <div class="tech-stack">
                {% for t in project.tech limit:3 %}
                <span class="tech-badge">{{ t }}</span>
                {% endfor %}
            </div>
            {% endif %}
        </a>
        {% else %}
        <div class="bento-card">
            <h3>포트폴리오가 없습니다.</h3>
            <p>_portfolio 폴더에 md 파일을 추가하여 포트폴리오를 업로드해보세요.</p>
        </div>
        {% endfor %}
    </div>
</div>