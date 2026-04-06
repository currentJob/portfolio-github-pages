---
layout: default
title: Portfolio & Blog
---

<section id="hero" class="hero">
    <p class="greeting">안녕하세요, 만나서 반갑습니다!</p>
    <h1>{{ site.github_username }}<br>개발 포트폴리오</h1>
    <h2>Software Engineer & Content Creator</h2>
    <p class="bio">
        <!-- user's _config.yml description can be dynamically loaded here or rewritten -->
        {{ site.description }}
        현대적인 UX/UI를 고민하며, 안정적이고 확장 가능한 시스템을 구축하는 것을 단단한 목표로 삼고 있습니다.
    </p>
    <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">프로젝트 보러가기</a>
    </div>
</section>

<section id="about">
    <h2 class="section-title">About Me</h2>
    <div class="glass-card" style="margin-bottom: 2rem;">
        <p>
            저는 웹 기술과 소프트웨어 설계에 깊은 관심을 가지고 있는 개발자입니다. 문제를 해결하는 과정 자체를 즐기며, 
            사용자가 조금이라도 더 편리하게 사용할 수 있는 경험 (UX/UI) 을 만들기 위해 끊임없이 노력합니다.
            단순히 코드를 작성하는 것을 넘어, 비즈니스 가치를 창출하고 협업의 즐거움을 공유하고 싶습니다.
        </p>
    </div>
    
    <h3>Technical Skills</h3>
    <ul class="card-tech" style="font-size: 1rem;">
        <li>JavaScript/TypeScript</li>
        <li>React & Next.js</li>
        <li>HTML5 & CSS3</li>
        <li>Node.js</li>
        <li>Jekyll</li>
        <li>Git/GitHub</li>
    </ul>
</section>

<section id="projects">
    <h2 class="section-title">Featured Projects</h2>
    <div class="glass-grid">
        <!-- Sample Project 1 -->
        <div class="glass-card">
            <h3>프로젝트 A</h3>
            <p>사용자 친화적인 인터페이스를 기반으로 한 반응형 웹 애플리케이션 프론트엔드 구축. 성능 최적화와 컴포넌트 재사용성에 초점을 맞췄습니다.</p>
            <ul class="card-tech">
                <li>React</li>
                <li>Redux</li>
                <li>Styled-Components</li>
            </ul>
            <div class="card-links">
                <a href="#" class="btn btn-primary" style="padding:0.4rem 1rem;">GitHub</a>
                <a href="#" class="btn btn-primary" style="padding:0.4rem 1rem;">Live Demo</a>
            </div>
        </div>

        <!-- Sample Project 2 -->
        <div class="glass-card">
            <h3>프로젝트 B</h3>
            <p>Node.js 백엔드와 연동되는 RESTful API 서비스 구현 및 데이터베이스 설계. 무중단 배포 경험을 가지고 있습니다.</p>
            <ul class="card-tech">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
            <div class="card-links">
                <a href="#" class="btn btn-primary" style="padding:0.4rem 1rem;">GitHub</a>
            </div>
        </div>
        
        <!-- Sample Project 3 -->
        <div class="glass-card">
            <h3>개발 블로그 / 포트폴리오</h3>
            <p>GitHub Pages와 Jekyll을 이용한 정적 사이트 구축. 반응형 디자인, 글래스모피즘(Glassmorphism) 효과 적용 및 UX 개선.</p>
            <ul class="card-tech">
                <li>Jekyll</li>
                <li>HTML/CSS</li>
                <li>GitHub Pages</li>
            </ul>
            <div class="card-links">
                <a href="#" class="btn btn-primary" style="padding:0.4rem 1rem;">GitHub</a>
            </div>
        </div>
    </div>
</section>

<section id="recent-posts">
    <h2 class="section-title">Recent Posts (Blog)</h2>
    <div class="posts-list">
        {% for post in site.posts limit:3 %}
        <a href="{{ post.url | relative_url }}" class="post-item" style="color:inherit; text-decoration: none;">
            <div class="post-meta">{{ post.date | date: "%Y년 %m월 %d일" }}</div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        </a>
        {% else %}
        <p>아직 작성된 블로그 포스트가 없습니다.</p>
        {% endfor %}
    </div>
    <div style="margin-top: 2rem; text-align: center;">
        <a href="{{ '/blog' | relative_url }}" class="btn btn-primary">모든 글 보기</a>
    </div>
</section>