// =============================================================
// 경력 / 학력 / 자격증 데이터 — Resume 화면
// 구조: 소속 회사(Experience) → 그 안에 참여 프로젝트(CareerProject)
// 시간 역순(최근이 위) 권장. 입력은 직접, 검증/다듬기는 함께.
// =============================================================

export interface SideProject {
    name: string    // 프로젝트명
    desc: string    // 한 줄 설명
    link: string
    stack: string[] // 이 프로젝트에서 쓴 기술
}

export interface CareerProject {
    name: string    // 프로젝트명
    period: string  // 기간
    role: string    // 역할 (짧게 — 파란 칩으로 들어감)
    desc: string    // 한 줄 설명
    stack: string[] // 이 프로젝트에서 쓴 기술
}

export interface Experience {
    company: string
    period: string
    role: string
    team: string
    type: string
    location: string
    desc: string
    projects: CareerProject[]
}

export interface Education {
    school: string
    major: string
    degree: string
    status: string
    period: string
    gpa: string
}

export interface Cert {
    name: string
    issuer: string
    year: string
}

// ===== 경력 =====
export const experiences: Experience[] = [
    {
        company: '(주)제이랩',
        period: '2021.06 - 2026.06',
        role: '대리 | 연구원',
        team: '',
        type: '정규직',
        location: '서울시 송파구',
        desc: '대기업 계열사의 SI/ITO 프로젝트에 협력사로 참여하여, 요구사항 분석부터 설계, 개발, 운영까지 전 과정을 수행했습니다. 다양한 직군과 협업하며, PL 및 선임 개발자로서 업무 분배, 코드 리뷰, 일정 관리, 기술 검토 등을 수행했습니다.',
        projects: [
            {
                name: '마핏(MAFIT) 정육점 마진 관리 시스템',
                period: '2026.02 - 2026.05',
                role: '신규 서비스 기획 | 단독 개발',
                desc: '수주 공백기 신규 서비스 기획 후 사내 결재 승인을 받아 진행. 정육점 대상 원가·마진 관리 서비스를 기획부터 개발, 배포까지 단독 수행하여 정식 오픈. 오픈 후 실사용자 피드백에서 니즈 불일치를 확인하여 서비스 종료.',
                stack: ['Java', 'Spring Boot', 'JPA', 'MyBatis', 'Vue', 'TypeScript', 'PostgreSQL'],
            },
            {
                name: '핀게이트 카카오페이 커스텀',
                period: '2025.08 - 2026.01',
                role: 'DB 마이그레이션',
                desc: '테이블,함수,프로시저 700여 개 객체 전환. Oracle 전용 구문을 PostgreSQL 구문으로 재작성.',
                stack: ['Oracle', 'PostgreSQL', 'Java', 'Spring Boot', 'MyBatis'],
            },
            {
                name: '대교 차세대 드림스',
                period: '2024.05 - 2025.05',
                role: '파트 PL | 메인 개발',
                desc: '개발 20~30명 규모의 Spring Cloud MSA 프로젝트에서 조직·구성원 관리 파트 PL을 담당. 프로젝트 인수 고도화, 빌드 환경 개선 및 성능 최적화 수행.',
                stack: ['Java', 'Spring Boot', 'Spring Cloud', 'MyBatis', 'Vue', 'TypeScript', 'PostgreSQL'],
            },
            {
                name: 'KT 지니에어',
                period: '2022.09 - 2025.12',
                role: 'PL | 메인 개발',
                desc: '서비스 운영/유지보수를 단독으로 담당하며, 고도화 시 메인 개발자로 1~2명 팀을 리드. 관리자 웹 , 사용자 하이브리드 웹앱 UI/UX 고도화 및 Jenkins CI 빌드 자동화 수행.',
                stack: ['Java', 'Spring Boot', 'MyBatis', 'Vue', 'Nuxt', 'PostgreSQL'],
            },
            {
                name: '부동산114 중개업자 플랫폼',
                period: '2021.11 - 2023.10',
                role: '결제,상품,쿠폰 개발',
                desc: '결제,상품,쿠폰 기능 모듈 재개발. 안정화 기간 결제 오류 10건 이하로 오류율 1% 미만 달성.',
                stack: ['Java', 'Spring Boot', 'MyBatis', 'Thymeleaf', 'MSSQL'],
            },
            {
                name: '기타 소규모 SI 신규 구축',
                period: '2021.06 - 2026.06',
                role: 'PL | 메인 개발',
                desc: '10여 건의 소규모 프로젝트를 PL 및 메인 개발자로 신규 구축 및 기능 개발.',
                stack: ['Java', 'Spring Boot', 'JPA/QueryDSL', 'Vue', 'TypeScript', 'PostgreSQL', 'Oracle'],
            },
        ],
    },
    // 회사 추가: 위 객체를 복사해서 아래에 붙여넣으세요.
]

// ===== 학력 =====
export const education: Education[] = [
    {
        school: '아세아항공전문학교 (학점은행)',
        major: '항공정비학과',
        degree: '전문학사',
        status: '졸업',
        period: '2012.03 - 2014.02',
        gpa: '3.56 / 4.5',
    },
    {
        school: '국비훈련',
        major: 'Java 웹 개발자 과정',
        degree: '',
        status: '수료',
        period: '2020.12 - 2021.05',
        gpa: '',
    },
]

// ===== 자격증 =====
export const certs: Cert[] = [
    {
        name: '정보처리기사',
        issuer: '한국산업인력공단',
        year: '2026.06',
    },
    {
        name: '정보처리산업기사 (과정평가형)',
        issuer: '한국산업인력공단',
        year: '2021.05',
    },
]

export const sideProject : SideProject[] = [
    {
        name: "장부 에이전트 (AI 하네스 구조 학습)",
        desc: "소상공인 장부 서비스에 AI 가이드를 접목한 사이드 프로젝트. LLM은 자연어 해석만 담당하고 핵심 로직과 검증은 코드로 통제하는 하네스 구조로 설계.",
        link: 'https://github.com/wookyeong93/jangbu-agent',
        stack: ['Java', 'Spring Boot', 'JPA', 'MyBatis' , 'Vue' , 'PostgreSQL', 'Gemini']
    }
]