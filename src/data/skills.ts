import type { Skill, SecondarySkill } from './types';

export const SKILLS: Skill[] = [
    { id: "skill-springboot", name: "Spring Boot", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { id: "skill-jpa", name: "Spring Data JPA", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
    { id: "skill-java", name: "Java", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { id: "skill-database", name: "MySQL · PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { id: "skill-react", name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { id: "skill-kafka", name: "Kafka", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
    { id: "skill-docker", name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { id: "skill-aws", name: "AWS EC2", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

export const SECONDARY_SKILLS: SecondarySkill[] = [
    // 주력 활용 (rating: 3~5)
    { id: "sec-springboot", name: "Spring Boot", category: "백엔드", level: "주력 활용", rating: 4.5, description: "Spring Boot 기반 웹 서비스 구축 및 결제 도메인 구현 경험" },
    { id: "sec-react", name: "React", category: "프론트엔드", level: "주력 활용", rating: 4, description: "React 기반 프론트엔드 구현 및 프로토타입 개발 경험" },
    { id: "sec-mysql", name: "MySQL", category: "데이터베이스", level: "주력 활용", rating: 4.5, description: "MySQL 기반 서비스 개발 및 데이터 모델링 경험" },
    { id: "sec-jpa", name: "Spring Data JPA", category: "백엔드", level: "주력 활용", rating: 4.5, description: "JPA 기반 엔티티 설계와 쿼리 최적화 경험" },
    { id: "sec-docker", name: "Docker", category: "DevOps", level: "주력 활용", rating: 4.5, description: "Docker 기반 3-Tier 구조 및 Reverse Proxy 환경 구축" },
    { id: "sec-ec2", name: "Amazon EC2", category: "DevOps", level: "주력 활용", rating: 4, description: "EC2 기반 서버 배포 및 인프라 구축" },
    { id: "sec-s3", name: "Amazon S3", category: "DevOps", level: "주력 활용", rating: 4, description: "이미지 및 첨부파일 저장소 연동과 운영 경험" },
    { id: "sec-gh-actions", name: "GitHub Actions", category: "DevOps", level: "주력 활용", rating: 4.5, description: "CI/CD 파이프라인 구축 및 자동 배포 경험" },
    { id: "sec-git", name: "Git", category: "협업 도구", level: "주력 활용", rating: 5, description: "trunk-based 방법론 기반 브랜치 관리" },
    { id: "sec-java", name: "Modern Java", category: "언어", level: "주력 활용", rating: 4.5, description: "Java8 이후 현대적 문법 및 객체지향 개념 숙지" },
    { id: "sec-jsp", name: "JSP & Servlet", category: "백엔드", level: "주력 활용", rating: 4, description: "Servlet/JSP 기반 MVC 웹 프로젝트 경험" },
    { id: "sec-ai-dev", name: "AI-Assisted Development", category: "AI", level: "주력 활용", rating: 4, description: "LLM 기반 프로토타이핑, 코드리뷰, 구현 보조를 실제 프로젝트 흐름에 적용한 경험" },
    { id: "sec-sheets", name: "Google Sheets", category: "협업 도구", level: "능숙함", rating: 4, description: "데이터 관리 자동화 및 로컬라이징 시트 유지보수 경험" },
    { id: "sec-notion", name: "notion.so", category: "협업 도구", level: "능숙함", rating: 4, description: "기획 문서 작성과 협업 커뮤니케이션 경험" },
    // 능숙함 (rating: 2~4)
    { id: "sec-jira", name: "Jira", category: "협업 도구", level: "능숙함", rating: 3.5, description: "티켓 기반 일감 관리 경험" },
    { id: "sec-confluence", name: "Confluence", category: "협업 도구", level: "능숙함", rating: 3.5, description: "마크다운 기반 문서 편집" },
    { id: "sec-intellij", name: "IntelliJ", category: "IDE", level: "능숙함", rating: 4, description: "백엔드 개발 메인 IDE" },
    { id: "sec-postgresql", name: "PostgreSQL", category: "데이터베이스", level: "능숙함", rating: 3.5, description: "PostgreSQL 기반 MSA 팀 프로젝트 개발 경험" },
    { id: "sec-redis", name: "Redis", category: "데이터베이스", level: "능숙함", rating: 3.5, description: "캐시 및 이벤트 처리 보조 스토리지 활용 경험" },
    { id: "sec-cloudflare", name: "Cloudflare", category: "DevOps", level: "능숙함", rating: 3.5, description: "Zero Trust SSH, Tunnel, R2 기반 운영 환경 이전 및 배포 경험" },
    // 개발 가능 (rating: 2~3)
    { id: "sec-js", name: "JavaScript", category: "언어", level: "개발 가능", rating: 3.5, description: "웹 프론트엔드 구현을 위해 JavaScript 문법과 비동기 처리 흐름을 활용한 경험" },
    { id: "sec-nginx", name: "NGINX", category: "DevOps", level: "개발 가능", rating: 3.5, description: "Reverse Proxy 및 정적 자원 배포 설정 경험" },
    { id: "sec-kafka", name: "Kafka", category: "백엔드", level: "개발 가능", rating: 3, description: "Event-Driven 구조 기반 팀 프로젝트 경험" },
    { id: "sec-kubernetes", name: "Kubernetes", category: "DevOps", level: "개발 가능", rating: 3, description: "Kubernetes 기반 배포 및 운영 실습 경험" },
    { id: "sec-elasticsearch", name: "Elasticsearch", category: "데이터베이스", level: "개발 가능", rating: 3, description: "검색 엔진 및 색인 기반 기능 실습 경험" },
    { id: "sec-tailscale", name: "Tailscale", category: "DevOps", level: "개발 가능", rating: 3, description: "원격 PC와 컨테이너 환경을 연결해 팀 공용 개발 환경을 구성한 경험" },
    { id: "sec-unity", name: "Unity", category: "엔진/프레임워크", level: "개발 가능", rating: 3, description: "Unity 엔진 프로젝트 경험" },
    // 경험 있음 (rating: 1~2)
    { id: "sec-csharp", name: "C#", category: "언어", level: "경험 있음", rating: 3, description: "Unity 기반 게임 프로젝트 기획 및 일부 스크립트 협업 경험" },
    { id: "sec-vba", name: "VBA", category: "언어", level: "경험 있음", rating: 3, description: "엑셀 문서 Export 및 자동화 스크립트 유지보수 경험" },
    { id: "sec-network", name: "Network", category: "CS지식", level: "경험 있음", rating: 3, description: "TCP, HTTP 등 기본 원리 숙지" },
];
