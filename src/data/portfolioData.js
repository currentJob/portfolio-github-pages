export const profileData = {
  name: "CurrentJob",
  title: "AI Backend Engineer",
  description:
    "산업 현장의 데이터를 지능형 서비스로 연결하는 4년차 AI 백엔드 엔지니어입니다. 다양한 장비와의 통신 프로토콜 구현에 능숙하며, 이를 AI 모델과 연계하여 공정 자동화를 수행하고 있습니다.",
  avatar: "https://avatars.githubusercontent.com/u/78770258?v=4",
  techStack: ["Java", "C#", "Python", "Docker", "Git", "React", "WPF"],
  roles: ["Backend Developer", "AI Engineer", "System Architect"],
  experience: [
    {
      year: "2023 — Present",
      role: "AI Backend Engineer",
      company: "현직",
      desc: "AI 모델 기반 공정 자동화 시스템 설계 및 개발",
    },
    {
      year: "2021 — 2023",
      role: "Software Engineer",
      company: "이전 직장",
      desc: "장비 통신 프로토콜 및 데이터 수집 시스템 구축",
    },
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/currentJob",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: "email",
    },
  ],
};

export const portfolioData = [
  {
    id: 1,
    icon: "⚙️",
    category: "AI/ML",
    title: "실시간 PLC 장비 통신으로 금형 수명 예측 시스템 개발",
    description:
      "불량률 예측 기반의 베이지안 추론을 이용하여, 금형 잔여 수명(RUL) 예측 시스템 구축",
    tech: ["Python", "FastAPI", "Django", "RESTful API"],
    link: "#",
    span: "",
    gradient: "var(--card-gradient-1)",
    accentBar: "#6366f1",
  },
  {
    id: 2,
    icon: "📊",
    category: "System",
    title: "메시징 기반 실시간 모니터링 시스템",
    description:
      "공정 가스 플라즈마 전처리 시스템의 실시간 통합 진단 모니터링 플랫폼 개발",
    tech: ["C#", "WPF", "MVVM", "Clean Architecture", "OOP"],
    link: "#",
    span: "featured",
    gradient: "var(--card-gradient-2)",
    accentBar: "#8b5cf6",
  },
  {
    id: 3,
    icon: "🔍",
    category: "AI/Vision",
    title: "AI 차체 프레임 용접 판정 솔루션",
    description:
      "이상 탐지 모델 기반 차체 용접 불량 검사 지능화 솔루션 개발",
    tech: ["Python", "Vision", "VAE", "PySide"],
    link: "#",
    span: "",
    gradient: "var(--card-gradient-3)",
    accentBar: "#ec4899",
  },
  {
    id: 4,
    icon: "🚀",
    category: "Backend",
    title: "비동기 데이터 처리 파이프라인",
    description:
      "고용량 장비 응답 데이터를 스레드 블로킹 없이 처리하는 비동기 시스템",
    tech: ["Python", "Docker", "AsyncIO"],
    link: "#",
    span: "",
    gradient: "var(--card-gradient-4)",
    accentBar: "#10b981",
  },
  {
    id: 5,
    icon: "🧠",
    category: "AI/Vision",
    title: "YOLOv8 이미지 세그멘테이션 테스트 플랫폼",
    description:
      "직접 학습한 YOLOv8 모델로 이미지를 업로드하여 객체 세그멘테이션을 테스트해볼 수 있는 웹 데모 플랫폼",
    tech: ["YOLOv8", "Python", "React", "Vite"],
    link: "https://currentjob.github.io/yolov8-seg-page",
    span: "featured",
    gradient: "var(--card-gradient-5)",
    accentBar: "#f59e0b",
  },
];
