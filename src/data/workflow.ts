import type { CollaborationStep } from "./types";

export const WORKFLOW_STEPS: CollaborationStep[] = [
    {
        id: "idea",
        step: "01",
        title: "아이디어 정제",
        description: "무엇을 만들지, 무엇을 달성할지, 왜 이 방향이어야 하는지를 먼저 맞춥니다.",
        items: [
            "아이디어의 차별점과 벤치마크 대상을 빠르게 정리합니다.",
            "기획 의도와 목표를 문서로 남겨 팀원의 이해를 일치시킵니다.",
        ],
    },
    {
        id: "spec",
        step: "02",
        title: "기능 리스트업",
        description: "화면, 기능, API, 스키마를 순서대로 구체화해 구현 가능한 단위로 분해합니다.",
        items: [
            "화면 목록과 기능 리스트를 기준으로 작업 범위를 정리합니다.",
            "API 엔드포인트와 ERD까지 연결해 백엔드 일감을 명확히 나눕니다.",
        ],
    },
    {
        id: "mockup",
        step: "03",
        title: "LLM 기반 프론트엔드 목업 생성",
        description: "와이어프레임 단계를 건너뛰고, 상호작용 가능한 목업을 즉시 만들어 흐름을 먼저 검증합니다.",
        items: [
            "LLM을 활용해 클릭 가능한 초기 목업을 빠르게 생성합니다.",
            "정적인 와이어프레임보다 실제 흐름을 보며 빠르게 논의할 수 있습니다.",
        ],
        accent: "ai",
    },
    {
        id: "implementation",
        step: "04",
        title: "기능 구현 및 AI 코드리뷰",
        description: "GitHub Flow 기반으로 작업하며, Draft PR 위에 작은 구현 단위를 쌓고 AI 코드리뷰를 반복합니다.",
        items: [
            "GitHub Flow에 기반해, 세부 기능 단위로 브랜치를 관리합니다.",
            "Draft PR에 작은 커밋을 누적하며 작업 내용을 공유합니다.",
            "푸시마다 AI 코드리뷰를 반영하고, 구현 완료 시 인간이 검수하고 머지합니다.",
        ],
        accent: "ai",
    },
    {
        id: "deployment",
        step: "05",
        title: "CI/CD 기반 통합 및 배포",
        description: "GitHub Actions와 컨테이너 기반 배포 흐름을 통해 검증과 배포를 자동화합니다.",
        items: [
            "이미지 빌드와 배포를 자동화해 반복 작업을 줄입니다.",
            "CI 단계에서 문제를 먼저 확인하고, 통과한 경우에만 배포합니다.",
        ],
    },
    {
        id: "integration",
        step: "06",
        title: "프론트엔드-백엔드 실제 연동",
        description: "초기 목업을 실제 구현으로 갈아끼우고 API를 연결해 최종 동작을 검증합니다.",
        items: [
            "목업 화면을 실제 프론트엔드 구현으로 정리합니다.",
            "브라우저에서 실제 동작을 확인하며 마무리합니다.",
        ],
    },
];
