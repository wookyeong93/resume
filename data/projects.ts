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
        slug: 'sample-project',
        name: '예시 프로젝트명',
        year: '2026',
        field: '분야 · SI',
        gradient: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
        tagline: '한 줄 캐치프레이즈를 입력하세요',
        summary: '그리드 카드에 보여줄 2~3문장 분량의 짧은 설명을 입력하세요.',
        overview: '상세 페이지 개요 본문입니다. 프로젝트의 배경, 목적, 본인의 역할을 자세히 서술하세요.',
        meta: [
            { k: '역할', v: '역할을 입력하세요' },
            { k: '기간', v: '0개월' },
            { k: '규모', v: '개발 0명' },
            { k: '분야', v: '분야' },
        ],
        contributions: [
            { n: '01', text: '주요 기여 내용을 입력하세요.' },
            { n: '02', text: '주요 기여 내용을 입력하세요.' },
        ],
        results: [
            { value: '0%', label: '성과 설명을 입력하세요' },
        ],
        tags: ['Java', 'Spring Boot'],
    },
]
