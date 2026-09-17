export const profileData = {
  name: 'CurrentJob', title: 'AI · Backend Engineer', updatedAt: '2026.08.30',
  description: '산업 장비의 데이터를 수집하고, AI 모델로 검증해 실제 서비스로 연결하는 엔지니어입니다. 컴퓨터비전·백엔드·장비 통신부터 온프레미스 운영까지 제조 현장의 문제를 해결합니다.',
  avatar: 'https://avatars.githubusercontent.com/u/78770258?v=4',
  roles: ['AI Engineer', 'Backend Developer', 'System Architect'],
  techStack: [
    { category: 'AI · Computer Vision', skills: [
      { name: 'Python', subSkills: ['TensorFlow', 'VAE', '베이지안 추론'] },
      { name: 'Vision', subSkills: ['YOLOv8-seg', 'OCR', 'ONNX', 'Calibration'] },
    ] },
    { category: 'Backend · Industrial Systems', skills: [
      { name: 'API · Data', subSkills: ['FastAPI', 'Django', 'WebSocket', 'SQL', 'ETL'] },
      { name: 'C# · .NET', subSkills: ['.NET 8', 'WPF', 'MVVM', 'Modbus TCP/RTU'] },
      { name: 'Java', subSkills: ['Spring MVC', 'JSP', 'RDBMS'] },
    ] },
    { category: 'Infrastructure · Automation', skills: [
      { name: 'DevOps', subSkills: ['Docker', 'GitLab CI/CD', 'Linux', 'Windows'] },
      { name: 'AI Automation', subSkills: ['vLLM', 'Webhook', '자동 코드리뷰'] },
    ] },
  ],
  experience: [{ year: '2021.11 ~ 재직 중 (2026.08 자료 기준)', role: 'AI · Backend Engineer / 대리', company: '제조 AI·스마트팩토리 기업', desc: '정부·국책 과제 8건 이상 수행. AI 모델 구현·검증·서빙, 산업 장비 통신, 실시간 데이터 처리 및 개발·배포 환경 표준화.' }],
  education: [
    { period: '', title: '컴퓨터정보 전공' },
    { period: '', title: 'Java·Python 기반 빅데이터 개발 교육 수료' },
  ],
  research: ['제조 비전 이상 탐지 관련 학술 논문 작성·발표', '제조 AI 검사 기술 관련 특허 출원·등록'],
  socials: [{ name: 'GitHub', url: 'https://github.com/currentJob', icon: 'github' }, { name: 'Email', url: 'mailto:78770258+currentJob@users.noreply.github.com', icon: 'email' }],
};

export const portfolioData = [
  {
    id: 'vision-marking', category: 'AI/Vision', icon: '◎', accentBar: '#8b5cf6',
    title: '비전 기반 치수 측정 및 레이저 마킹 자동화', period: '2025.12 ~ 2026.07', role: '아키텍처 설계 · 모델 구축·학습 · 장비 통신',
    description: '제품 형상을 픽셀 단위로 인식하고 실제 치수와 장비 좌표로 변환하는 공정 자동화 시스템.',
    tech: ['Python', 'YOLOv8-seg', 'ONNX', '2D/3D Vision', 'Calibration'],
    problem: '수작업 치수 측정과 입력에 시간이 소요되고 작은 제품에도 일관된 위치와 크기로 식별 정보를 각인해야 했습니다.',
    implementation: ['YOLOv8-seg 학습 및 ONNX 변환으로 장비 내 추론 구성', '2D/3D 카메라와 레이저 각인기 통신 모듈 개발', '이미지 좌표 → 물리 치수 → 각인기 좌표 변환 및 중앙부 자동 각인'],
    validation: '실측 치수와 산출 치수를 비교하고 좌표 변환 단계별 오차 요인을 점검했습니다.',
    outcomes: ['측정부터 마킹까지 공정 자동화', '공정 자동화'],
  },
  {
    id: 'industrial-monitoring', category: 'System', icon: '⌁', accentBar: '#6366f1',
    title: '실시간 통합 진단 모니터링 플랫폼', period: '2023.07 ~ 진행 중 · 2026.12 종료 예정', role: '시스템 아키텍처 설계 · 장비 통신 개발',
    description: '플라즈마 전처리 공정의 8종 이상 이기종 계측 장비를 공통 통신 구조로 통합 제어.',
    tech: ['C#', '.NET 8', 'WPF', 'MVVM', 'Modbus', 'Serial'],
    problem: '장비마다 통신 방식이 달라 신규 장비와 데이터 포맷이 추가될 때마다 개발 비용이 누적됐습니다.',
    implementation: ['Protocol/Transport 계층 분리 및 공통 인터페이스 추상화', '비동기·멀티스레드 기반 다중 장비 통합 제어 및 데이터 처리', 'Timeout·응답 누락 재시도·자동 복구 및 로그 기반 장애 추적'],
    validation: '다중 프로토콜 장비 동시 제어와 신규 장비 추가 시나리오를 통합 테스트했습니다.',
    outcomes: ['신규 장비 기능 개발 기간 2주 → 3일', '공통 아키텍처를 반도체 식각공정 모니터링·분석 과제에 재사용'],
  },
  {
    id: 'ai-devops', category: 'DevOps', icon: '↗', accentBar: '#10b981',
    title: 'AI 코드리뷰 및 온프레미스 DevOps 자동화', period: '2022 ~ 진행 중 (2026.08 자료 기준)', role: 'CI/CD 설계·구축 · 인프라 운영 · 레거시 구조 개선',
    description: 'GitLab CI/CD와 vLLM 기반 코드리뷰를 연결하고 MES/POP 개발·배포 과정을 표준화.',
    tech: ['Docker', 'GitLab CI/CD', 'vLLM', 'Webhook', 'On-Premise'],
    problem: '수작업 배포와 코드리뷰 병목, 중복 코드로 인한 유지보수 부담을 줄일 필요가 있었습니다.',
    implementation: ['GitLab·Runner를 Docker로 구성하고 CI/CD 파이프라인 구축', 'Webhook·vLLM 기반 자동 코드리뷰 및 개선 가이드 생성', 'MES/POP의 책임 분리 및 공통 기능 라이브러리화'],
    validation: null,
    outcomes: ['레거시 핵심 모듈 코드량 30% 이상 절감', '배포·운영 절차 표준화 및 코드리뷰 병목 완화'],
  },
  {
    id: 'mold-rul', category: 'AI/ML', icon: '⚙', accentBar: '#06b6d4',
    title: '금형 잔여 수명 예측 및 모니터링', period: '2025.03 ~ 2025.06', role: '시스템 설계 · PLC 통신 · 모델 구현·서빙',
    description: 'PLC 센서 데이터와 베이지안 추론을 연결한 금형 잔여 수명(RUL) 예측 서비스.',
    tech: ['Python', 'FastAPI', 'Django', 'Modbus TCP', 'WebSocket'],
    problem: '금형 마모 상태를 사전에 파악하기 어려워 예기치 못한 생산 중단에 대응해야 했습니다.',
    implementation: ['Modbus TCP로 PLC 데이터 수집 및 ORM 기반 저장 구조 설계', '불량률 예측 기반 베이지안 RUL 모델을 FastAPI로 서빙', 'Django·FastAPI 간 WebSocket 스트리밍 및 사전 경고 구현'],
    validation: null,
    outcomes: ['예측 기반 사전 경고 체계 구축', 'PLC 통신 인터페이스 추상화로 장비 확장에 대응'],
  },
  {
    id: 'weld-anomaly', category: 'AI/Vision', icon: '◇', accentBar: '#ec4899',
    title: '차체 프레임 용접 불량 이상 탐지', period: '2022.05 ~ 2023.12', role: 'PL · 기술 기획 · 모델 구현 · 논문 작성·발표',
    description: '정상 데이터로 학습하는 VAE 이상 탐지를 실제 용접 검사 공정에 적용.',
    tech: ['Python', 'TensorFlow', 'VAE', 'PySide', 'MySQL'],
    problem: '불량 데이터가 적고 유형이 다양해 지도학습 분류에 필요한 학습 데이터를 확보하기 어려웠습니다.',
    implementation: ['정상 이미지 기반 VAE 모델 설계·최적화', '카메라 취득·제어 API 및 PySide 자동 판정 GUI 구성', '학습·추론 결과와 연계한 데이터베이스 및 분석 구조 설계'],
    validation: '현장 전문가와 판정 임계치의 타당성을 정의하고 재구성 오차를 실제 불량 사례와 비교했습니다.',
    outcomes: ['제조업 자동화 기술 적용 우수 사례 선정', '검사 기술 특허 출원·등록 및 학술 논문 발표'],
  },
  {
    id: 'food-ocr', category: 'AI/Vision', icon: '▤', accentBar: '#f59e0b',
    title: '식품 포장 OCR 인쇄 품질 검사', period: '2022.04 ~ 2022.10', role: '머신비전 검사 시스템 개발',
    description: '포장 인쇄 문자를 실시간 추출하고 기준 텍스트와 비교하는 자동 검사 시스템.',
    tech: ['Python', 'OCR', 'Vision API'],
    problem: '육안 검사는 작업자의 피로도와 숙련도에 따라 결과가 달라질 수 있었습니다.',
    implementation: ['카메라 이미지에서 문자 추출 및 기준 문자열 비교', '문자 누락·번짐·오인쇄 판정과 컨베이어 머신비전 연동'],
    validation: '육안 검사와 OCR 판정을 비교해 오탐·미탐 사례를 수집하고 판정 기준을 조정했습니다.',
    outcomes: ['해당 공정에서 초당 8개 판정 구현', '육안 검사 의존도 완화 및 검사 신뢰도 향상'],
  },
  {
    id: 'training-data', category: 'Data', icon: '▦', accentBar: '#14b8a6',
    title: 'AI 학습 데이터 구축 및 품질 관리', period: '사업 기간 2021.05 ~ 2022.12', role: '설계 · 개발 · 데이터 관리',
    periodNote: '사업 전체 기간입니다. 개인 재직 시작은 2021.11이며 참여 시작일과는 구분합니다.',
    description: '200만 건 이상 메타데이터의 조회·검수와 이미지 비식별화를 지원하는 데이터 파이프라인.',
    tech: ['Java', 'Spring MVC', 'JSP', 'RDBMS', 'ETL', 'Docker', 'CNN'],
    problem: '대규모 데이터 품질 관리와 수작업 개인정보 비식별화에 많은 시간과 비용이 필요했습니다.',
    implementation: ['웹 저작 도구의 조회·필터링·출력 및 ETL 파이프라인 구현', 'CNN 기반 얼굴·번호판 검출 및 Blur 비식별화 자동화', 'Docker 마이그레이션 및 배포 환경 표준화'],
    validation: '작업자·검수자·관리자 권한을 분리해 다단계 검수하고 결측·이상 메타데이터와 비식별화 누락을 확인했습니다.',
    outcomes: ['200만 건 이상 메타데이터 처리·품질 관리', '데이터 가공 자동화 및 사업 기간 내 구축 완료'],
  },
];

export const additionalProjects = [
  { title: '차량 샤프트 양·불 판정', period: '2023.08 ~ 2023.12', role: 'PM', description: '딥러닝 모델 연동 및 백엔드 아키텍처 설계' },
  { title: '당뇨약 수율 개선 분석', period: '2023.05 ~ 2023.12', role: '개발 · 분석', description: 'Random Forest·선형회귀 분석, EDA 및 웹 리포트 제공' },
  { title: '스마트 챔버 모니터링', period: '2024.01 ~ 2024.02', role: 'PL', description: 'RS-485·Modbus RTU 기반 실시간 센서 모니터링 및 알림' },
];
export const demoProjects = [
  { id: 'yolo-demo', title: 'YOLOv8 세그멘테이션 데모', description: '이미지를 업로드해 객체 세그멘테이션을 테스트하는 개인 웹 데모.', tech: ['YOLOv8', 'Python', 'React', 'Vite'], link: 'https://currentjob.github.io/yolov8-seg-page' },
  { id: 'ocr-demo', title: 'OCR · LLM 요약 데모', description: '이미지 한국어 텍스트 추출과 LLM 요약을 연결한 개인 웹 데모.', tech: ['React', 'TypeScript', 'OCR', 'LLM'], link: 'https://currentjob.github.io/ocr-llm-page' },
];