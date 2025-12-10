import type { Project } from './types';

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
