// 모달 확장을 위한 기본 인터페이스
export interface ModalContent {
    detailDescription?: string;
    gallery?: string[];
    links?: Record<string, string>;
}

export interface ModalExtendable {
    id: string;
    modalContent?: ModalContent;
}

// Project 인터페이스
export interface Project extends ModalExtendable {
    title: string;
    period: string;
    description: string;
    techStack: string[];
    role: string[];
    images: string[];
    projectType: "team" | "personal";
    links?: {
        github?: string;
        githubLinks?: { url: string; label: string }[];
        demo?: string;
        ppt?: string;
    };
}

// Experience 인터페이스
export interface ExperienceProject {
    title: string;
    description: string;
    details: string[];
    images?: string[];
}

export interface Experience extends ModalExtendable {
    company: string;
    position: string;
    period: string;
    description: string;
    projects: ExperienceProject[];
}

// Competency 인터페이스
export interface Competency extends ModalExtendable {
    title: string;
    description: string;
    items: string[];
}

// Education 인터페이스
export interface Education extends ModalExtendable {
    school: string;
    period: string;
    course: string;
    intro?: string;
}

// Skill 인터페이스
export interface Skill {
    id: string;
    name: string;
    category: string;
    icon: string;
}

export interface SecondarySkill extends ModalExtendable {
    name: string;
    category: string;
    level: "실무 경험" | "능숙함" | "개발 가능" | "경험 있음";
    description?: string;
    rating: number;
}

// Profile 인터페이스
export interface ProfileStat {
    label: string;
    value: string;
}

export interface Profile {
    name: string;
    role: string;
    email: string;
    greeting: string;
    description: string;
    image: string;
    github: string;
    stats: ProfileStat[];
}

// Section Meta 인터페이스
export interface SectionMeta {
    title: string;
    subtitle: string;
    [key: string]: unknown;
}
