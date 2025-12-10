import type { Experience } from './types';

export const FREELANCE_EXPERIENCES: Experience[] = [
    {
        id: "softwarecampus",
        company: "디아뜨소프크",
        position: "Freelance / Part-time",
        period: "2025.10 - 2025.12",
        description: "부트캠프 수료생들과 함께 부트캠프 정보 공유 및 후기 제공 사이트 구축",
        projects: [
            {
                title: "소프트웨어캠퍼스",
                description: "부트캠프 정보 공유 및 커뮤니티 사이트",
                details: [
                    "Vibe-Coding에 기반한 빠른 프로토타이핑 및 프론트엔드 개발",
                    "Spring Security를 이용한 인증-인가 및 관리자 페이지 구현",
                    "Docker 기반의 인프라 세팅 및 Github Action을 사용한 배포 파이프라인 구축",
                ],
            },
        ],
    },
    {
        id: "softwarecampus",
        company: "한국소프트웨어기술진흥협회 (KOSTA)",
        position: "Student",
        period: "2025.02 - 2025.07",
        description: "Java 기반 DevOps 개발자 양성과정 수료",
        projects: [
            {
                title: "Pick-Team",
                description: "개발자를 위한 올인원 팀 빌딩 및 협업 플랫폼",
                details: [
                    "Server-Sent Events 기반의 실시간 메신저 구현",
                    "Docker 기반의 인프라 세팅 및 Github Action을 사용한 배포 파이프라인 구축",
                    "Pull-Request 기반의 AI 코드리뷰 도입으로 코드 리뷰 시간 단축 및 버그 최소화",
                ],
            },
            {
                title: "Kirini(키리니)",
                description: "키보드 입문자를 위한 정보 공유 및 커뮤니티 사이트",
                details: [
                    "AWS EC2 위에 3-Tier 구조의 아키텍처 및 리버스 프록시 기반으로 한 안정적 배포 환경 구축",
                    "crontab 기반으로 동작하는 자체적인 반자동 CI/CD 스크립트 구축",
                ],
            },
            {
                title: "Books of all Time",
                description: "KOSTA 교육생을 위한 도서 대여 및 추천 관리 콘솔 프로그램",
                details: [
                    "책임 분리를 고려하고 콘솔 환경을 고려한 MVC 구조의 클래스 설계",
                    "AWS RDS를 활용한 원격 데이터베이스 연동 구현",
                ],
            },
        ],
    },
];

export const WORK_EXPERIENCES: Experience[] = [
    {
        id: "challengers",
        company: "챌린저스게임즈",
        position: "System Planner",
        period: "2023.01 - 2024.06",
        description: "TPS MOBA 게임 'Second Wave'의 시스템 기획 및 아웃게임 보상 밸런싱 담당",
        projects: [
            {
                title: "Second Wave",
                description: "MOBA의 아이템과 성장을 접목한 TPS 액션 게임",
                details: [
                    "얼리억세스에 맞춰 유저의 플레이욕구를 자극하면서도 인플레이션을 최소화하도록 재화 리밸런싱",
                    "재화 및 아이템 지급 관련 구조 전반과 이를 위한 운영 툴 기능 명세를 기획해 운영을 위한 기본 환경 구축",
                    "플랫폼에 맞는 UI/UX 기획 및 플랫폼 가이드라인 체크로 멀티플랫폼(XBOX, Mobile) 환경에 대응",
                ],
            },
        ],
    },
    {
        id: "epid",
        company: "에피드게임즈",
        position: "System Planner",
        period: "2022.04 - 2022.11",
        description: "수집형 RPG '트릭컬 Re:Vive' 시스템 기획",
        projects: [
            {
                title: "트릭컬 Re:Vive",
                description: "귀여운 비주얼을 앞세운 라이트한 덱 빌딩 수집형 RPG",
                details: [
                    "전투 데미지 공식, 치명타 공식, 버프/디버프 규칙 등 초기 구현을 위한 핵심 전투 로직 설계",
                    "인플레이션을 고려한 캐릭터 성장축(레벨, 장비, 랭크, 학년) 및 스탯 구조 기획",
                ],
            },
        ],
    },
    {
        id: "century",
        company: "센추리게임코리아",
        position: "Battle Part Planner",
        period: "2020.05 - 2022.02",
        description: "수집형 RPG '디버스 오더' 전투 및 캐릭터 기획",
        projects: [
            {
                title: "디버스 오더",
                description: "정복 요소와 루트 분기 스토리가 결합된 삼국지형 수집형 RPG",
                details: [
                    "캐릭터의 역할과 개성을 고려해 포지션을 설계하고 이에 기반해 캐릭터의 개성을 살린 스킬셋 및 스킬 연출 기획",
                    "기존 시스템을 확장하여 최소 비용으로 보스전 등 신규 모드 기획, 1개월만에 기획부터 개발까지 완료",
                    "캐릭터의 스탯, 스킬, 로케일 데이터를 자동화하는 구글 시트를 제작하여 데이터 관리 공수 최소화",
                ],
            },
        ],
    },
    {
        id: "mojito",
        company: "모히또게임즈",
        position: "Intern",
        period: "2019.01 - 2019.05",
        description: "신규 프로젝트 리서치 및 라이브 게임 기획 보조",
        projects: [
            {
                title: "오션 앤 엠파이어",
                description: "대항해시대를 배경으로 한 전략 게임",
                details: [
                    "신규 캐릭터(영웅, 병사) 외형 기획 및 아트 발주서 작성, 경쟁작 초반 구간 비교 분석 등 라이브 서비스 기획 보조",
                ],
            },
            {
                title: "프로젝트 G",
                description: "히어로를 테마로 한 방치형 RPG",
                details: ["방치형 RPG 시장 트렌드 및 경쟁작 분석 등 신규 프로젝트를 위한 리서치 업무"],
            },
        ],
    },
];
