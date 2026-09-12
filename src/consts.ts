// ─────────────────────────────────────────────────────────────
// 사이트 전역 설정 — 이 파일만 고치면 사이트 정체성이 바뀝니다.
// ─────────────────────────────────────────────────────────────

export const SITE_TITLE = '생활건강 노트';
export const SITE_DESCRIPTION =
	'정부 지원금과 생활 행정, 건강 관리에서 실제로 결과를 가르는 기준선과 숫자를 공식 문서로 확인해 씁니다. 신청 자격, 감액 구간, 놓치는 시점을 짚습니다.';

// 배포할 실제 도메인. (애드센스·SEO·사이트맵 기준)
export const SITE_URL = 'https://keyit.co.kr';

// 사이트 대표/작성 주체 (E-E-A-T 신뢰도 표기에 사용)
export const SITE_AUTHOR = '전일용';

// 저자 프로필 — 글 하단 '이 글을 쓴 사람' 박스와 JSON-LD(Person)에 사용됩니다.
export const AUTHOR_PROFILE = {
	name: '전일용',
	role: '생활건강 노트 운영자',
	bio: '정부 지원금·생활 행정 절차를 직접 신청해 보고, 공고문과 시행지침 원문을 대조해 글로 정리합니다. 안산에서 생활건강 노트를 운영하고 있습니다.',
	// 글에 적용되는 편집 원칙 (품질 신뢰도 표기)
	policy: '모든 수치는 소관 부처·기관의 공식 문서에서 확인한 값만 싣고, 확인되지 않은 금액은 쓰지 않습니다. 기준이 바뀌면 본문을 수정하고 상단에 갱신일을 표시합니다.',
};
// 공개 저장소에는 개인 연락처를 넣지 않습니다. 도메인 전용 문의 메일을 만든 뒤 설정하세요.
export const SITE_EMAIL = '';

export const SITE_LOCALE = 'ko_KR';

// ── 사업자/운영 정보 (푸터·문의 페이지에 표기) ─────────────
export const BUSINESS = {
	name: '생활건강 노트',
	owner: '생활건강 노트 운영팀',
	regNo: '',
	address: '온라인 정보 서비스',
	phone: '',
	email: '',
	hours: '',
	holiday: '',
};

// ── Google AdSense ──────────────────────────────────────────
// 승인 후 발급받은 값만 채우면 광고가 자동 노출됩니다.
// 예: 'ca-pub-1234567890123456'
export const ADSENSE_CLIENT = 'ca-pub-4072314773023730';
// 각 광고 슬롯 ID (승인 후 애드센스에서 생성)
export const ADSENSE_SLOTS = {
	inArticle: '', // 본문 중간
	belowTitle: '', // 제목 아래
	footer: '', // 하단
};

// ── 접속 로그 분석 (방문자 통계) ─────────────────────────────
// 값을 채우면 자동으로 스크립트가 삽입됩니다. 비워두면 아무것도 안 나갑니다.
// ⚠️ 개발 서버(npm run dev)에서는 집계되지 않습니다. 빌드된 사이트에서만 동작합니다.
export const ANALYTICS = {
	// Google Analytics 4 측정 ID — analytics.google.com → 관리 → 데이터 스트림
	// 예: 'G-XXXXXXXXXX'
	ga4Id: '',

	// Cloudflare Web Analytics 토큰 — Cloudflare 대시보드 → Analytics → Web Analytics
	// 쿠키를 쓰지 않아 동의 배너 없이 사용 가능. 예: '1a2b3c4d5e6f...'
	cloudflareToken: '',
};

// ── 사이트 소유확인 코드 ─────────────────────────────────────
// 각 서치콘솔에서 발급받은 content 값만 넣으면 meta 태그가 자동 생성됩니다.
export const SITE_VERIFICATION = {
	google: '', // 구글 서치콘솔
	naver: '', // 네이버 서치어드바이저
	bing: '', // 빙 웹마스터도구 (선택)
};

// ── 카테고리 정의 ────────────────────────────────────────────
export type CategoryKey = 'life' | 'health' | 'policy';

export const CATEGORIES: Record<
	CategoryKey,
	{ name: string; slug: string; description: string; emoji: string }
> = {
	life: {
		name: '생활정보',
		slug: 'life',
		description: '세금과 계약, 금융 사기 예방처럼 한 번 잘못 알면 돈으로 이어지는 생활 행정을 다룹니다.',
		emoji: '🏠',
	},
	health: {
		name: '건강생활',
		slug: 'health',
		description:
			'검진 대상 기준, 수치 판정선, 치료 시기처럼 건강 관리에서 판단이 필요한 지점을 공식 지침으로 확인해 다룹니다.',
		emoji: '💪',
	},
	policy: {
		name: '정책·지원금',
		slug: 'policy',
		description: '지원금의 소득·재산 기준선과 감액 구간, 실제 탈락 사유를 소관 부처 자료로 확인해 다룹니다.',
		emoji: '📋',
	},
};

export const CATEGORY_ORDER: CategoryKey[] = ['policy', 'life', 'health'];
