export const profileData = {
  name: 'CurrentJob', title: 'AI · Backend Engineer',
  description: '제조 현장에서 사용하는 검사·측정·모니터링 시스템을 개발해 왔습니다. 카메라와 계측 장비에서 데이터를 받아 AI 모델로 처리하고, API나 데스크톱 프로그램으로 연결하는 일을 주로 합니다.',
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
  experience: [{ year: '2021.11 ~ 재직 중', role: 'AI · Backend Engineer / 대리', company: '에프원소프트㈜ · AI융합본부', desc: '정부·국책 과제를 중심으로 AI 모델 개발과 서빙, 장비 통신, 실시간 데이터 처리를 맡고 있습니다. 여러 장비에서 함께 쓸 수 있는 통신 구조를 만들었고, 사내 GitLab CI/CD와 코드리뷰 자동화도 운영했습니다.' }],
  strengths: [
    { title: '모델을 장비까지 연결하기', description: '세그멘테이션, OCR, 이상 탐지, 수명 예측 모델을 만들고 ONNX와 FastAPI를 이용해 실제 장비와 서비스에 붙였습니다.' },
    { title: '장비 통신 구조 만들기', description: '8종 이상 계측 장비의 서로 다른 프로토콜을 공통 인터페이스로 묶고, 비동기 수집과 오류 복구를 구현했습니다.' },
    { title: '데이터 가공과 검수', description: '200만 건 이상의 메타데이터와 4.5TB 데이터셋을 가공하고 검수하는 파이프라인을 운영했습니다.' },
    { title: '개발 환경 정리와 자동화', description: '온프레미스 GitLab CI/CD와 vLLM 코드리뷰를 도입했고, 레거시 모듈을 정리해 코드량을 30% 이상 줄였습니다.' },
  ],
  socials: [{ name: 'GitHub', url: 'https://github.com/currentJob', icon: 'github' }],
};

export const portfolioData = [
  {
    id: 'vision-marking', category: 'AI/Vision', icon: '◎', accentBar: '#8b5cf6',
    title: '비전 기반 치수 측정 및 레이저 마킹 자동화', scale: '사업 규모 4억 원', period: '2025.12 ~ 2026.07', role: '아키텍처 설계 · 모델 구축·학습 · 장비 통신',
    description: '카메라로 제품 외곽을 찾고 치수를 계산한 뒤, 계산한 위치에 레이저를 각인하는 공정을 개발했습니다.',
    tech: ['Python', 'YOLOv8-seg', 'ONNX', '2D/3D Vision', 'Calibration'],
    problem: '작업자가 제품 치수를 재고 각인 위치를 직접 입력하고 있었습니다. 제품이 작아져도 같은 위치와 크기로 식별 정보를 새길 수 있어야 했습니다.',
    implementation: ['제품 경계를 픽셀 단위로 구분할 수 있도록 YOLOv8-seg를 학습하고, 장비에서 실행할 수 있게 ONNX로 변환했습니다.', '2D·3D 카메라와 레이저 각인기 통신 모듈을 작성해 이미지 촬영부터 각인 명령까지 한 흐름으로 연결했습니다.', '이미지 좌표를 실제 치수와 각인기 좌표로 차례로 변환해 제품 중앙을 계산했습니다.'],
    validation: '계산한 치수와 실측값을 비교하면서 카메라 보정과 좌표 변환 단계의 오차를 확인했습니다.',
    outcomes: ['레이저 각인 정밀도 90% 이상 확보', '치수 측정과 중앙부 각인을 한 공정으로 연결', '해외 사업장용 추가 장비 구축 계약 체결'],
  },
  {
    id: 'industrial-monitoring', category: 'System', icon: '⌁', accentBar: '#6366f1',
    title: '실시간 통합 진단 모니터링 플랫폼', scale: '사업 규모 30.3억 원', period: '2023.07 ~ 진행 중', role: '시스템 아키텍처 설계 · 장비 통신 개발',
    description: '플라즈마 전처리 공정에서 사용하는 8종 이상의 계측 장비를 한 프로그램에서 제어하고 모니터링할 수 있도록 만들었습니다.',
    tech: ['C#', '.NET 8', 'WPF', 'MVVM', 'Modbus', 'Serial'],
    problem: '장비마다 프로토콜과 데이터 형식이 달라 장비가 추가될 때마다 통신 코드를 다시 작성해야 했습니다.',
    implementation: ['통신 방식과 장비 명령을 분리해 상위 제어 로직은 장비 종류와 관계없이 재사용하도록 구성했습니다.', '여러 장비를 동시에 제어하고 데이터를 받을 수 있도록 비동기 처리 구조를 적용했습니다.', '응답 지연과 누락을 처리하는 재시도·복구 로직을 넣고, 문제를 추적할 수 있도록 통신 로그를 남겼습니다.'],
    validation: '서로 다른 프로토콜의 장비를 동시에 연결하고, 새 장비를 추가하는 과정까지 통합 테스트했습니다.',
    outcomes: ['신규 장비 기능 개발 기간 2주 → 3일', '같은 통신 구조를 반도체 식각공정 모니터링 과제에 재사용'],
  },
  {
    id: 'ai-devops', category: 'DevOps', icon: '↗', accentBar: '#10b981',
    title: 'AI 코드리뷰 및 온프레미스 DevOps 자동화', period: '2022 ~ 진행 중', role: 'CI/CD 설계·구축 · 인프라 운영 · 레거시 구조 개선',
    description: '사내 GitLab의 빌드·배포 과정을 자동화하고, vLLM으로 코드 변경 사항을 검토하는 도구를 붙였습니다.',
    tech: ['Docker', 'GitLab CI/CD', 'vLLM', 'Webhook', 'On-Premise'],
    problem: '배포 절차가 사람마다 달랐고, 리뷰 대기 시간과 MES·POP의 중복 코드가 개발 속도를 늦추고 있었습니다.',
    implementation: ['GitLab과 Runner를 Docker로 운영하고 프로젝트별 빌드·배포 파이프라인을 작성했습니다.', 'Merge Request Webhook을 vLLM과 연결해 변경 내용을 요약하고 검토 의견을 남기도록 했습니다.', 'MES·POP의 역할이 섞인 계층을 나누고 중복 기능을 공통 라이브러리로 옮겼습니다.'],
    validation: null,
    outcomes: ['레거시 핵심 모듈 코드량 30% 이상 절감', '신규 기능 개발 생산성 20% 향상', '팀의 배포 절차를 하나로 통일'],
  },
  {
    id: 'mold-rul', category: 'AI/ML', icon: '⚙', accentBar: '#06b6d4',
    title: '금형 잔여 수명 예측 및 모니터링', period: '2025.03 ~ 2025.06', role: '시스템 설계 · PLC 통신 · 모델 구현·서빙',
    description: 'PLC 센서 데이터를 수집해 금형의 남은 사용 시간을 계산하고, 교체 시점을 미리 알리는 서비스를 개발했습니다.',
    tech: ['Python', 'FastAPI', 'Django', 'Modbus TCP', 'WebSocket'],
    problem: '금형이 언제 한계에 도달하는지 알기 어려워 생산 중에 갑자기 교체해야 하는 경우가 있었습니다.',
    implementation: ['Modbus TCP로 PLC 값을 읽어 데이터베이스에 저장했습니다.', '불량률 변화를 이용한 베이지안 RUL 모델을 만들고 FastAPI로 제공했습니다.', 'Django 화면에 WebSocket으로 예측값을 보내고 기준 이하로 내려가면 경고를 표시했습니다.'],
    validation: null,
    outcomes: ['금형 교체 시점을 위한 사전 경고 기능 제공', '다른 PLC에도 적용할 수 있도록 통신 부분을 분리'],
  },
  {
    id: 'weld-anomaly', category: 'AI/Vision', icon: '◇', accentBar: '#ec4899',
    title: '차체 프레임 용접 불량 이상 탐지', period: '2022.05 ~ 2023.12', role: 'PL · 기술 기획 · 모델 구현·검증',
    description: '불량 이미지가 적은 용접 검사 공정에서 정상 이미지만 학습하는 VAE를 사용해 이상 여부를 판정했습니다.',
    tech: ['Python', 'TensorFlow', 'VAE', 'PySide', 'MySQL'],
    problem: '불량 유형은 여러 가지였지만 확보한 불량 이미지가 적어 일반적인 분류 모델을 학습하기 어려웠습니다.',
    implementation: ['정상 이미지를 복원하도록 VAE를 학습하고, 입력과 복원 이미지의 차이로 이상 점수를 계산했습니다.', '카메라 촬영과 제어 API를 연결하고 PySide로 판정 화면을 만들었습니다.', '이미지와 판정 결과를 다시 확인할 수 있도록 데이터베이스에 저장했습니다.'],
    validation: '실제 불량 이미지의 재구성 오차를 확인하고 현장 담당자와 함께 판정 기준을 조정했습니다.',
    outcomes: ['제조업 자동화 기술 적용 우수 사례 선정과 후속 사업 수주', '검사 방법 관련 특허 출원·등록'],
  },
  {
    id: 'food-ocr', category: 'AI/Vision', icon: '▤', accentBar: '#f59e0b',
    title: '식품 포장 OCR 인쇄 품질 검사', period: '2022.04 ~ 2022.10', role: '머신비전 검사 시스템 개발',
    description: '컨베이어를 지나는 식품 포장의 인쇄 문자를 읽고, 기준 문자열과 비교해 누락과 오인쇄를 찾았습니다.',
    tech: ['Python', 'OCR', 'Vision API', 'Morphology', 'Binary'],
    problem: '빠르게 움직이는 포장을 사람이 계속 확인해야 했고, 작업 시간과 숙련도에 따라 검사 결과가 달라졌습니다.',
    implementation: ['이진화와 Morphology 전처리를 조정해 포장재와 조명의 영향을 줄였습니다.', '카메라 이미지에서 읽은 문자열을 제품별 기준 문자열과 비교했습니다.', '문자 누락·번짐·오인쇄 결과를 컨베이어 제어 신호와 연결했습니다.'],
    validation: '육안 검사 결과와 OCR 판정을 나란히 비교하며 오탐과 미탐 사례를 모아 기준을 조정했습니다.',
    outcomes: ['OCR 인식률 83% → 99.7% 개선', '초당 8개 제품의 인쇄 상태 판정', '반복적인 육안 검사 작업 감소'],
  },
  {
    id: 'training-data', category: 'Data', icon: '▦', accentBar: '#14b8a6',
    title: 'AI 학습 데이터 구축 및 품질 관리', scale: '사업 규모 38억 원', period: '사업 기간 2021.05 ~ 2022.12', role: '설계 · 개발 · 데이터 관리',

    description: 'AI 학습 데이터의 수집·가공·검수를 관리하는 웹 도구와 ETL을 개발하고, 얼굴과 번호판 비식별화를 자동화했습니다.',
    tech: ['Java', 'Spring MVC', 'JSP', 'RDBMS', 'ETL', 'Docker', 'CNN'],
    problem: '수백만 건의 메타데이터를 일관된 기준으로 확인해야 했고, 이미지 속 개인정보를 사람이 일일이 가리고 있었습니다.',
    implementation: ['Spring MVC 웹 도구의 조회와 필터 기능을 고치고, 수집한 데이터를 가공·저장하는 ETL을 작성했습니다.', 'CNN으로 얼굴과 번호판을 찾아 Blur 처리하는 비식별화 작업을 자동화했습니다.', '개발자마다 달랐던 실행 환경을 맞추기 위해 기존 도구를 Docker로 옮겼습니다.'],
    validation: '작업자·검수자·관리자의 확인 단계를 나누고, 누락된 메타데이터와 비식별화되지 않은 이미지를 점검했습니다.',
    outcomes: ['200만 건 이상 메타데이터 처리·검수', '60GB 이상 어노테이션 메타데이터와 4.5TB 데이터셋 구축', '반복적인 데이터 가공과 비식별화 작업 자동화'],
  },
];

export const additionalProjects = [
  { title: '차량 샤프트 양·불 판정', period: '2023.08 ~ 2023.12', role: 'PM', description: '딥러닝 모델을 검사 프로그램에 연동하고 백엔드 구조를 설계했습니다.' },
  { title: '당뇨약 수율 개선 분석', period: '2023.05 ~ 2023.12', role: '개발 · 분석', description: 'Random Forest와 선형회귀로 공정 데이터를 분석하고 결과를 웹 리포트로 만들었습니다.' },
  { title: '스마트 챔버 모니터링', period: '2024.01 ~ 2024.02', role: 'PL', description: 'RS-485·Modbus RTU 센서 데이터를 수집해 실시간 상태와 알림을 보여주는 프로그램을 설계했습니다.' },
];
export const demoProjects = [
  { id: 'yolo-demo', title: 'YOLOv8 세그멘테이션 데모', description: '이미지를 올리면 YOLOv8 모델이 찾은 객체 영역을 브라우저에서 확인할 수 있습니다.', tech: ['YOLOv8', 'Python', 'React', 'Vite'], link: 'https://currentjob.github.io/yolov8-seg-page' },
  { id: 'ocr-demo', title: 'OCR · LLM 요약 데모', description: '이미지에서 한국어 문장을 읽고, 추출한 내용을 LLM으로 요약합니다.', tech: ['React', 'TypeScript', 'OCR', 'LLM'], link: 'https://currentjob.github.io/ocr-llm-page' },
];
