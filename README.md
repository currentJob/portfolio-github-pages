# CurrentJob 포트폴리오

React 기반 경력·프로젝트 포트폴리오입니다. `react` 브랜치 push 시 GitHub Actions가 GitHub Pages에 배포합니다.

## 개발 및 검증

```sh
npm ci
npm start
npm test -- --watchAll=false
npm run build
```

## 콘텐츠 관리

- `src/data/portfolioData.js`: 프로필, 경력, 교육·연구, 주요 프로젝트 7건, 기타 경력 3건, 개인 데모 2건
- `src/components/ProjectSection.js`: 분야 필터, 프로젝트별 상세, 개인 데모 링크
- [콘텐츠 표준 및 원문 대조 기준](docs/content-standard.md)

업무 프로젝트는 기간·역할·문제·구현·검증·성과로 정리합니다. 검증 방법이 원문에 없는 경우 `validation: null`로 두고 화면에 표시하지 않습니다. 원본 이력서와 개인 식별·보상 정보는 공개 저장소에 포함하지 않습니다.

최신 경력 자료 기준일: 2026.08.30. 진행 중 상태는 해당 자료를 기준으로 하며, 미래 종료일은 예정으로 표시합니다.