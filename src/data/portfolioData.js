export const profileData = {
  name: 'CurrentJob', title: 'AI · Backend Engineer',
  description: '컴퓨터비전과 백엔드 기술로 제조 현장의 검사·측정·모니터링 시스템을 개발합니다. 장비 통신과 데이터 수집부터 AI 모델 구현·검증·서빙, 온프레미스 운영까지 전체 흐름을 설계하고 구현해 왔습니다.',
  avatar: 'https://avatars.githubusercontent.com/u/78770258?v=4',
  roles: ['AI Engineer', 'Backend Developer', 'System Architect'],
  techStack: [
    { category: 'AI · Computer Vision', skills: [
      { name: 'Python · ML', subSkills: ['TensorFlow', 'VAE', 'CNN', '베이지안 추론', 'Random Forest'] },
      { name: 'Vision', subSkills: ['YOLOv8-seg', 'OCR', '2D/3D Vision', 'Calibration', 'ONNX'] },
    ] },
    { category: 'Backend · Application', skills: [
      { name: 'Python API', subSkills: ['FastAPI', 'Django', 'Flask', 'REST API', 'WebSocket', 'Swagger'] },
      { name: 'C# · .NET', subSkills: ['.NET 8', 'WPF', 'MVVM', '비동기·멀티스레드', 'DI'] },
      { name: 'Java', subSkills: ['Spring MVC', 'JSP'] },
    ] },
    { category: 'Data · Database', skills: [
      { name: 'Database', subSkills: ['SQL', 'PostgreSQL', 'MySQL', 'MSSQL', 'SQLite', 'ORM'] },
      { name: 'Data Pipeline', subSkills: ['ETL', '메타데이터 모델링', '다단계 검수', '이미지 비식별화'] },
    ] },
    { category: 'Industrial Communication', skills: [
      { name: 'Protocol', subSkills: ['Modbus TCP/RTU', 'RS-232/485', 'TCP/IP', 'LXI', 'PLC'] },
      { name: 'Architecture', subSkills: ['Protocol/Transport 분리', '공통 인터페이스', '장애 복구', '로그 추적'] },
    ] },
    { category: 'Infrastructure · Automation', skills: [
      { name: 'DevOps', subSkills: ['Docker', 'GitLab', 'GitLab Runner', 'CI/CD', 'Linux', 'Windows'] },
      { name: 'AI Automation', subSkills: ['vLLM', 'Webhook', '자동 코드리뷰', '개선 가이드 생성'] },
    ] },
  ],
  experience: [{ year: '2021.11 ~ 재직 중', role: 'AI · Backend Engineer / 대리', company: '에프원소프트㈜ · AI융합본부', desc: '정부·국책 과제 8건 이상에서 AI 모델 개발·서빙, 장비 통신 및 실시간 데이터 처리 시스템을 담당했습니다. 공통 통신 아키텍처 재사용으로 신규 장비 개발 기간을 2주에서 3일로 단축하고, 사내 CI/CD와 AI 코드리뷰 자동화를 구축했습니다.' }],
  strengths: [
    { title: 'AI 모델의 현장 적용', description: '세그멘테이션·OCR·이상 탐지·수명 예측 모델을 구현하고 ONNX와 FastAPI로 장비 및 서비스에 적용합니다.' },
    { title: '확장 가능한 장비 통신', description: '8종 이상 계측 장비의 프로토콜을 공통 인터페이스로 추상화하고 비동기 수집·제어와 오류 복구를 설계합니다.' },
    { title: '대규모 데이터 처리', description: '200만 건 이상 메타데이터와 4.5TB 규모 데이터셋의 가공·검수·비식별화 파이프라인을 구축했습니다.' },
    { title: '개발·운영 자동화', description: '온프레미스 GitLab CI/CD와 vLLM 코드리뷰를 구축하고, 레거시 리팩토링으로 핵심 모듈 코드량을 30% 이상 줄였습니다.' },
  ],
  socials: [{ name: 'GitHub', url: 'https://github.com/currentJob', icon: 'github' }],
};

export const portfolioData = [
  {
    id: 'vision-marking', category: 'AI/Vision', icon: '◎', accentBar: '#8b5cf6',
    title: '비전 기반 치수 측정 및 레이저 마킹 자동화', scale: '사업 규모 4억 원', period: '2025.12 ~ 2026.07', role: '아키텍처 설계 · 모델 구축·학습 · 장비 통신',
    description: 'YOLOv8-seg로 제품의 형상을 인식하고, 카메라 좌표를 실제 치수와 레이저 마킹 좌표로 변환해 측정부터 각인까지 자동화했습니다.',
    tech: ['Python', 'YOLOv8-seg', 'ONNX', '2D/3D Vision', 'Calibration'],
    problem: '다수 제품의 치수를 수작업으로 측정·입력하는 공정에서 처리 시간과 측정 오류를 줄여야 했습니다. 크기가 작은 제품에도 식별 정보를 일정한 위치와 크기로 각인하는 것이 핵심 과제였습니다.',
    implementation: ['제품 경계를 픽셀 단위로 구분하기 위해 YOLOv8-seg를 선택·학습하고 ONNX로 변환해 장비 내 추론 구성', '2D/3D 카메라와 레이저 각인기의 통신 모듈을 개발해 이미지 취득부터 장비 제어까지 연결', '이미지 좌표 → 물리 치수 → 각인기 좌표 변환 및 중앙부 자동 각인'],
    validation: '실측 치수와 산출 치수를 비교하고 좌표 변환 단계별 오차 요인을 점검했습니다.',
    outcomes: ['레이저 각인 정밀도 90% 이상 확보', '제품 치수 측정과 중앙부 레이저 각인을 연결해 수작업 공정 자동화', '수요 기업 해외 사업장 확장을 위한 추가 장비 구축 계약 체결'],
  },
  {
    id: 'industrial-monitoring', category: 'System', icon: '⌁', accentBar: '#6366f1',
    title: '실시간 통합 진단 모니터링 플랫폼', scale: '사업 규모 30.3억 원', period: '2023.07 ~ 진행 중', role: '시스템 아키텍처 설계 · 장비 통신 개발',
    description: '플라즈마 전처리 공정의 8종 이상 계측 장비를 통합 제어하고, 실시간 데이터를 수집·시각화하는 모니터링 플랫폼을 설계했습니다.',
    tech: ['C#', '.NET 8', 'WPF', 'MVVM', 'Modbus', 'Serial'],
    problem: '장비마다 통신 방식이 달라 신규 장비와 데이터 포맷이 추가될 때마다 개발 비용이 누적됐습니다.',
    implementation: ['Protocol/Transport 계층과 장비별 명령을 분리해 새 장비 추가 시 상위 제어 로직을 재사용하도록 설계', '비동기·멀티스레드 기반 다중 장비 제어와 데이터 처리, WPF·MVVM 기반 모니터링 화면 구현', 'Timeout·응답 누락 재시도·자동 복구 및 로그 기반 장애 추적'],
    validation: '다중 프로토콜 장비 동시 제어와 신규 장비 추가 시나리오를 통합 테스트했습니다.',
    outcomes: ['신규 장비 기능 개발 기간 2주 → 3일', '공통 아키텍처를 사업 규모 224.9억 원의 반도체 식각공정 모니터링·분석 과제에 재사용'],
  },
  {
    id: 'ai-devops', category: 'DevOps', icon: '↗', accentBar: '#10b981',
    title: 'AI 코드리뷰 및 온프레미스 DevOps 자동화', period: '2022 ~ 진행 중', role: 'CI/CD 설계·구축 · 인프라 운영 · 레거시 구조 개선',
    description: '온프레미스 GitLab CI/CD와 vLLM 기반 자동 코드리뷰를 구축하고, MES/POP의 구조 개선과 배포 표준화를 수행했습니다.',
    tech: ['Docker', 'GitLab CI/CD', 'vLLM', 'Webhook', 'On-Premise'],
    problem: '수작업 배포와 코드리뷰 병목, 중복 코드로 인한 유지보수 부담을 줄일 필요가 있었습니다.',
    implementation: ['GitLab·Runner를 Docker로 구성하고 CI/CD 파이프라인 구축', 'Webhook·vLLM 기반 자동 코드리뷰 및 개선 가이드 생성', '단일 책임 원칙에 따라 MES/POP의 계층을 분리하고 중복 기능을 공통 라이브러리로 통합'],
    validation: null,
    outcomes: ['레거시 핵심 모듈 코드량 30% 이상 절감', '신규 기능 개발 생산성 20% 향상', '배포·운영 절차 표준화 및 코드리뷰 병목 완화'],
  },
  {
    id: 'mold-rul', category: 'AI/ML', icon: '⚙', accentBar: '#06b6d4',
    title: '금형 잔여 수명 예측 및 모니터링', period: '2025.03 ~ 2025.06', role: '시스템 설계 · PLC 통신 · 모델 구현·서빙',
    description: 'PLC에서 수집한 센서 데이터를 바탕으로 금형 잔여 수명을 예측하고, 실시간 모니터링과 사전 경고로 연결하는 서비스를 개발했습니다.',
    tech: ['Python', 'FastAPI', 'Django', 'Modbus TCP', 'WebSocket'],
    problem: '금형의 마모 상태를 사전에 파악하기 어려워 예기치 못한 생산 중단이 발생했습니다. 센서 데이터 수집과 수명 예측을 연결해 교체 시점 판단을 지원할 필요가 있었습니다.',
    implementation: ['Modbus TCP로 PLC 데이터 수집 및 ORM 기반 저장 구조 설계', '불량률 예측 기반 베이지안 RUL 모델을 FastAPI로 서빙', 'Django·FastAPI 간 WebSocket 스트리밍 및 사전 경고 구현'],
    validation: null,
    outcomes: ['예측 기반 사전 경고 체계 구축', 'PLC 통신 인터페이스 추상화로 장비 확장에 대응'],
  },
  {
    id: 'weld-anomaly', category: 'AI/Vision', icon: '◇', accentBar: '#ec4899',
    title: '차체 프레임 용접 불량 이상 탐지', period: '2022.05 ~ 2023.12', role: 'PL · 기술 기획 · 모델 구현·검증',
    description: '불량 데이터가 부족한 용접 검사 공정에 정상 이미지로 학습하는 VAE 이상 탐지를 적용하고, 카메라 제어부터 자동 판정까지 구현했습니다.',
    tech: ['Python', 'TensorFlow', 'VAE', 'PySide', 'MySQL'],
    problem: '불량 데이터가 적고 유형이 다양해 지도학습 분류에 필요한 학습 데이터를 확보하기 어려웠습니다.',
    implementation: ['정상 이미지만으로 학습하는 VAE를 설계하고 재구성 오차 기반의 이상 탐지 모델 최적화', '카메라 취득·제어 API 및 PySide 자동 판정 GUI 구성', '학습·추론 결과와 연계한 데이터베이스 및 분석 구조 설계'],
    validation: '현장 전문가와 판정 임계치의 타당성을 정의하고 재구성 오차를 실제 불량 사례와 비교했습니다.',
    outcomes: ['제조업 자동화 기술 적용 우수 사례 선정 및 후속 사업 수주', '검사 기술 특허 출원·등록'],
  },
  {
    id: 'food-ocr', category: 'AI/Vision', icon: '▤', accentBar: '#f59e0b',
    title: '식품 포장 OCR 인쇄 품질 검사', period: '2022.04 ~ 2022.10', role: '머신비전 검사 시스템 개발',
    description: '컨베이어에서 취득한 포장 이미지의 문자를 OCR로 읽고 기준 텍스트와 비교해 인쇄 불량을 실시간 판정하는 시스템을 개발했습니다.',
    tech: ['Python', 'OCR', 'Vision API', 'Morphology', 'Binary'],
    problem: '육안 검사는 작업자의 피로도와 숙련도에 따라 결과가 달라질 수 있었습니다.',
    implementation: ['Morphology·Binary 기반 이미지 전처리로 OCR 인식 성능 개선', '카메라 이미지에서 문자 추출 및 기준 문자열 비교', '문자 누락·번짐·오인쇄 판정과 컨베이어 머신비전 연동'],
    validation: '육안 검사와 OCR 판정을 비교해 오탐·미탐 사례를 수집하고 판정 기준을 조정했습니다.',
    outcomes: ['OCR 인식률 83% → 99.7% 개선', '컨베이어 검사 공정에서 초당 8개 제품의 인쇄 품질 판정 구현', '육안 검사 의존도 완화 및 검사 신뢰도 향상'],
  },
  {
    id: 'training-data', category: 'Data', icon: '▦', accentBar: '#14b8a6',
    title: 'AI 학습 데이터 구축 및 품질 관리', scale: '사업 규모 38억 원', period: '사업 기간 2021.05 ~ 2022.12', role: '설계 · 개발 · 데이터 관리',

    description: '200만 건 이상 메타데이터를 관리하는 웹 저작 도구와 ETL 파이프라인을 개발하고, 이미지 비식별화와 다단계 검수 흐름을 구축했습니다.',
    tech: ['Java', 'Spring MVC', 'JSP', 'RDBMS', 'ETL', 'Docker', 'CNN'],
    problem: '대규모 데이터 품질 관리와 수작업 개인정보 비식별화에 많은 시간과 비용이 필요했습니다.',
    implementation: ['Spring MVC 기반 웹 저작 도구의 조회·필터링·출력 기능을 개선하고 수집·가공·저장을 연결하는 ETL 구현', 'CNN 기반 얼굴·번호판 검출 및 Blur 비식별화 자동화', '기존 저작 도구를 Docker 컨테이너로 이전해 배포·운영 환경 표준화'],
    validation: '작업자·검수자·관리자 권한을 분리해 다단계 검수하고 결측·이상 메타데이터와 비식별화 누락을 확인했습니다.',
    outcomes: ['200만 건 이상 메타데이터 처리·품질 관리', '60GB 이상 어노테이션 메타데이터 구조 정의 및 4.5TB 데이터셋 구축', '데이터 가공 자동화 및 사업 기간 내 구축 완료'],
  },
];

export const additionalProjects = [
  { title: '차량 샤프트 양·불 판정', period: '2023.08 ~ 2023.12', role: 'PM', description: 'PM으로 차량 샤프트 양·불 판정 솔루션의 딥러닝 모델 연동과 백엔드 아키텍처 설계를 담당했습니다.' },
  { title: '당뇨약 수율 개선 분석', period: '2023.05 ~ 2023.12', role: '개발 · 분석', description: 'Random Forest·선형회귀와 탐색적 데이터 분석으로 수율을 분석하고, 웹 리포트로 공정 의사결정을 지원했습니다.' },
  { title: '스마트 챔버 모니터링', period: '2024.01 ~ 2024.02', role: 'PL', description: 'PL로 RS-485·Modbus RTU 기반 센서 데이터 수집, 실시간 모니터링 및 알림 시스템을 설계했습니다.' },
];
export const demoProjects = [
  { id: 'yolo-demo', title: 'YOLOv8 세그멘테이션 데모', description: '업로드한 이미지에 YOLOv8 모델을 적용해 객체의 분할 영역을 확인하는 웹 데모입니다.', tech: ['YOLOv8', 'Python', 'React', 'Vite'], link: 'https://currentjob.github.io/yolov8-seg-page' },
  { id: 'ocr-demo', title: 'OCR · LLM 요약 데모', description: '이미지에서 한국어 텍스트를 추출하고 LLM으로 내용을 요약하는 웹 데모입니다.', tech: ['React', 'TypeScript', 'OCR', 'LLM'], link: 'https://currentjob.github.io/ocr-llm-page' },
];