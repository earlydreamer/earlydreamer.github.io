import type { Experience } from './types';

export const FREELANCE_EXPERIENCES: Experience[] = [
    {
        id: "dukku",
        company: "프로그래머스 데브코스 백엔드 단기심화 4기",
        position: "Student",
        period: "2025.12 - 2026.02",
        description: "MSA, Kafka, Kubernetes 기반의 팀 프로젝트 실습 과정",
        projects: [
            {
                title: "DUKKU (덕쿠)",
                description: "취미 기반 중고 거래 플랫폼",
                details: [
                    "MSA 구조에 기반한 설계 및 구현, SAGA 패턴을 통한 안정적 분산 트랜잭션 환경 실현",
                    "Inbox-Lite 패턴과 비관적 락을 통한 환불/예치금 처리 시 안정성 확보",
                ],
            },
        ],
    },
    {
        id: "softwarecampus",
        company: "디아뜨소프크",
        position: "Freelance / Part-time",
        period: "2025.10 - 2025.12",
        description: "부트캠프 수료생들과 함께 부트캠프 정보 비교 서비스를 구축",
        projects: [
            {
                title: "소프트웨어캠퍼스",
                description: "부트캠프 정보 비교 서비스",
                details: [
                    "IAM을 이용한 계정 권한 세팅, GHCR을 통한 Private Docker 저장소 구축 등 관리 용이성을 고려한 환경 구축",
                    "Pull-Request 기반의 AI 코드리뷰 프로세스 도입으로 작업 진척도 모니터링 환경 및 코드 품질 개선",
                ],
            },
        ],
    },
    {
        id: "kosta",
        company: "한국소프트웨어기술진흥협회 (KOSTA)",
        position: "Student",
        period: "2025.02 - 2025.07",
        description: "Java 기반 DevOps 개발자 양성과정 수료",
        projects: [
            {
                title: "Pick-Team",
                description: "부트캠프 수강생을 위한 팀 프로젝트 플랫폼",
                details: [
                    "Server-Sent Events 기반의 실시간 메신저 구현",
                    "작게 커밋하고 최신 변경사항을 수시로 반영하는 GitHub Flow 도입으로 conflict 최소화",
                ],
            },
            {
                title: "Kirini (키리니)",
                description: "키보드 입문자를 위한 정보 공유 및 커뮤니티 사이트",
                details: [
                    "AWS EC2 위에 3-Tier 구조의 아키텍처 및 리버스 프록시 기반으로 한 안정적 배포 환경 구축",
                    "crontab 기반으로 동작하는 자체적인 반자동 CI/CD 스크립트 구축",
                ],
            },
            {
                title: "Books of All Time",
                description: "KOSTA 교육생을 위한 도서 대여 및 추천 관리 콘솔 프로그램",
                details: [
                    "콘솔 환경에 맞는 MVC 구조와 대여/반납 흐름을 중심으로 기본 기능을 구현",
                    "AWS RDS를 이용한 서버 기반 데이터 영속성 확보",
                ],
            },
        ],
    },
];

export const WORK_EXPERIENCES: Experience[] = [
    {
        id: "challengers",
        company: "챌린저스게임즈",
        position: "Design Team / System Planner",
        period: "2023.01 - 2024.06",
        description: "온라인 게임 'Second Wave'를 개발한 게임 개발사",
        projects: [
            {
                title: "Second Wave",
                description: "TPS 액션 게임의 아웃게임, 전투 룰, 운영 데이터 기획",
                details: [
                    "유저의 플레이 욕구를 자극하면서도 인플레이션을 최소화하는 게임 내 보상 및 재화 순환 구조 설계",
                    "재화 지급 경로를 다변화해 플레이 욕구를 자극하면서도 인플레이션을 최소화하는 보상 경험 설계",
                ],
            },
        ],
    },
    {
        id: "epid",
        company: "에피드게임즈",
        position: "Game Design Team / System Planner",
        period: "2022.04 - 2022.12",
        description: "모바일 수집형 RPG '트릭컬 리바이브'를 개발한 게임 개발사",
        projects: [
            {
                title: "트릭컬 리바이브",
                description: "전투 시스템 기초 규칙과 성장 구조 기획",
                details: [
                    "전투 데미지 공식, 치명타 공식, 버프/디버프 규칙 등 초기 구현을 위한 기초 시스템 설계 (~1차 CBT)",
                    "1차 CBT 종료 피드백 시 전투 시스템 관련 긍정 응답(5점 만점 중 4점 이상) 58.7%로 과반 이상 긍정 평가",
                ],
            },
        ],
    },
    {
        id: "century",
        company: "센추리게임코리아유한회사",
        position: "Battle Team / Battle Planner",
        period: "2020.01 - 2022.02",
        description: "중국 게임 개발사 Century Games의 한국 개발 스튜디오",
        projects: [
            {
                title: "디버스 오더",
                description: "캐릭터·전투 콘텐츠와 데이터 관리 파이프라인 기획",
                details: [
                    "2년간 80여종 이상의 캐릭터 스킬 기획, 캐릭터 및 로케일 데이터를 자동화하는 데이터 관리 파이프라인 구축",
                    "오픈 직후 1개월만에 신규 보스 콘텐츠 개발 등 기존의 구조를 최대한으로 활용한 빠른 기획과 개발 실현"
                ],
            },
        ],
    },
    {
        id: "mojito",
        company: "모히또게임즈",
        position: "ONE Team / Intern",
        period: "2019.01 - 2019.05",
        description: "모바일 게임 '주사위의 신' 등을 개발한 게임 개발 스튜디오",
        projects: [
            {
                title: "리서치 및 기획 보조",
                description: "라이브 게임과 신규 프로젝트를 위한 리서치 업무",
                details: [
                    "유관 장르 게임 및 참고자료 리서치, 신규 캐릭터 아트 발주서 작성, 경쟁작 초반 구간 분석 등 기획 보조",
                ],
            },
        ],
    },
];
