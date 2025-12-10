import type { Skill, SecondarySkill } from './types';

export const SKILLS: Skill[] = [
    { id: "skill-springboot", name: "Spring Boot", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { id: "skill-react", name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { id: "skill-mysql", name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { id: "skill-jsp", name: "JSP & Servlet", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { id: "skill-docker", name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { id: "skill-aws", name: "AWS EC2", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { id: "skill-git", name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { id: "skill-prompt", name: "Prompt Engineering", category: "AI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
];

export const SECONDARY_SKILLS: SecondarySkill[] = [
    // 실무 경험 (rating: 3~5)
    { id: "sec-springboot", name: "Spring Boot", category: "백엔드", level: "실무 경험", rating: 4.5, description: "Spring Boot 기반 웹사이트 구축 및 SSE 실시간 알림 구현" },
    { id: "sec-react", name: "React", category: "프론트엔드", level: "실무 경험", rating: 4, description: "React 기반 코드 이해 및 API 연동 작업 가능" },
    { id: "sec-mysql", name: "MySQL", category: "데이터베이스", level: "실무 경험", rating: 4.5, description: "MySQL 8.4 LTS 기반 프로젝트 개발 경험" },
    { id: "sec-jsp", name: "JSP & Servlet", category: "백엔드", level: "실무 경험", rating: 4.5, description: "MVC 기반 웹 사이트 개발 프로젝트 경험" },
    { id: "sec-docker", name: "Docker", category: "DevOps", level: "실무 경험", rating: 4.5, description: "Docker 기반 3-Tier 구조 및 Reverse Proxy 환경 구축" },
    { id: "sec-ec2", name: "AWS EC2", category: "DevOps", level: "실무 경험", rating: 4, description: "EC2 기반 서버 배포 및 인프라 구축" },
    { id: "sec-prompt", name: "Prompt Engineering", category: "AI-Tool", level: "실무 경험", rating: 4.5, description: "Claude, Codex, Gemini 등 AI 협업 파이프라인 구축" },
    { id: "sec-git", name: "Git", category: "협업 도구", level: "실무 경험", rating: 5, description: "trunk-based 방법론 기반 브랜치 관리" },
    { id: "sec-java", name: "Modern Java", category: "언어", level: "실무 경험", rating: 4.5, description: "Java8 이후 현대적 문법 및 객체지향 개념 숙지" },
    { id: "sec-svn", name: "SVN", category: "협업 도구", level: "실무 경험", rating: 4.5, description: "파일 버전 관리, Git과 병행 사용 경험" },
    { id: "sec-sheets", name: "Google Sheets", category: "협업 도구", level: "능숙함", rating: 4, description: "함수 및 Apps Script 활용 가능" },
    { id: "sec-cursor", name: "Cursor / Antigravity", category: "AI-Tool", level: "능숙함", rating: 4, description: "AI 기반 프론트엔드 작업" },
    // 능숙함 (rating: 2~4)
    { id: "sec-jira", name: "Jira", category: "협업 도구", level: "능숙함", rating: 3.5, description: "티켓 기반 일감 관리 경험" },
    { id: "sec-trello", name: "Trello", category: "협업 도구", level: "능숙함", rating: 3.5, description: "칸반 기반 협업 툴 활용" },
    { id: "sec-confluence", name: "Confluence", category: "협업 도구", level: "능숙함", rating: 3.5, description: "마크다운 기반 문서 편집" },
    { id: "sec-notion", name: "Notion", category: "협업 도구", level: "능숙함", rating: 4, description: "기획 작업 및 문서 편집" },
    { id: "sec-intellij", name: "IntelliJ", category: "IDE", level: "능숙함", rating: 4, description: "백엔드 개발 메인 IDE" },
    // 개발 가능 (rating: 2~3)
    { id: "sec-js", name: "JavaScript (ES6)", category: "프론트엔드", level: "개발 가능", rating: 3, description: "ES6 문법 기반 코드 작성" },
    { id: "sec-html", name: "HTML5", category: "프론트엔드", level: "개발 가능", rating: 3, description: "시맨틱 구조 고려한 페이지 작성" },
    { id: "sec-css", name: "CSS3", category: "프론트엔드", level: "개발 가능", rating: 2.5, description: "기본 CSS 문법 숙지" },
    { id: "sec-unity", name: "Unity", category: "엔진/프레임워크", level: "개발 가능", rating: 2.5, description: "Unity 엔진 프로젝트 경험" },
    // 경험 있음 (rating: 1~2)
    { id: "sec-csharp", name: "C#", category: "언어", level: "경험 있음", rating: 2, description: "Unity 기반 UI 코드 작성 가능" },
    { id: "sec-python", name: "Python", category: "언어", level: "경험 있음", rating: 1.5, description: "간단한 스크립트 작성 가능" },
    { id: "sec-network", name: "Network", category: "CS지식", level: "경험 있음", rating: 2, description: "TCP, HTTP 등 기본 원리 숙지" },
];
