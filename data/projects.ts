    // =============================================================
    // 포트폴리오(/work) 화면 데이터 — 선보일 프로젝트
    // 구조: 그리드 카드 1개 = 상세 페이지 1개 (slug로 연결)
    // 프로젝트 추가: 아래 예시 객체를 복사해서 배열에 붙여넣고 내용을 채우세요.
    // =============================================================

    export interface ProjectMeta {
        k: string // 항목명 (예: '역할', '기간', '규모', '분야')
        v: string // 값
    }

    export interface ProjectContribution {
        n: string    // 번호 (예: '01')
        text: string // 기여 내용 한 문장
    }

    export interface ProjectResult {
        value: string // 성과 수치 (예: '40%')
        label: string // 수치 설명
    }

    export interface Project {
        slug: string                    // URL에 쓰일 고유 식별자 (영문/숫자/하이픈)
        name: string                    // 프로젝트명
        year: string
        field: string                   // 분야 (예: '금융 · SI')
        gradient: string                // 카드/상세 히어로 배경 (CSS linear-gradient 문자열)
        tagline: string                 // 한 줄 캐치프레이즈
        summary: string                 // 그리드 카드용 짧은 설명
        overview: string                // 상세 페이지 개요 본문
        meta: ProjectMeta[]             // 상세 페이지 메타 스트립
        contributions: ProjectContribution[] // 주요 기여
        results: ProjectResult[]        // 성과 카드
        tags: string[]                  // 사용 기술
    }

    export const projects: Project[] = [
    {
        slug: 'fingate-kakaopay-db-migration',
        name: '핀게이트 DB 마이그레이션',
        year: '2025.08 - 2026.01',
        field: '금융 · 핀테크 · DB',
        gradient: 'linear-gradient(135deg, #FFD200 0%, #393939 100%)',
        tagline: 'Oracle에서 PostgreSQL로의 완벽한 이종 DBMS 전환 및 종속 로직 재작성',
        summary: '테이블 400개, 함수/프로시저 310개 규모의 이종 DBMS 마이그레이션 및 자바 서비스 레이어 트랜잭션 이관을 담당했습니다.',
        overview: '핀게이트 카카오페이 커스텀 프로젝트의 데이터베이스를 Oracle에서 PostgreSQL로 전환하는 고난도 마이그레이션 과제입니다. 이종 DBMS 간의 데이터 타입 정밀 매핑과 엄격한 타입 체크 오류를 실데이터 기반으로 검증하였으며, 기존 DB 종속 프로시저의 트랜잭션을 제거하고 자바 서비스 레이어로 로직을 이관하는 고도화 작업을 수행했습니다.',
        meta: [
            { k: '역할', v: 'DB 마이그레이션 담당' },
            { k: '규모', v: '테이블 400개, 함수 130개, 프로시저 180개' }
        ],
        contributions: [
            { n: '01', text: 'Oracle 전용 구문을 PostgreSQL 호환 구문으로 전환하고 EXPLAIN 분석을 통해 인덱스 튜닝' },
            { n: '02', text: '기존 프로시저 내부의 트랜잭션 제어를 제거하고 자바 서비스 레이어로 로직 이관' }
        ],
        results: [
            { value: '인계 완료', label: '계약 만료에 따른 변환 결과물 및 상세 전환 가이드 인계' }
        ],
        tags: ['Java', 'Spring Boot', 'MyBatis', 'Oracle', 'PostgreSQL']
    },
    {
        slug: 'daekyo-dreams-modernization',
        name: '대교 차세대 드림스 고도화',
        year: '2024.05 - 2025.05',
        field: '교육 · 에듀테크 · MSA',
        gradient: 'linear-gradient(135deg, #00A1E4 0%, #0D233A 100%)',
        tagline: '전임 사 철수로 위기를 맞은 Spring Cloud MSA 프로젝트의 성공적인 재개발 및 구조 파악',
        summary: '조직파트 PL로서 MSA 구조의 프로젝트를 신속히 파악하고, 빌드 시스템 전환 및 대량 데이터 마감 성능을 혁신적으로 개선했습니다.',
        overview: '전임 개발사의 갑작스러운 철수로 인해 인수한 Spring Cloud 기반의 복잡한 MSA 프로젝트입니다. 초기 한 달간 신속하게 업무와 시스템 구조를 파악한 뒤 재개발에 착수했으며, 조직파트 어드민 신규 구축, 메인 웹 요구사항 반영, 대규모 마감 배치 성능 개선 등을 주도했습니다.',
        meta: [
            { k: '역할', v: '조직파트 PL (개발 리더)' },
            { k: '아키텍처', v: 'Spring Cloud 기반 MSA' }
        ],
        contributions: [
            { n: '01', text: '조직파트 어드민 신규 구축 및 메인웹 요구사항 전면 재개발' },
            { n: '02', text: 'Maven에서 Gradle로 빌드 시스템 전환 및 마감 전 제한 프로세스 설계' },
            { n: '03', text: '월말총원 마감 성능 개선: 멀티스레드 대신 프로시저 전환으로 처리 시간 단축' }
        ],
        results: [
            { value: '1분 30초', label: '월말총원 마감 처리 시간 (기존 10분 이상)' }
        ],
        tags: ['Java', 'Spring Boot', 'MyBatis', 'Gradle', 'Vue.js', 'TypeScript', 'Pinia', 'Quasar', 'PostgreSQL']
    },
    {
        slug: 'kt-genie-air-smart-care',
        name: 'KT 지니에어 웹앱 운영 및 UX 고도화',
        year: '2022.09 - 2025.12',
        field: 'IoT · B2B 스마트 케어',
        gradient: 'linear-gradient(135deg, #EC1C24 0%, #141414 100%)',
        tagline: '3년간 단일 서비스를 책임지며, 폐쇄망 제약을 극복한 CI/CD 구축과 전면 UX 고도화',
        summary: 'KT의 B2B 스마트 실내 공기 케어 서비스의 개발 PL로서, 슬로우 쿼리 개선, 장치 제어 알고리즘 정상화 및 전면 UX 고도화를 이끌었습니다.',
        overview: 'KT의 AI와 공기 데이터를 결합한 B2B 스마트 실내 공기 케어 서비스입니다. ITO 운영 유지보수로 인수하여 초기 결함 개선 및 성능 튜닝을 진행했고, 이후 약 1년간 운영을 병행하며 전면 UX 고도화 및 인프라 자동화를 완수했습니다.',
        meta: [
            { k: '역할', v: '개발 PL' },
            { k: '플랫폼', v: '사용자 하이브리드 웹앱, 관리자 웹' }
        ],
        contributions: [
            { n: '01', text: '장치 제어 알고리즘 정상화 및 제어 로직 API 단일화' },
            { n: '02', text: '모노레포 SSR 구조에 최적화된 Docker 2단계 CI 및 Nexus 중계 파이프라인 구축' },
            { n: '03', text: '폐쇄망 VDI 환경의 자동 배포 스크립트 작성 및 UX 고도화 수행' }
        ],
        results: [
            { value: '1초 내외', label: '통계 쿼리 개선 (기존 10초)' },
            { value: '3년+', label: '단일 서비스 책임 운영' }
        ],
        tags: ['Java', 'Spring Boot', 'MyBatis', 'Vue.js', 'Nuxt', 'SCSS', 'JavaScript', 'TypeScript', 'Android', 'Flutter', 'PostgreSQL', 'Jenkins', 'Docker', 'Nexus']
    },
    {
        slug: 'r114-payment-system-stabilization',
        name: '부동산114 결제 및 월정기결제 정상화',
        year: '2021.11 - 2023.10',
        field: '부동산 · B2B 플랫폼 · 결제',
        gradient: 'linear-gradient(135deg, #0054A6 0%, #222222 100%)',
        tagline: '뒤엉킨 결제 모듈을 분리·격리하여 결제 오류율을 1%대로 낮춘 전담 소생기',
        summary: '공인중개사 매물 광고 결제 및 정기결제 도메인을 1인 전담하여, 기존의 구조적 누락 문제를 완벽히 해결하고 안정화했습니다.',
        overview: '전임 개발사들의 대거 퇴사로 이관된 프로젝트로, 매물 광고 상품 결제 및 월정기결제 배치가 완전히 망가져 있던 상태였습니다. 결제가 매물 노출(광고 집행)과 직결되는 민감한 B2B 도메인에서 결제 및 정기결제 시스템의 결함을 전면 수정하여 정상화했습니다.',
        meta: [
            { k: '역할', v: '결제 도메인 1인 전담' },
            { k: '도메인', v: 'B2B 상품 결제 및 정기결제' }
        ],
        contributions: [
            { n: '01', text: '결제 적재와 정기결제 생성 로직 분리 및 핵심 데이터 선검증 로직 구현' },
            { n: '02', text: '공휴일 마스터 부재 환경에서 PG사 오류 우선순위별 재시도 로직 구현' },
            { n: '03', text: '매물 정보/결제 배치 간 병목 회피를 위한 시간 조정 및 운영 프로세스 정립' }
        ],
        results: [
            { value: '1%대', label: '정기결제 오류율 안정화' }
        ],
        tags: ['Java', 'Spring Boot', 'MyBatis', 'Thymeleaf', 'MSSQL']
    },
    {
        slug: 'small-scale-si-projects',
        name: '소규모 SI 신규 개발 및 다수 프로젝트 수행',
        year: '2021.06 - 현재',
        field: 'SI · 다방면 도메인',
        gradient: 'linear-gradient(135deg, #6B7280 0%, #1F2937 100%)',
        tagline: '요구사항 명세부터 설계, 개발, 배포 운영까지 올라운더 풀스택 역량 증명',
        summary: '한화로보틱스, Ex 모바일충전카드, 리만코리아 등 다양한 기업의 신규 개발 및 API 연동 프로젝트를 리드하거나 참여했습니다.',
        overview: '요구사항 명세와 설계부터 시작해 백엔드/프론트엔드/모바일 개발, 서버 설정 및 배포 운영에 이르기까지 풀스택 엔지니어로서의 역량을 바탕으로 다양한 소규모 SI 프로젝트들을 완수해 왔습니다.',
        meta: [
            { k: '역할', v: '개발 PL / 개발 팀원' },
            { k: '수행 과제', v: '주요 기업 프로젝트 외 9건' }
        ],
        contributions: [
            { n: '01', text: '한화로보틱스 어드민 백엔드 구조 설계 및 SMTP 메일 발송 연동' },
            { n: '02', text: 'Ex 모바일충전카드 안드로이드 네이티브 화면 개발 및 API 연동' },
            { n: '03', text: '리만코리아 대만 백오피스 화면 개발 및 관련 API 연동' }
        ],
        results: [
            { value: '9건+', label: '다양한 SI 프로젝트 수행 완료' }
        ],
        tags: ['Java', 'Spring Boot', 'JPA', 'MyBatis', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'jQuery', 'JSP', 'Thymeleaf', 'Android', 'Flutter', 'MySQL', 'MariaDB', 'PostgreSQL', 'Oracle', 'MSSQL']
    }
    ];
