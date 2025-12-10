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
                description: "풀스택 개발 및 인프라 구축",
                details: [
                    "프론트엔드 구현 (풀 바이브 코딩)",
                    "백엔드 개발 리드, 관리자 페이지 구현",
                    "인프라 세팅 및 배포 파이프라인 구축",
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
                description: "시스템 기획 및 얼리억세스 보상 리밸런싱",
                details: [
                    "얼리억세스 일정 변경 및 BM 변경에 따른 보상 밸런스 전면 수정",
                    "인게임 재화 중심의 경제 구조 재설계 및 레벨업/업적 보상 밸런싱",
                    "가챠 시스템 기획: 등급별 확률, 천장 시스템, 대체 재화 지급 규칙 설계",
                    "우편 및 보상 지급 시스템, 대체재화 시스템 기획 및 운영 툴 기능 명세",
                    "엑셀을 활용한 데이터 시뮬레이션 및 데이터 입력 자동화 도구 제작",
                    "멀티플랫폼(XBOX, Mobile) 대응 UI/UX 및 가이드라인 검토",
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
                description: "전투 공식 및 기초 시스템 설계",
                details: [
                    "전투 데미지 공식, 치명타 공식, 버프/디버프 규칙 등 핵심 전투 로직 설계",
                    "캐릭터 성장축(레벨, 장비, 랭크, 학년) 및 스탯 구조 기획",
                    "장비 시스템 및 스탯 가중치 설계, 검증용 시뮬레이션 시트 제작",
                    "전투 스킬 시스템, 사거리, 아티팩트 등 세부 전투 시스템 구체화",
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
                description: "캐릭터 포지셔닝 및 스킬, 도전 모드 기획",
                details: [
                    "캐릭터 포지션별 역할 및 스킬 분포 정의, 초기 캐릭터 스킬셋 기획",
                    "스킬 발동 조건(주력형, 반응형 등)에 따른 연쇄 작용 메커니즘 설계",
                    "보스 러시(바운티 헌트) 모드 기획: 단계별 스킬 해금 및 난이도 밸런싱",
                    "한정된 리소스를 활용한 고효율 콘텐츠 기획 (기존 시스템 재활용)",
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
                description: "라이브 서비스 기획 보조",
                details: [
                    "신규 캐릭터(영웅, 병사) 외형 기획 및 아트 발주서 작성",
                    "튜토리얼 개선을 위한 경쟁작 초반 구간 비교 분석",
                    "라이브 데이터 입력 및 검증",
                ],
            },
            {
                title: "프로젝트 G",
                description: "시장 리서치",
                details: ["방치형 RPG 시장 트렌드 및 경쟁작 분석"],
            },
        ],
    },
];
