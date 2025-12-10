export interface Project {
    id: string;
    title: string;
    period: string;
    description: string;
    techStack: string[];
    role: string[];
    images: string[];

    links?: {
        github?: string;
        githubLinks?: { url: string; label: string }[];
        demo?: string;
        ppt?: string;
    };
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string;
    projects: {
        title: string;
        description: string;
        details: string[];
        images?: string[];
    }[];
}

export interface Competency {
    title: string;
    description: string;
    items: string[];
}

export interface Education {
    school: string;
    period: string;
    course: string;
    intro?: string; // Added for flexibility though not strictly used yet
}

export const PROFILE = {
    name: "박재현",
    role: "기획자 출신 풀스택 개발자",
    email: "earlydreamer@naver.com",
    greeting: "Hello, I'm",
    description:
        `안녕하세요, 기획을 이해하고 해결책을 제시하는 개발자 박재현입니다.
약 5년간의 게임 시스템 기획자 경험으로 구조를 만들고 사용자 흐름을 설계하는 데에 익숙합니다.
기획을 바탕으로 프로그래머와 협업한 경험을 기반으로 기획의 핵심을 인식하고,
팀에 가장 적합한 방식으로 구현해내는 데에 강점을 가지고 있습니다.
기획적 시야와 설계 경험 위에 백엔드 분야에 대한 이해를 더해 다양한 영역에 대응할 수 있는 개발자가 되고자 합니다.`,
    image: "/images/profile.png",
    github: "https://github.com/earlydreamer",
    stats: [
        { label: "Years Experience", value: "5+" },
        { label: "Projects", value: "6+" },
        { label: "Skills", value: "10+" },
    ],
};

// 섹션 메타데이터
export const SECTION_META = {
    experience: {
        title: "Experience",
        subtitle: "경력 및 프로젝트 경험",
        developer: {
            icon: "💻",
            title: "Developer Experience",
            intro: "프로그래머 포지션으로 참여한 프로젝트입니다.",
        },
        planner: {
            icon: "🎮",
            title: "Game Planner Experience",
            intro: "게임업계에서 시스템 기획자 포지션으로 약 5년간 근무했습니다.",
        },
    },
    skills: {
        title: "Skills",
        subtitle: "활용 가능한 기술 스택",
        modalTitle: "경험 기술 목록",
        buttonText: "경험 기술 자세히 보기",
        categoryOrder: ["백엔드", "프론트엔드", "데이터베이스", "DevOps", "언어", "협업 도구", "AI-Tool", "IDE", "엔진/프레임워크", "CS지식"],
    },
    competency: {
        title: "Core Competency",
        subtitle: "핵심 역량 및 주요 경쟁력",
    },
    projects: {
        title: "Projects",
        subtitle: "주요 프로젝트 포트폴리오",
    },
    education: {
        title: "Education",
        subtitle: "학력 및 교육 수료",
    },
};


export const COMPETENCIES: Competency[] = [
    {
        title: "MVC 구조 및 Spring Boot 기반 개발",
        description: "MVC 구조에 대한 이해를 바탕으로 안정적인 웹 서비스를 구축합니다.",
        items: [
            "Spring Boot를 활용한 웹사이트 구축 및 RESTful API 명세 작성",
            "MVC 구조를 기반으로 기능별 책임 분리가 고려된 트랜잭션 흐름 설계",
            "JPA 환경에서 발생하는 N+1 이슈 등 성능 이슈를 고려한 쿼리 최적화",
        ],
    },
    {
        title: "AI 기반 애자일 개발 및 협업",
        description: "AI 도구를 적극 활용하여 개발 효율성을 극대화합니다.",
        items: [
            "Vibe-Coding을 활용한 빠른 프로토타이핑 및 즉각적인 소통",
            "AI 기반 자동 코드 리뷰 프로세스 도입으로 코드 품질 개선",
            "기술 스택 및 설계 지향점을 문서화하여 LLM 기반 코드 일관성 유지",
        ],
    },
    {
        title: "AWS 활용 및 CI/CD 파이프라인 구축",
        description: "안정적인 배포 환경과 자동화된 파이프라인을 구축합니다.",
        items: [
            "Docker와 Nginx Reverse Proxy를 활용한 3-Tier 아키텍처 기반 서비스 구축",
            "EC2 인스턴스, RDS, S3 등 AWS 인프라를 활용한 프로덕션 환경 구성",
            "GitHub Actions 기반 CI/CD 파이프라인 구축 및 배포 자동화",
        ],
    },
];

export const SKILLS = [
    { name: "Spring Boot", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "JSP & Servlet", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "AWS EC2", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Prompt Engineering", category: "AI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" }, // Using generic AI/ChatGPT logo
];

export interface SecondarySkill {
    name: string;
    category: string;
    level: "실무 경험" | "능숙함" | "개발 가능" | "경험 있음";
    description?: string;
    rating: number; // 1-5, 0.5 단위 가능
}

export const SECONDARY_SKILLS: SecondarySkill[] = [
    // 실무 경험 (rating: 3~5)
    { name: "Spring Boot", category: "백엔드", level: "실무 경험", rating: 4.5, description: "Spring Boot 기반 웹사이트 구축 및 SSE 실시간 알림 구현" },
    { name: "React", category: "프론트엔드", level: "실무 경험", rating: 4, description: "React 기반 코드 이해 및 API 연동 작업 가능" },
    { name: "MySQL", category: "데이터베이스", level: "실무 경험", rating: 4.5, description: "MySQL 8.4 LTS 기반 프로젝트 개발 경험" },
    { name: "JSP & Servlet", category: "백엔드", level: "실무 경험", rating: 4.5, description: "MVC 기반 웹 사이트 개발 프로젝트 경험" },
    { name: "Docker", category: "DevOps", level: "실무 경험", rating: 4.5, description: "Docker 기반 3-Tier 구조 및 Reverse Proxy 환경 구축" },
    { name: "AWS EC2", category: "DevOps", level: "실무 경험", rating: 4, description: "EC2 기반 서버 배포 및 인프라 구축" },
    { name: "Prompt Engineering", category: "AI-Tool", level: "실무 경험", rating: 4.5, description: "Claude, Codex, Gemini 등 AI 협업 파이프라인 구축" },
    { name: "Git", category: "협업 도구", level: "실무 경험", rating: 5, description: "trunk-based 방법론 기반 브랜치 관리" },
    { name: "Modern Java", category: "언어", level: "실무 경험", rating: 4.5, description: "Java8 이후 현대적 문법 및 객체지향 개념 숙지" },
    { name: "SVN", category: "협업 도구", level: "실무 경험", rating: 4.5, description: "파일 버전 관리, Git과 병행 사용 경험" },
    { name: "Google Sheets", category: "협업 도구", level: "능숙함", rating: 4, description: "함수 및 Apps Script 활용 가능" },
    { name: "Cursor / Antigravity", category: "AI-Tool", level: "능숙함", rating: 4, description: "AI 기반 프론트엔드 작업" },
    // 능숙함 (rating: 2~4)
    { name: "Jira", category: "협업 도구", level: "능숙함", rating: 3.5, description: "티켓 기반 일감 관리 경험" },
    { name: "Trello", category: "협업 도구", level: "능숙함", rating: 3.5, description: "칸반 기반 협업 툴 활용" },
    { name: "Confluence", category: "협업 도구", level: "능숙함", rating: 3.5, description: "마크다운 기반 문서 편집" },
    { name: "Notion", category: "협업 도구", level: "능숙함", rating: 4, description: "기획 작업 및 문서 편집" },
    { name: "IntelliJ", category: "IDE", level: "능숙함", rating: 4, description: "백엔드 개발 메인 IDE" },

    // 개발 가능 (rating: 2~3)
    { name: "JavaScript (ES6)", category: "프론트엔드", level: "개발 가능", rating: 3, description: "ES6 문법 기반 코드 작성" },
    { name: "HTML5", category: "프론트엔드", level: "개발 가능", rating: 3, description: "시맨틱 구조 고려한 페이지 작성" },
    { name: "CSS3", category: "프론트엔드", level: "개발 가능", rating: 2.5, description: "기본 CSS 문법 숙지" },
    { name: "Unity", category: "엔진/프레임워크", level: "개발 가능", rating: 2.5, description: "Unity 엔진 프로젝트 경험" },
    // 경험 있음 (rating: 1~2)
    { name: "C#", category: "언어", level: "경험 있음", rating: 2, description: "Unity 기반 UI 코드 작성 가능" },
    { name: "Python", category: "언어", level: "경험 있음", rating: 1.5, description: "간단한 스크립트 작성 가능" },
    { name: "Network", category: "CS지식", level: "경험 있음", rating: 2, description: "TCP, HTTP 등 기본 원리 숙지" },
];

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

export const EDUCATION: Education[] = [
    {
        school: "한국소프트웨어기술진흥협회 (KOSTA)",
        period: "2025",
        course: "JAVA 기반 Devops 개발자 양성과정 수료",
    },
    {
        school: "경일게임아카데미",
        period: "2018",
        course: "모바일게임개발자양성과정 수료",
    },
    {
        school: "가천대학교",
        period: "2018",
        course: "컴퓨터공학과 졸업 (동양어문학과 일본어 부전공)",
    },
    {
        school: "분당정보산업고등학교",
        period: "2011",
        course: "정보처리과 졸업",
    },
];

export const PROJECTS: Project[] = [
    {
        id: "pick-team",
        title: "Pick Team",
        period: "2025.06.04 - 2025.07.18",
        description: "개발자를 위한 올인원 팀 빌딩 및 협업 플랫폼",
        techStack: ["React", "Spring Boot", "MySQL", "JPA", "WebSocket", "WebRTC"],
        role: ["팀장", "기획", "프론트엔드 리드", "협업 툴(화상채팅, 칸반) 구현"],
        images: ["/images/projects/pick-team/image.png"],
        links: {
            githubLinks: [
                { url: "https://github.com/KOSTA-295-pick-team/pick-team-frontend", label: "Frontend" },
                { url: "https://github.com/KOSTA-295-pick-team/pick-team", label: "Backend" },
            ],
        },
    },
    {
        id: "kirini",
        title: "Kirini (키리니)",
        period: "2025.04.18 - 2025.05.21",
        description: "키보드 입문자를 위한 정보 공유 및 커뮤니티 사이트",
        techStack: ["HTML/CSS/JS", "Servlet", "MySQL", "AWS EC2", "Docker"],
        role: ["팀장", "코어 기획/설계", "배포 환경(DevOps) 구성", "게시판 CRUD"],
        images: ["/images/projects/kirini/image.png"],
        links: {
            githubLinks: [
                { url: "https://github.com/KOSTA-295-Team-Kirini/kirini", label: "GitHub" },
            ],
        },
    },
    {
        id: "boat",
        title: "Books of All Time (B.O.A.T)",
        period: "2025.03.14 - 2025.04.02",
        description: "KOSTA 교육생을 위한 도서 대여 및 추천 관리 콘솔 프로그램",
        techStack: ["Java", "JDBC", "MySQL", "AWS RDS"],
        role: ["기획", "ERD 설계", "전체 클래스 설계", "대여/반납 로직 구현"],
        images: ["/images/projects/boat/image.png"],
        links: {
            githubLinks: [
                { url: "https://github.com/KOSTA-295-Team-BOAT/kosta_library", label: "GitHub" },
            ],
        },

    },
];
