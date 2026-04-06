---
layout: default
title: Home
---

<div class="hero">
    <h1>반갑습니다, <br>개발자 {{ site.github_username | default: 'CurrentJob' }}입니다.</h1>
    <h2>Software Engineer & Portfolio</h2>
    <p>
        사용자 경험(UX/UI)을 가장 우선시하는 웹 환경을 구축합니다. 
        문제를 기술적으로 해결하는 과정 즐기며, 트렌디한 디자인과 부드러운 인터랙션을 사랑합니다.
    </p>
    <a href="#projects" class="btn">프로젝트 보기</a>
</div>

<div id="about" style="margin-bottom: 4rem;">
    <h2 style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.5rem;">About Me</h2>
    <p>
        프론트엔드와 백엔드를 아우르는 풀스택 엔지니어로 성장하고 있습니다. 모바일과 데스크톱 모두에서 완벽하게 작동하는 반응형 앱을 만듭니다!
    </p>
    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top: 1rem;">
        <span style="background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 0.85rem;">JavaScript</span>
        <span style="background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 0.85rem;">React</span>
        <span style="background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 0.85rem;">UI/UX Design</span>
        <span style="background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 20px; font-size: 0.85rem;">Jekyll</span>
    </div>
</div>

<div id="projects">
    <h2 style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.5rem;">Featured Projects</h2>
    <div class="card-grid">
        <div class="card">
            <h3 style="color: #00d2ff;">멋진 반응형 포트폴리오 사이트</h3>
            <p>Jekyll을 활용하여 블로그 포스트 관리와 포트폴리오를 겸할 수 있도록 개선한 사이트입니다.</p>
        </div>
        <div class="card">
            <h3 style="color: #00d2ff;">다크 모드 대시보드</h3>
            <p>Glassmorphism UI를 채택하여 시각적 즐거움을 느낄 수 있도록 만든 React 웹 대시보드입니다.</p>
        </div>
        <div class="card">
            <h3 style="color: #00d2ff;">Open-source Contributions</h3>
            <p>GitHub을 통해 여러 오픈소스 프로젝트의 생태계에 기여하며 협업 경험을 쌓았습니다.</p>
        </div>
    </div>
</div>