import type { Competency } from './types';

export const COMPETENCIES: Competency[] = [
    {
        id: "competency-mvc",
        title: "MVC 구조 및 Spring Boot 기반 개발",
        description: "MVC에 대한 이해를 바탕으로 안정적인 웹 서비스를 구축합니다.",
        items: [
            "Spring Boot를 활용한 웹사이트 구축 및 REST API 명세 작성",
            "기능별 책임 분리가 고려된 트랜잭션 흐름 설계",
            "JPA의 N+1 이슈 등 성능 이슈를 고려한 쿼리 최적화",
        ],
    },
    {
        id: "competency-ai",
        title: "AI 기반 애자일 개발 및 협업",
        description: "AI 도구를 적극 활용하여 개발 효율성을 극대화합니다.",
        items: [
            "Vibe-Coding을 활용한 빠른 프로토타이핑 및 즉각적인 소통",
            "AI 기반 자동 코드 리뷰 프로세스 도입으로 코드 품질 개선",
            "컨텍스트 엔지니어링을 통한 LLM 기반 코드 일관성 유지",
        ],
    },
    {
        id: "competency-aws",
        title: "AWS 활용 및 CI/CD 파이프라인 구축",
        description: "안정적인 배포 환경과 자동화된 파이프라인을 구축합니다.",
        items: [
            "Docker와 Nginx를 활용한 3-Tier 아키텍처 기반 서비스 구축",
            "EC2, RDS 등 AWS 인프라를 활용한 프로덕션 환경 구성",
            "GitHub Actions 기반 CI/CD 파이프라인 구축 및 배포 자동화",
        ],
    },
];
