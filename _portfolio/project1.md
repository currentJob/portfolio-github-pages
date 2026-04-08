---
layout: portfolio
title: "실시간 모니터링 시스템"
description: "공정 가스 플라즈마 전처리 시스템의 실시간 통합 진단 모니터링 플랫폼 개발"
tech: ["C#", "WPF", "MVVM", "OOP", "Clean Architecture", "Design Patterns"]
order: 1
---

### 📌 프로젝트 개요
공정 가스 플라즈마 전처리 시스템의 실시간 통합 진단 모니터링 플랫폼을 개발하였습니다. 다양한 이기종 장비를 단일 인터페이스로 통합 관리 및 제어할 수 있는 구조를 전면적으로 새롭게 구축하여, 복잡한 장비 제어 시스템의 유지보수성과 확장성을 극대화했습니다.

### 💡 주요 기능 및 아키텍처 설계
- **클린 아키텍처(Clean Architecture) 및 DDD 분리**: 코어 라이브러리(`RTMS.DeviceLib`)를 `Application`, `Domain`, `Infrastructure` 계층으로 엄격히 분리하여 비즈니스 로직과 외부 하드웨어 통신 의존성을 완벽히 격리했습니다.
- **Factory 및 Strategy 패턴을 통한 플러그인 확장성**: `IDeviceFactory`, `IProtocolServiceFactory` 등 디자인 패턴을 적극 채용하여, Modbus(RTU/TCP) 외에도 LeCroy(오실로스코프), Octiv, CW240(전력분석기), ANFS 등 완전 다른 규격의 장비 통신 모듈을 기존 코드 수정 없이 추가할 수 있는(OCP 준수) 개방형 구조를 설계했습니다.
- **Dependency Injection (DI) 기반 컨테이너 관리**: `Microsoft.Extensions.DependencyInjection`을 WPF 환경에 도입하여 서비스 및 ViewModel의 생명주기를 완벽히 제어하고 각 컴포넌트 간 결합도를 최소화했습니다.
- **강력한 비동기 멀티스레드 제어**: `MonitoringService`, `DeviceConnectionManager`, `DevicePollingService` 등의 백그라운드 관리 서비스를 구축하여, 동시에 여러 포트와 프로토콜에서 들어오는 고용량 장비 응답 데이터를 스레드 블로킹 없이 안정적으로 폴링(Polling)하고 처리합니다.
- **고도화된 WPF MVVM 및 라우팅 구조**: View와 ViewModel을 독립적인 싱글톤(Singleton)으로 등록하고, 자체적인 Dictionary 라우팅 컨테이너를 구현하여 복잡한 페이지(측정, 스미스차트, 로그, 그래프 분석 등) 간의 상태 유지 및 유연한 뷰 전환 체계를 완성했습니다.

### 🏆 업무 성과
다수의 상이한 프로토콜(Serial, TCP, SCPI, HTTP 등)을 가지는 장비들을 하나의 시스템에서 통합 제어할 수 있는 표준 체계를 완성했습니다. 극대화된 아키텍처 효율성과 재사용성 덕분에 장비 추가 시의 구현 비용을 획기적으로 낮췄으며, 향후 어떠한 후속 모니터링 시스템 구축 과제에도 즉시 재사용 및 확장이 가능한 강력한 소프트웨어 코어를 확보하는 성과를 거두었습니다.
