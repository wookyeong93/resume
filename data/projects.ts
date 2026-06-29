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
            tagline: 'Oracle → PostgreSQL 이종 DBMS 전환 및 애플리케이션 쿼리 마이그레이션',
            summary: '테이블 400개, 함수/프로시저 310개 규모의 Oracle → PostgreSQL 이종 DBMS 전환 및 자바 서비스 레이어 쿼리 마이그레이션을 담당했습니다.',
            overview: '카카오페이의 요청으로 핀게이트가 운영 중인 Oracle 기반 솔루션을 PostgreSQL로 전환하는 프로젝트입니다. 협력사로 참여하여 테이블, 함수, 프로시저 등 약 800건의 변환 작업을 담당했습니다. MyBatis 쿼리 및 자바 서비스 레이어의 Oracle 전용 구문을 PostgreSQL 호환 구문으로 전환하였으며, 트랜잭션이 포함된 프로시저 일부는 자바 서비스 레이어로 이관했습니다. 이후 팀 내 검수를 통해 구문 오류 및 타입 오류를 확인·수정한 결과물을 핀게이트에 전달하고 철수했습니다.',
            meta: [
                { k: '역할', v: 'DB 마이그레이션 담당' },
                { k: '기간', v: '6개월' },
                { k: '규모', v: '개발 1인 (검수 4인)' },
                { k: '분야', v: '금융 · 핀테크 · DB' },
            ],
            contributions: [
                { n: '01', text: 'Oracle 전용 구문(CONNECT BY → WITH RECURSIVE, PIVOT → 집계 등)을 PostgreSQL 호환 구문으로 전환' },
                { n: '02', text: '데이터 타입 정밀 매핑(NUMBER → NUMERIC) 및 실데이터 기반 타입 오류 검증' },
                { n: '03', text: 'EXPLAIN 분석을 통한 인덱스 튜닝 및 일부 프로시저 트랜잭션을 자바 서비스 레이어로 이관' },
            ],
            results: [
                { value: '800건+', label: '테이블·함수·프로시저 전환 완료 후 원청 인계' },
            ],
            tags: ['Java', 'Spring Boot', 'MyBatis', 'Oracle', 'PostgreSQL'],
        },
        {
            slug: 'daekyo-dreams-modernization',
            name: '대교 차세대 드림스 고도화',
            year: '2024.05 - 2025.05',
            field: '교육 · 에듀테크 · MSA',
            gradient: 'linear-gradient(135deg, #00A1E4 0%, #0D233A 100%)',
            tagline: '전임 개발사 철수로 인수한 Spring Cloud MSA 프로젝트 재개발 및 마감 성능 개선',
            summary: '조직파트 PL로서 전임 개발사 철수 후 인수한 MSA 프로젝트를 신속히 파악하고, 빌드 시스템 전환 및 월말 마감 성능을 개선했습니다.',
            overview: '전임 개발사의 갑작스러운 철수로 인수한 Spring Cloud 기반 MSA 프로젝트입니다. 초기 한 달간 업무와 시스템 구조를 파악한 뒤 재개발에 착수했으며, 조직파트 어드민 신규 구축, 메인웹 요구사항 재개발, Maven → Gradle 빌드 전환, 월말총원 마감 성능 개선 등을 담당했습니다.',
            meta: [
                { k: '역할', v: '조직파트 PL' },
                { k: '기간', v: '13개월' },
                { k: '규모', v: '개발 PL' },
                { k: '아키텍처', v: 'Spring Cloud 기반 MSA' },
            ],
            contributions: [
                { n: '01', text: '조직파트 어드민 신규 구축 및 메인웹 요구사항 재개발' },
                { n: '02', text: 'Maven → Gradle 빌드 전환(10여 개) 및 마감 전 제한 프로세스 설계' },
                { n: '03', text: '월말총원 마감 성능 개선: 멀티스레드 대신 프로시저로 전환해 트랜잭션 일괄 처리' },
            ],
            results: [
                { value: '1분 30초', label: '월말총원 마감 처리 시간 (기존 10분 이상)' },
            ],
            tags: ['Java', 'Spring Boot', 'MyBatis', 'Gradle', 'Vue.js', 'TypeScript', 'Pinia', 'Quasar', 'PostgreSQL'],
        },
        {
            slug: 'kt-genie-air-smart-care',
            name: 'KT 지니에어 웹앱 운영 및 UX 고도화',
            year: '2022.09 - 2025.12',
            field: 'IoT · B2B 스마트 케어',
            gradient: 'linear-gradient(135deg, #EC1C24 0%, #141414 100%)',
            tagline: '3년간 단일 서비스를 책임지며 폐쇄망 제약 안에서 CI/CD를 구축하고 전면 UX 고도화 수행',
            summary: 'KT B2B 스마트 실내 공기 케어 서비스의 개발 PL로서, 슬로우 쿼리 개선, 장치 제어 알고리즘 정상화, 전면 UX 고도화 및 CI/CD 구축을 담당했습니다.',
            overview: 'KT의 AI와 공기 데이터를 결합한 B2B 스마트 실내 공기 케어 서비스입니다. ITO 운영 유지보수로 인수하여 초기 결함 개선 및 성능 튜닝을 진행했고, 이후 약 1년간 운영을 병행하며 팀원 1명과 함께 전면 UX 고도화를 수행했습니다. Vue의 dist가 빌드 시 Spring resource에 묶여 단일 war로 패키징되는 모노레포 SSR 구조라 CI 적용이 까다로웠으며, 폐쇄망 환경으로 자동 배포도 제약이 있었습니다.',
            meta: [
                { k: '역할', v: '개발 PL' },
                { k: '기간', v: '3년 4개월' },
                { k: '규모', v: '개발 2인' },
                { k: '플랫폼', v: '사용자 하이브리드 웹앱, 관리자 웹' },
            ],
            contributions: [
                { n: '01', text: '장치 제어 알고리즘 정상화 및 제어 로직을 서비스 API 한 곳으로 단일화' },
                { n: '02', text: 'Docker 2단계 빌드 + Nexus 중계 CI 파이프라인 구축 (모노레포 SSR 구조 대응)' },
                { n: '03', text: '폐쇄망 VDI 환경 배포 스크립트 작성으로 배포 자동화 및 전면 UX 고도화 수행' },
            ],
            results: [
                { value: '1초 내외', label: '통계 쿼리 응답 시간 (기존 10초)' },
                { value: '3년+', label: '단일 서비스 장기 운영' },
            ],
            tags: ['Java', 'Spring Boot', 'MyBatis', 'Vue.js', 'Nuxt', 'SCSS', 'JavaScript', 'TypeScript', 'PostgreSQL', 'Jenkins', 'Docker', 'Nexus'],
        },
        {
            slug: 'r114-payment-system-stabilization',
            name: '부동산114 결제 및 월정기결제 정상화',
            year: '2021.11 - 2023.10',
            field: '부동산 · B2B 플랫폼 · 결제',
            gradient: 'linear-gradient(135deg, #0054A6 0%, #222222 100%)',
            tagline: '뒤엉킨 결제 모듈을 분리·격리하여 정기결제 오류율을 1%대로 안정화',
            summary: '공인중개사 매물 광고 결제 및 정기결제 도메인을 1인 전담하여, 결제 적재 누락과 정기결제 오류를 전면 수정하고 안정화했습니다.',
            overview: '전임 개발사들의 대거 퇴사로 이관된 프로젝트로, 매물 광고 상품 결제 및 월정기결제 배치가 정상 작동하지 않던 상태였습니다. 결제 모듈이 한 메서드 안에서 객체 생성과 insert를 반복하는 구조라 결제 적재와 정기결제 생성이 뒤엉켜 누락이 걸러지지 않던 문제를 분석하고 전면 수정했습니다.',
            meta: [
                { k: '역할', v: '결제 도메인 1인 전담' },
                { k: '기간', v: '2년' },
                { k: '규모', v: '개발 1인' },
                { k: '도메인', v: 'B2B 상품 결제 및 정기결제' },
            ],
            contributions: [
                { n: '01', text: '핵심 결제 데이터 선검증 로직 구현 및 월정기결제 생성 로직을 별도 모듈로 분리' },
                { n: '02', text: '공휴일 마스터 부재 환경에서 PG사 오류 우선순위별 재시도 로직 구현' },
                { n: '03', text: '매물 정보 배치와 결제 배치 간 병목을 실행 시각 조정으로 회피' },
            ],
            results: [
                { value: '1%대', label: '정기결제 오류율 안정화 (이후 1년간 운영 검증)' },
            ],
            tags: ['Java', 'Spring Boot', 'MyBatis', 'Thymeleaf', 'MSSQL'],
        },
        {
            slug: 'small-scale-si-projects',
            name: '소규모 SI 신규 개발 다수 수행',
            year: '2021.06 - 현재',
            field: 'SI · 다방면 도메인',
            gradient: 'linear-gradient(135deg, #6B7280 0%, #1F2937 100%)',
            tagline: '요구사항 명세부터 설계, 개발, 배포 운영까지 다양한 소규모 SI 프로젝트 수행',
            summary: '한화로보틱스, Ex 모바일충전카드, 리만코리아 등 다양한 기업의 신규 개발 및 API 연동 프로젝트를 리드하거나 참여했습니다.',
            overview: '요구사항 명세와 설계부터 백엔드/프론트엔드/모바일 개발, 서버 설정 및 배포 운영까지 다양한 소규모 SI 프로젝트들을 수행했습니다. 한화로보틱스 어드민 백엔드 구조 설계, Ex 모바일충전카드 안드로이드 개발, 리만코리아 대만 백오피스 화면 개발 등 도메인과 기술 스택이 다양한 프로젝트들을 담당했습니다.',
            meta: [
                { k: '역할', v: '개발 PL / 개발 팀원' },
                { k: '기간', v: '2021.06 - 현재' },
                { k: '규모', v: '프로젝트별 상이' },
                { k: '수행 건수', v: '주요 3건 외 9건' },
            ],
            contributions: [
                { n: '01', text: '한화로보틱스: 어드민 백엔드 구조 설계 및 SMTP 메일 발송 연동' },
                { n: '02', text: 'Ex 모바일충전카드: 안드로이드 네이티브 신규 화면 개발 및 API 연동' },
                { n: '03', text: '리만코리아: 대만 백오피스 화면 개발 및 API 연동' },
            ],
            results: [
                { value: '12건+', label: '소규모 SI 프로젝트 수행 완료' },
            ],
            tags: ['Java', 'Spring Boot', 'JPA', 'MyBatis', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'jQuery', 'JSP', 'Thymeleaf', 'Android', 'Flutter', 'MySQL', 'MariaDB', 'PostgreSQL', 'Oracle', 'MSSQL'],
        },
];
