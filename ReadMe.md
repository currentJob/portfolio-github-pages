# 🚀 Jekyll Blog Project

이 프로젝트는 [Jekyll](https://jekyllrb.com/)을 기반으로 한 정적 블로그 사이트입니다.  
블로그 포스트, 페이지, 스타일 등을 효율적으로 관리할 수 있도록 구성되었습니다.

---

## 📂 프로젝트 폴더 구조

project/
├── _config.yml          # 사이트 설정 파일
├── _config.dev.yml      # 개발 환경 설정 파일 (옵션)
├── _posts/              # 블로그 글 저장 폴더 (YYYY-MM-DD-title.md)
├── _layouts/            # 사이트 레이아웃 템플릿
│   ├── default.html     # 기본 레이아웃
│   ├── post.html        # 블로그 게시글 레이아웃
│   ├── page.html        # 개별 페이지 레이아웃
├── _includes/           # 반복적으로 사용하는 HTML 요소 (헤더, 푸터 등)
│   ├── header.html      # 헤더
│   ├── footer.html      # 푸터
│   ├── sidebar.html     # 사이드바
├── _data/               # JSON, YAML 등 데이터 파일 저장 폴더
│   ├── authors.yml      # 작성자 정보
│   ├── navigation.yml   # 네비게이션 메뉴 설정
├── _sass/               # SCSS 스타일 파일 저장 폴더
│   ├── _variables.scss  # 스타일 변수 설정
│   ├── _layout.scss     # 레이아웃 스타일
├── assets/              # 정적 리소스 (CSS, JS, 이미지)
│   ├── css/             # 스타일시트
│   │   ├── main.css     # 기본 스타일
│   │   ├── custom.css   # 사용자 정의 스타일
│   ├── js/              # 자바스크립트 파일
│   │   ├── main.js      # 기본 스크립트
│   │   ├── analytics.js # 분석 관련 스크립트
│   ├── images/          # 이미지 리소스
│   │   ├── logo.png     # 로고 이미지
│   │   ├── banner.jpg   # 배너 이미지
├── pages/               # 개별 페이지 (예: 소개, 연락처)
│   ├── about.md         # 소개 페이지
│   ├── contact.md       # 연락처 페이지
├── 404.html             # 404 에러 페이지
├── index.html           # 메인 페이지
├── feed.xml             # RSS 피드 파일
├── Gemfile              # Jekyll 및 플러그인 관리 파일
├── Gemfile.lock         # Bundler가 관리하는 종속성 파일
└── .gitignore           # Git 무시 파일 목록