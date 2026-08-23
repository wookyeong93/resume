
    export type JobSearchStatus = 'active' | 'openToOffers' | 'focusing'

    export const statusLabels: Record<JobSearchStatus, string> = {
        active: '적극적으로 구직중입니다.',
        openToOffers: '이직 제안은 메일로 연락주세요.',
        focusing: '현재에 집중중입니다.',
    }

    export interface StatusConfig {
        color: string
    }

    export const statusConfig: Record<JobSearchStatus, StatusConfig> = {
        active: {
            color: '#22c55e', // green
        },
        openToOffers: {
            color: '#f97316', // orange
        },
        focusing: {
            color: '#9ca3af', // gray
        },
    }

    export interface HeroStat {
        value: string
        label: string
    }

    export interface Contact {
        label: string
        value: string
        href: string
    }

    export interface SkillGroup {
        label: string      
        items: string[]    
        note: string       
    }

    export interface Profile {
        brand: string
        name: string
        title: string
        status: JobSearchStatus
        summary: string
        githubHref: string
        heroStats: HeroStat[]
        contacts: Contact[]
        skills: SkillGroup[]
    }

    export const profile: Profile = {
        brand: 'Wookyeong Kwon', 
        name: '권우경', 
        title: '백엔드 개발자', 
        status: 'focusing', 
        summary: 'SI에서 다양한 프로젝트를 진행하며 분석, 설계, 구축, 운영까지 전체 사이클을 경험해본 6년차 풀스택 개발자입니다. 다른 직군과 협업하며 더 나은 서비스를 만들고 개선해 나가는 것을 중요하게 생각합니다.',
        githubHref: 'https://github.com/wookyeong93', 

        heroStats: [
            { value: '6년+', label: '경력' },
            { value: '선임개발자/PL', label: '역할' },
            { value: '10+', label: '프로젝트' },
        ],

        contacts: [
            { label: 'EMAIL', value: 'dnrud368@gmail.com', href: 'mailto:dnrud368@gmail.com' },
            { label: 'PHONE', value: '010-9416-0525', href: 'tel:010-1234-5678' },
            { label: 'GITHUB', value: 'github.com/wookyeong93', href: 'https://github.com/wookyeong93' },
        ],

        skills: [
            {label : 'CI/CD' , items: ['Jenkins', 'github Actions'], note :'CI/CD 파이프라인 구성 및 배포 경험'},
            { label: 'Backend', items: ['Java(Spring Boot)','Mybatis', 'JPA', 'QueryDSL'], note: '기본 구조 / 공통 모듈(예외처리 , 응답포멧 등) 설계 및 구현 가능 ' },
            { label: 'Frontend', items: ['Vue', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'jQuery', 'JSP', 'Thymeleaf'], note: 'SPA와 SSR 등 요구사항에 맞춰 화면 구현 가능' },
            { label: 'Mobile / Hybrid', items: ['Android', 'Flutter'], note: '하이브리드 웹앱 및 네이티브 앱 개발 경험' },
            { label: '운영체제', items: ['Linux'], note: 'Linux 기본 명령어 사용 가능' },
            { label: 'Database', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MSSQL', 'Oracle'], note: 'SQL 작성에 능숙, 실행계획(EXPLAIN) 분석,인덱스 설계 등 성능 튜닝 가능' },
            { label: '협업도구', items: ['Git', 'GitHub', 'GitLab', 'gitflow', 'Jira', 'Confluence', 'Slack'], note: '형상관리 툴 사용에 익숙, Jira,Confluence 기반 애자일 개발 경험' },
            { label: 'AI 활용 개발', items: ['Claude Code', 'Antigravity'], note: '에이전트 기반 코딩 도구로 기본 구조·반복 CRUD 초안을 자동화하고, 설계 판단과 핵심 로직은 직접 검증' },
        ],
    }