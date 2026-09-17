# CurrentJob | AI · Backend Engineer

컴퓨터비전과 백엔드 기술로 제조 현장의 검사·측정·모니터링 시스템을 개발합니다. 장비 통신, AI 모델 구현·서빙, 온프레미스 운영 경험을 소개합니다.

[포트폴리오 보기](https://currentjob.github.io/portfolio-github-pages/)

## 주요 프로젝트

- 비전 기반 치수 측정 및 레이저 마킹 자동화
- 실시간 통합 진단 모니터링 플랫폼
- AI 코드리뷰 및 온프레미스 DevOps 자동화
- 금형 잔여 수명 예측 및 모니터링
- 차체 프레임 용접 불량 이상 탐지
- 식품 포장 OCR 인쇄 품질 검사
- AI 학습 데이터 구축 및 품질 관리

## 개발 및 검증

```sh
npm ci
npm start
npm test -- --watchAll=false
npm run build
```

프로필과 프로젝트 데이터는 `src/data/portfolioData.js`에서 관리합니다. `react` 브랜치에 push하면 GitHub Actions를 통해 GitHub Pages에 배포됩니다.