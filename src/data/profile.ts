import type { Profile } from './types';

export const PROFILE: Profile = {
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
