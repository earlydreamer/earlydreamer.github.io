import type { Profile } from './types';

export const PROFILE: Profile = {
    name: "박재현",
    role: "게임 기획자 출신 풀스택 개발자",
    email: "earlydreamer@naver.com",
    greeting: "Hello, I'm",
    description:
        `안녕하세요, 기획을 이해하고 해결책을 제시하는 개발자 박재현입니다.
약 5년간의 게임 시스템 기획자 경험으로 구조를 만들고 사용자 흐름을 설계하는 데에 익숙합니다.
기획 의도를 빠르게 파악하고, 팀에 맞는 구현 방식으로 연결하는 데에 강점이 있습니다.
기획적 시야와 백엔드 이해를 바탕으로 다양한 영역에 대응하는 개발자를 지향합니다.`,
    image: "/images/profile.png",
    github: "https://github.com/earlydreamer",
    stats: [
        { label: "Total Career", value: "4Y 10M" },
        { label: "Main Projects", value: "3" },
        { label: "Core Stack", value: "12+" },
    ],
};
