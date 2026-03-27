import type { Project } from './types';

export const PROJECTS: Project[] = [
    {
        id: "dukku",
        title: "DUKKU (덕쿠)",
        period: "2026.01 - 2026.02",
        description: "취미 기반 중고 거래 플랫폼",
        techStack: ["Spring Boot", "React", "Spring Data JPA", "PostgreSQL", "Kafka", "Redis", "Spring Batch", "Elasticsearch", "Kubernetes", "Amazon EC2", "Amazon S3", "NGINX", "GitHub Actions"],
        role: ["결제 및 예치금 도메인", "프론트엔드 구현", "MSA 이벤트 흐름 설계"],
        images: ["/images/projects/dukku/image.png"],
        projectType: "team",
        links: {
            demo: "https://dukku.earlydreamer.dev",
            references: [
                { url: "https://github.com/earlydreamer/semicolon-front-prototype", label: "Frontend" },
                { url: "https://github.com/earlydreamer/semicolon-backend-forked", label: "Backend" },
                { url: "https://jakepark-dev.notion.site/DUKKU-31433611c09f80fabb72c3a64c2ff759", label: "Notion" },
            ],
        },
        modalContent: {
            metaBadges: ["팀 프로젝트", "결제 및 예치금 도메인", "프론트엔드", "MSA 이벤트 흐름 설계", "로컬 개발환경 구축"],
            detailDescription: "취미 상품 도메인에 집중해 거래 구조를 단순화한 중고 거래 커머스 프로젝트입니다.\n결제,예치금 구현, 이벤트 흐름 설계, 프론트엔드 프로토타입, 로컬 개발환경 세팅을 맡았습니다.",
            architecture: {
                title: "DUKKU 아키텍처",
                summary: "도메인별로 분리된 서비스 위에 상품 거래, 결제, 예치금, 정산 흐름을 얹고, Kafka 이벤트로 서비스 간 핵심 흐름을 연결한 MSA 구조를 구성했습니다.",
                imageSrc: "/images/projects/dukku/architecture-thumb.svg",
                imageAlt: "DUKKU 아키텍처 구조도",
                diagram: [
                    {
                        label: "사용자 화면",
                        description: "React 프론트엔드에서 상품 탐색, 주문, 결제 흐름을 처리하고, NGINX를 통해 API 요청을 각 도메인 서비스로 라우팅합니다.",
                    },
                    {
                        label: "도메인 서비스",
                        description: "auth, user, product, order, payment, deposit, settlement 같은 모듈이 책임별로 분리되어 핵심 비즈니스 로직을 담당합니다.",
                    },
                    {
                        label: "이벤트 흐름",
                        description: "Kafka 기반 메시징으로 결제, 예치금, 환불 같은 분산 흐름을 연결하고 멱등성과 보상 처리 구조를 유지합니다.",
                    },
                    {
                        label: "데이터와 운영 환경",
                        description: "PostgreSQL, Redis, Elasticsearch로 데이터를 처리하고, Spring Batch로 정산 배치를 수행합니다. Kubernetes 클러스터와 S3를 포함한 인프라로 로컬 개발과 운영 흐름을 함께 구성했습니다.",
                    },
                    {
                        label: "모니터링과 로깅",
                        description: "각 서비스의 메트릭은 Spring Actuator와 Micrometer를 통해 Prometheus가 수집하고 Grafana로 시각화합니다. 로그는 Kafka를 통해 log-consumer로 전달되어 MongoDB에 저장되며, Grafana Infinity 플러그인으로 메트릭과 로그를 단일 대시보드에서 함께 조회합니다.",
                    },
                ],
                highlights: [
                    "도메인 경계를 먼저 나누고 Modular Monolith에서 MSA로 전환할 수 있게 구조를 설계했습니다.",
                    "결제와 예치금 흐름에는 SAGA, Inbox-Lite, 비관적 락을 조합해 정합성과 안정성을 확보했습니다.",
                    "리소스 부담이 큰 컨테이너를 Tailscale 네트워크로 분리 운영해 팀 전체가 같은 개발 환경을 사용할 수 있게 구성했습니다.",
                ],
            },
            caseStudies: [
                {
                    title: "Modular Monolith로 설계 후 MSA로 전환해 유연한 배포 전환 실현",
                    problem: [
                        "최종 단계에서 MSA가 요구되었지만, 초반부터 완전 분리를 도입하면 구현 난이도와 일정 리스크가 커질 수 있었습니다.",
                        "팀원 모두가 분산 구조에 익숙하지 않아, 초반에는 기능 개발보다 구조 적응에 시간이 더 들 수 있었습니다.",
                    ],
                    solution: [
                        "처음부터 BC 경계와 테이블 구조를 분리해 두고, Semi 단계에서는 Modular Monolith 구조로 구현했습니다.",
                        "이후 Final 단계에서 Kafka 기반 MSA로 전환할 수 있도록 패키지 구조와 이벤트 흐름을 미리 설계했습니다.",
                    ],
                    result: [
                        "초반 구현 속도를 확보하면서도 Final 단계에서 비교적 자연스럽게 MSA로 이행할 수 있었습니다.",
                        "구조 전환의 시점과 방식을 직접 판단해볼 수 있었습니다.",
                    ],
                },
                {
                    title: "SAGA, Inbox-Lite, 비관적 락으로 결제 흐름의 정합성과 안정성 확보",
                    problem: [
                        "결제, 예치금 차감, 환불 흐름은 여러 서비스에 걸쳐 처리돼 하나의 로컬 트랜잭션으로 묶을 수 없었습니다.",
                        "Kafka의 at-least-once 특성상 동일 이벤트가 중복 전달될 수 있었고, 일부 서비스만 반영된 중간 상태도 남을 수 있었습니다.",
                        "예치금 도메인에는 공용 참조 데이터가 있어 동시성 이슈 가능성이 높았습니다.",
                    ],
                    solution: [
                        "2PC 대신 SAGA를 적용해 서비스 간 락을 줄이고, 실패 시 보상 트랜잭션으로 되돌리는 구조를 선택했습니다.",
                        "결제에는 멱등 키를, 환불에는 Inbox-Lite를 적용해 중복 처리를 막았습니다.",
                        "금액 정합성이 중요해 비관적 락으로 충돌을 명시적으로 제어했습니다.",
                    ],
                    result: [
                        "분산 환경에서 생길 수 있는 정합성, 멱등성, 동시성 문제에 대응할 수 있었습니다.",
                        "MSA 환경에서 각 패턴의 적용 시점을 직접 익혔습니다.",
                        // 정량적 성과로 보완 필요
                    ],
                },
                {
                    title: "LLM 프로토타입으로 기획 병목을 줄이고 팀의 인식을 빠르게 통일",
                    problem: [
                        "텍스트 설명만으로는 이해가 어긋나기 쉬웠고, 와이어프레임은 그리는 데 시간이 많이 들었습니다.",
                    ],
                    solution: [
                        "프론트엔드 목업을 3일 만에 구현해, 눌러보는 프로토타입 중심으로 화면 흐름과 명세를 공유했습니다.",
                        "실제 동작하는 목업을 기반으로 피드백을 받고 바로 반영했습니다.",
                    ],
                    result: [
                        "7일가량 걸리던 사전 기획 구간을 3일 수준으로 줄여 빠르게 개발에 진입할 수 있었습니다.",
                    ],
                },
                {
                    title: "Tailscale 기반 컨테이너 분리로 로컬 리소스 부담 완화",
                    problem: [
                        "Elasticsearch, Redis, Kafka, PostgreSQL 등 여러 컨테이너가 동시에 필요해 일부 팀원 PC에서 사양 이슈가 발생했습니다.",
                    ],
                    solution: [
                        "상시 가동 PC 1대에 컨테이너를 모아 두고, Tailscale 네트워크로 연결해 개인 PC에 Docker를 띄우지 않아도 개발할 수 있게 했습니다.",
                    ],
                    result: [
                        "사양이 부족한 팀원도 테스트 가능한 수준의 메모리를 확보해 개발을 이어갈 수 있었습니다.",
                    ],
                },
            ],
        },
    },
    {
        id: "softwarecampus",
        title: "SoftwareCampus",
        period: "2025.10 - 2025.12",
        description: "부트캠프 정보 비교 서비스",
        techStack: ["Spring Boot", "React", "Spring Data JPA", "MySQL", "Docker", "Amazon EC2", "Amazon S3", "Redis", "NGINX", "GitHub Actions"],
        role: ["PM", "기획", "프론트엔드", "인프라 및 배포", "관리자 기능 및 대시보드"],
        images: ["/images/projects/softwarecampus/image.png"],
        projectType: "team",
        links: {
            demo: "https://softwarecampus.earlydreamer.dev",
            references: [
                { url: "https://github.com/KOSTA-SoftwareCampus-Bundang/softwarecampus-frontend", label: "Frontend" },
                { url: "https://github.com/KOSTA-SoftwareCampus-Bundang/softwarecampus-backend", label: "Backend" },
            ],
        },
        modalContent: {
            metaBadges: ["팀 프로젝트", "PM", "기획", "프론트엔드", "인프라 및 배포", "관리자 기능 및 대시보드"],
            detailDescription: "인증된 수강생 후기를 기반으로 부트캠프 정보를 비교할 수 있는 서비스입니다.\nPM, 프론트엔드, 관리자 기능, 인증/인가, 인프라 세팅과 배포를 맡았습니다.",
            architecture: {
                title: "SoftwareCampus 아키텍처",
                summary: "단일 프론트엔드와 단일 백엔드 위에 USER·ACADEMY·ADMIN 세 역할의 운영 흐름을 얹고, 역할별 접근 제어와 파일 저장을 포함한 서비스 구조를 구성했습니다.",
                imageSrc: "/images/projects/softwarecampus/architecture-thumb.svg",
                imageAlt: "SoftwareCampus 아키텍처 구조도",
                diagram: [
                    {
                        label: "사용자와 운영 화면",
                        description: "React 프론트엔드에서 일반 사용자용 탐색 화면과 관리자·기관용 운영 화면을 함께 제공합니다.",
                    },
                    {
                        label: "애플리케이션 계층",
                        description: "Spring Boot 백엔드가 리뷰, 기관, 과정, 승인 요청, 배너 관리 같은 핵심 기능을 하나의 서비스로 처리합니다.",
                    },
                    {
                        label: "권한과 인증",
                        description: "JWT와 Spring Security를 기반으로 USER, ACADEMY, ADMIN 역할을 분리해 화면과 API 권한을 일관되게 제어합니다.",
                    },
                    {
                        label: "데이터와 배포 환경",
                        description: "MySQL, Redis, 객체 스토리지, Docker 기반 배포 흐름을 묶어 서비스 운영과 인수인계를 고려한 환경을 구성했습니다.",
                    },
                ],
                highlights: [
                    "서비스 이용 흐름과 운영 흐름이 같은 애플리케이션 안에서 자연스럽게 이어지도록 구조를 설계했습니다.",
                    "기관과 관리자 권한을 분리해 승인과 수정 같은 운영 작업을 서비스 내부에서 처리할 수 있게 구현했습니다.",
                    "IAM, GHCR, 배포 환경 구성을 함께 다루며 납품형 프로젝트에 맞는 운영 구조를 만들었습니다.",
                ],
            },
            caseStudies: [
                {
                    title: "IAM 기반 인프라 권한 설계로 납품형 프로젝트에 맞는 운영 환경 구성",
                    problem: [
                        "개발 결과물을 납품하는 프로젝트라, 개인 개발 환경이 아니라 운영과 인수인계를 염두에 둔 인프라 구성이 필요했습니다.",
                        "서버와 저장소 접근 권한이 한 계정에 과도하게 묶이면 운영 책임과 관리 포인트가 불분명해질 수 있었습니다.",
                    ],
                    solution: [
                        "AWS 환경에서 IAM 기반 권한 분리를 적용해 배포와 운영 접근 권한을 역할 중심으로 정리했습니다.",
                        "컨테이너 이미지는 Docker Hub보다 무료 비공개 저장소 제약이 적은 GHCR을 채택했습니다.",
                        "개발 편의보다 이후 운영과 인수인계를 우선해 인프라 권한 체계를 맞췄습니다.",
                    ],
                    result: [
                        "운영 주체가 바뀌어도 유지 가능한 납품형 인프라 구조를 직접 구성했습니다.",
                        "애플리케이션 구현과 별개로 운영 권한 설계의 중요성을 체감했습니다.",
                    ],
                },
                {
                    title: "서비스 내에서 권한에 따른 운영 업무가 가능하도록 관리자 페이지 추가",
                    problem: [
                        "실제 수강생이 등록한 과정과 리뷰를 기관 담당자가 확인하고 승인할 수 있는 구조가 필요했습니다.",
                        "운영 업무를 하드코딩이나 DB 직접 수정이 아닌 서비스 내부에서 처리할 수 있어야 했습니다.",
                    ],
                    solution: [
                        "React 기반 `AdminPage`를 중심으로 관리자 대시보드, 회원 관리, 기관 관리, 승인 요청, 배너 관리 기능을 하나의 운영 화면으로 묶었습니다.",
                        "기관 회원은 같은 `/admin` 진입점을 쓰되 본인 기관 데이터만 다루도록 범위를 제한했습니다.",
                        "승인/거절, 기관 수정, 이미지 업로드 같은 작업을 관리자 페이지에서 직접 처리할 수 있도록 프론트엔드와 백엔드 API를 연결했습니다.",
                    ],
                    result: [
                        "계정 유형별로 구분된 관리자 기능이 실제 서비스에 적용되도록 구현했습니다.",
                        "단순 정보 제공을 넘어 데이터 승인과 운영 업무가 실제로 작동하는 서비스를 만들었습니다."
                        ,
                    ],
                },
                {
                    title: "애플리케이션 권한 설계로 관리자,기관,일반 사용자 역할 분리",
                    problem: [
                        "일반 회원, 시스템 관리자 외에 교육기관 담당자처럼 일부 관리 권한을 갖는 별도의 사용자 그룹이 존재했습니다.",
                        "허용되지 않은 기능에는 접근할 수 없도록, 애플리케이션 레벨에서 명확한 권한 분리가 필요했습니다.",
                    ],
                    solution: [
                        "Spring Security와 JWT 기반 인증 구조 위에 `ADMIN`, `ACADEMY`, `USER` 계정 타입을 두고, `@PreAuthorize`로 역할별 접근 권한을 분리했습니다.",
                        "회원가입 단계에서는 `ADMIN` 계정 생성을 차단하고, 운영 환경에서는 `AdminAccountInitializer`를 통해 초기 관리자 계정을 환경변수 기반으로 안전하게 부트스트랩하도록 구성했습니다.",
                        "프론트엔드에서도 계정 타입에 따라 관리자 센터와 기관 센터 노출을 분기해 화면과 API의 권한 모델이 어긋나지 않도록 맞췄습니다.",
                    ],
                    result: [
                        "역할별 정책이 실제 기능 단위에서 일관되게 적용되는 서비스 구조를 만들 수 있었습니다.",
                        "권한이 얽힌 운영 기능에서는 인증/인가와 데이터 처리 정책을 함께 맞춰야 한다는 점을 체감했습니다.",
                    ],
                },
            ],
        },
    },

    {
        id: "pick-team",
        title: "Pick Team",
        period: "2025.06 - 2025.07",
        description: "부트캠프 수강생을 위한 팀 프로젝트 플랫폼",
        techStack: ["Spring Boot", "React", "Spring Data JPA", "MySQL", "Docker", "Amazon EC2", "Redis", "NGINX", "GitHub Actions"],
        role: ["부팀장", "기획", "PM", "인프라 및 배포", "메신저 구현"],
        images: ["/images/projects/pick-team/image.png"],
        projectType: "team",
        links: {
            demo: "https://pickteam.site",
            references: [
                { url: "https://github.com/KOSTA-295-pick-team/pick-team-frontend", label: "Frontend" },
                { url: "https://github.com/KOSTA-295-pick-team/pick-team", label: "Backend" },
                {
                    url: "https://jakepark-dev.notion.site/FINAL-PROJECT-Pick-Team-e3333611c09f8299818c811cdb2364ae",
                    label: "Notion",
                },
            ],
        },
        modalContent: {
            metaBadges: ["팀 프로젝트", "부팀장", "기획", "PM", "인프라 및 배포", "메신저 구현"],
            detailDescription: "부트캠프 수강생을 위해 메신저, 칸반, 일정 관리, 화상회의를 제공하는 협업 플랫폼입니다.\n부팀장으로서 DevOps, 개발환경 세팅, SSE 기반 메신저 구현, CI/CD 구축을 맡았습니다.",
            architecture: {
                title: "Pick Team 아키텍처",
                summary: "하나의 서비스에 협업 기능을 통합하되, 실시간 통신은 SSE·WebSocket/STOMP·LiveKit을 용도에 따라 분리해 처리합니다.",
                imageSrc: "/images/projects/pick-team/architecture-thumb.svg",
                imageAlt: "Pick Team 아키텍처 구조도",
                diagram: [
                    {
                        label: "협업 워크스페이스",
                        description: "React 프론트엔드에서 팀 모집, 칸반, 일정, 메신저, 화상회의 기능을 하나의 워크스페이스 흐름으로 연결합니다.",
                    },
                    {
                        label: "서비스 백엔드",
                        description: "Spring Boot가 팀 관리, 일정, 메신저, 칸반 등 협업 기능 전반의 비즈니스 로직을 담당하며, JWT 기반 인증과 Google·Kakao OAuth 소셜 로그인을 함께 지원합니다.",
                    },
                    {
                        label: "실시간 계층",
                        description: "비동기 메신저 알림은 SSE로, 화상회의 중 실시간 채팅은 WebSocket/STOMP로 처리합니다. 단방향 푸시와 양방향 통신의 용도 차이에 따라 프로토콜을 분리했으며, 화상회의는 LiveKit 기반으로 제공합니다.",
                    },
                    {
                        label: "데이터와 운영 환경",
                        description: "MySQL, Redis, Docker, GitHub Actions 기반 배포 흐름으로 협업 서비스 운영과 CI/CD를 구성했습니다.",
                    },
                ],
                highlights: [
                    "JWT 위에 Google·Kakao OAuth와 이메일 인증을 함께 구성해, 소셜 로그인과 자체 가입을 모두 지원하는 인증 구조를 갖췄습니다.",
                    "SSE 기반 메신저와 배포 자동화를 함께 구축해 사용자 경험과 운영 효율을 같이 챙겼습니다.",
                    "숙련도 편차가 있는 팀에서도 GitHub Flow와 AI 코드리뷰로 안정적인 협업 파이프라인을 유지했습니다.",
                ],
            },
            caseStudies: [
                {
                    title: "SSE를 통한 비동기 메신저의 실시간 메시지 수신 구현",
                    problem: [
                        "실시간 통신을 구현하되, 당시 프로젝트 범위와 학습 단계에 맞는 기술 선택이 필요했습니다.",
                        "메신저는 실시간성이 중요하기 때문에 메시지 수신 즉시 화면이 갱신돼야 했습니다.",
                    ],
                    solution: [
                        "WebSocket, SSE, Polling을 비교한 끝에 당시 범위와 구조에 맞는 SSE를 채택했습니다.",
                        "SSE는 데이터 변경 시에만 서버가 알림을 보내는 구조라 상대적으로 서버 부담이 적다고 판단했습니다.",
                        
                    ],
                    result: [
                        "메시지를 보내는 즉시 상대방 화면이 갱신되는 실시간 메신저를 구현했습니다.",
                    ],
                },
                {
                    title: "GitHub Actions 기반 CI/CD 자동화로 배포 과정을 반복 가능한 흐름으로 정리",
                    problem: [
                        "이전 프로젝트에서는 서버에 직접 접속해 수동으로 빌드 스크립트를 실행했기 때문에, 누가 언제 어떤 버전을 배포했는지 추적하기 어려웠습니다.",
                        "배포가 사람 손에 의존해 반영 속도가 느렸고, 재배포나 실패 원인 확인에도 한계가 있었습니다.",
                    ],
                    solution: [
                        "GitHub Actions를 중심으로 빌드와 서버 배포 흐름을 자동화하고, 배포 대상 디렉토리와 실행 경로를 분리했습니다.",
                        "디버그 포인트를 추가하고 시크릿 주입 방식을 정리해 배포 스크립트를 안정화했습니다.",
                    ],
                    result: [
                        "사람 손으로 반복하던 배포를 GitHub Actions 기반 자동화 파이프라인으로 정리했습니다.",
                        "실패 지점을 직접 디버깅하며 CI/CD 파이프라인을 안정화했습니다.",
                    ],
                },
                {
                    title: "GitHub Flow와 AI 코드리뷰로 숙련도 편차를 줄이고 협업 파이프라인을 정리",
                    problem: [
                        "팀원 간 숙련도 편차가 커서 코드 품질과 개발 속도를 함께 잡을 공통 파이프라인이 필요했습니다.",
                        "규칙 없이 각자 따로 개발한 뒤 한꺼번에 합치면 conflict로 인한 교통정리 비용이 커져 개발 병목이 될 위험이 있었습니다.",
                    ],
                    solution: [
                        "GitHub Flow를 기준으로 작업을 잘게 나누고, 작은 브랜치를 빠르게 PR로 반영해 최신 코드베이스를 유지했습니다.",
                        "기능별 작업을 오래 끌지 않고 자주 병합하는 방향으로 운영해, 충돌이 커지기 전에 흐름 안에서 해결할 수 있게 했습니다.",
                        "CodeRabbit 등 AI 코드리뷰를 도입해 품질 편차를 줄이고, 최종적으로는 사람이 검수해 코드 정합성을 확인했습니다.",
                    ],
                    result: [
                        "숙련도 차이가 있는 팀에서도 개발 속도와 품질을 함께 관리할 수 있었습니다.",
                        "팀 전체가 안정적으로 개발할 수 있는 협업 파이프라인을 직접 설계하고 운영했습니다.",
                    ],
                },
                {
                    title: "Soft-delete 정책 변경으로 LAZY 로딩 제약을 해소하고 삭제 제어권 확보",
                    problem: [
                        "초기에는 Hibernate 6.4의 `@SoftDelete`로 삭제 데이터를 자동 필터링해 조회 조건 반복을 줄이고 싶었습니다.",
                        "하지만 `@SoftDelete`가 LAZY 로딩과 충돌해 연관관계가 많은 도메인에서는 설계 제약이 커졌습니다.",
                    ],
                    solution: [
                        "정책을 `isDeleted`, `deletedAt`을 직접 관리하는 수동 soft-delete 방식으로 변경했습니다.",
                        "엔티티에 `markDeleted()`를 두고 서비스 계층에서 상태를 변경하도록 했으며, 조회는 전용 메서드로 분리했습니다.",
                        "삭제 전파와 복구 가능성을 직접 제어할 수 있도록 도메인 로직 중심으로 설계를 바꿨습니다.",
                    ],
                    result: [
                        "연관관계가 많은 엔티티에서도 LAZY 로딩을 유지하면서 soft-delete 정책을 적용할 수 있었습니다.",
                        "편의성보다 도메인 제어권과 JPA 동작 특성을 우선해 정책을 직접 재설계했습니다.",
                    ],
                },
                {
                    title: "프로젝트 종료 후 cloudflared 기반 마이그레이션으로 외부 노출 구조를 재정비",
                    problem: [
                        "부트캠프 종료 후 AWS EC2 유지비 부담이 있어, 유지비용이 없거나 낮은 플랫폼이 필요했습니다.",
                        "홈 네트워크의 구조가 복잡하여 보다 단순하고 유지보수하기 쉬운 외부 노출 구조가 필요했습니다.",
                    ],
                    solution: [
                        "서비스를 홈서버로 옮기고, cloudflared 터널로 복잡한 포트포워딩과 외부 노출 설정을 단순화했습니다.",
                        "운영 환경 변경 후에도 배포를 이어갈 수 있도록 GitHub Actions 스크립트와 서버 접속 방식을 다시 정리했습니다.",
                    ],
                    result: [
                        "EC2 유지비 없이 서비스를 계속 운영할 수 있는 구조로 옮길 수 있었습니다.",
                        "외부 노출 구조를 단순화해 운영 부담을 낮추고, 인프라 이전부터 운영 구조 재정비까지 직접 다뤘습니다.",
                    ],
                },
            ],
        },
    },
];
