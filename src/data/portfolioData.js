export const profileData = {
  name: "CurrentJob",
  title: "AI Backend Engineer",
  description: "산업 현장의 데이터를 지능형 서비스로 연결하는 4년차 AI 백엔드 엔지니어입니다. 다양한 장비와의 통신 프로토콜 구현에 능숙하며, 이를 AI 모델과 연계하여 공정 자동화를 수행하고 있습니다.",
  avatar: "https://avatars.githubusercontent.com/u/9919?v=4", // placeholder
  techStack: ["Java", "C#", "Python", "Docker", "Git", "React", "WPF"]
};

export const portfolioData = [
  {
    id: 1,
    title: "실시간 PLC 장비 통신으로 금형 수명 예측 시스템 개발",
    description: "불량률 예측 기반의 베이지안 추론을 이용하여, 금형 잔여 수명(RUL) 예측 시스템 구축",
    tech: ["Python", "FastAPI", "Django", "RESTful API"],
    link: "#",
    span: "col-span-1 row-span-1",
    color: "var(--gradient-1)"
  },
  {
    id: 2,
    title: "메시징 기반 실시간 모니터링 시스템",
    description: "공정 가스 플라즈마 전처리 시스템의 실시간 통합 진단 모니터링 플랫폼 개발",
    tech: ["C#", "WPF", "MVVM", "Clean Architecture", "OOP"],
    link: "#",
    span: "col-span-2 row-span-2",
    color: "var(--gradient-2)"
  },
  {
    id: 3,
    title: "AI 차체 프레임 용접 판정 솔루션",
    description: "이상 탐지 모델 기반 차체 용접 불량 검사 지능화 솔루션 개발",
    tech: ["Python", "Vision", "VAE", "PySide"],
    link: "#",
    span: "col-span-1 row-span-1",
    color: "var(--gradient-3)"
  },
  // {
  //   id: 4,
  //   title: "데이터 처리 파이프라인",
  //   description: "고용량 장비 응답 데이터를 스레드 블로킹 없이 처리하는 비동기 시스템",
  //   tech: ["Python", "Docker", "AsyncIO"],
  //   link: "#",
  //   span: "col-span-2 row-span-1",
  //   color: "var(--gradient-4)"
  // }
];
