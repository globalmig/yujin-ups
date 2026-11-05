# 유진전원시스템 디자인 시스템

현재 코드(`app/`, `components/`, `app/globals.css`)와 리뉴얼 시안(`docs/yujin-main.html`)을 기준으로 정리한 디자인 시스템입니다. 시안의 루트 팔레트(`--navy --blue --ink --muted --line --surface`)가 기준이며, 코드에만 존재하고 시안에는 없는 색(`--navy-dark`, `--blue-light`)과 `app/contact`·`app/company`·`ProductSidebar.tsx`의 하드코딩 색(`#1a4fa0`, `#009fe8` 등)은 **드리프트(이탈)**로 간주해 신규 작업에서 제외합니다.

## 1. 디자인 방향

- **목적/방문자**: UPS·AVR·주파수변환기·배터리 제품 소개 + 견적 전환. 기업/공공기관 구매·설비 담당자(B2B) 대상.
- **인상**: "30년 경력의 중후한 전문 제조사" — 트렌디한 스타트업 톤이 아닌 안정감·신뢰감.
- **키워드(5)**: 신뢰(수치 기반 실적) · 전문성(스펙·도식 중심) · 안정감(대칭 그리드, 절제된 모션) · 명료함(eyebrow+title+description 반복) · 산업적 중후함(네이비/화이트 섹션 교차).
- **가져오지 않을 것**: 보라/핑크 그라디언트, 글래스모피즘, 네온 글로우, 블롭 장식, 캐주얼한 카피, 스톡 일러스트.
- **피할 것**: 모든 섹션을 "아이콘+제목+설명" 카드 3열로만 채우는 단조로움 — 타임라인(절차), 표(스펙 비교) 등으로 변주할 것. 실제 제품/현장 사진만 사용.

## 2. 디자인 토큰

색상은 시안(`docs/yujin-main.html` `:root`)과 동일한 **6개 핵심 토큰**만 사용합니다. 그 외 색은 추가하지 않습니다.

| 토큰 | 값 | 클래스 | 용도 |
|---|---|---|---|
| `--navy` | `#082d62` | `text-navy` `bg-navy` | 헤딩, 다크 배경 |
| `--blue` (Primary) | `#104b9d` | `bg-blue` `text-blue` | 버튼, 링크, 강조 숫자 |
| `--ink` (Text) | `#171b22` | `text-ink` | 본문 텍스트 |
| `--muted` (보조 텍스트) | `#626a75` | `text-muted` | 설명/캡션 |
| `--line` (Border) | `#e5e8ed` | `border-line` | 카드·구분선 테두리 |
| `--surface` (보조 배경) | `#f5f7fa` | `bg-surface` | 섹션 교차 배경 |

- **Hover 전용 파생색**: 블루 계열 hover는 `#073675`(blue-dark) 하나만 사용(시안의 버튼/CTA hover와 동일). 별도 토큰 변수로 두지 않고 `hover:` 유틸에만 적용.
- **다크 섹션 배경**: 시안은 단일 "navy-dark" 토큰 대신 섹션마다 그라디언트(`#062a59→#0c3a78`, `#082c5d`, `#082e68` 등)를 직접 지정합니다. 코드의 `--navy-dark(#051b3d)`는 시안에 없는 색이므로 **신규 작업에서는 제거**하고, 다크 섹션은 `--navy` 또는 시안과 동일한 그라디언트를 그대로 사용합니다.
- **제거 대상(드리프트)**: `--blue-light(#4d8ef0)`는 시안에 없는 색 — 사용 중인 곳(ProductDetailHero, ProductFeatureBar)은 리뉴얼 시 `--blue` 또는 흰색 텍스트로 대체. `#1a4fa0`/`#009fe8`/`#3d7bd4`/Tailwind 기본 `gray-*`(contact 폼, company, ProductSidebar)도 전부 위 6개 토큰으로 교체 대상.
- **흰색 알파 단계**: 다크 배경 위 계층 구분은 `white/10~85` 알파값 단계로만 처리(별도 색 추가 금지).
- **폰트**: Noto Sans KR, 굵기 400/500/700 중심(300은 거의 미사용). `word-break: keep-all` 전역 유지.
- **타이포 스케일**: Hero H1 `text-3xl md:text-5xl font-bold` / Section H2 `text-2xl md:text-3xl font-bold` / 카드 제목 `text-sm md:text-base font-bold` / 본문 `text-sm md:text-base` / eyebrow `text-xs font-bold tracking-[0.25em] uppercase`.
- **간격**: 섹션 `py-16 md:py-24`, 제목 하단 `mb-10 md:mb-14`, 그리드 간격 `gap-4 md:gap-5`, 컨테이너 패딩 `px-6 md:px-10`.
- **모서리/그림자/전환**: 버튼 `rounded`, 카드 `rounded-md`/`rounded-lg`, 배지/원형 `rounded-full`. 기본 그림자 `shadow-sm`, hover `shadow-lg`. 전환은 `transition-colors` 또는 `transition-all duration-200~300`, 카드 hover는 `-translate-y-1 hover:shadow-lg`.

## 3. 레이아웃 · 반응형

- **컨테이너**: `Container` 컴포넌트 기준 `max-w-360(1440px) mx-auto px-6 md:px-10`. 폼/텍스트 중심 페이지는 좁게(`max-w-220~275`).
- **그리드**: 모바일 2열 → sm 3열(선택) → lg 4~5열이 기본. 2단 split(강점/문의 등)은 `grid-cols-1 lg:grid-cols-2`.
- **헤더**: `fixed` 상단, 높이 약 60px, `shadow-md`, PC 가로 내비(제품소개 hover 드롭다운) / 모바일 햄버거→풀스크린 메뉴(`lg` 기준 전환).
- **푸터**: `bg-navy` 톤, 로고+사업자정보 1줄+저작권 1줄, 항상 다크.
- **Hero**: 메인은 배경 사진+화이트 그라디언트 오버레이, 서브 카테고리 히어로는 네이비 그라디언트. 서브페이지 공통 히어로(`PageHero`)는 `h-80 md:h-105`, 이미지 `object-cover` + `bg-black/45`.
- **이미지**: 배경/현장 사진은 `object-cover`, 투명 배경 제품 PNG는 `object-contain` + 패딩.

## 4. 공통 컴포넌트

- **Button**: `primary`(bg-blue) / `outline`(border-blue) / `white`(다크 배경용) 3종, 공통 `min-h-12 px-7 rounded font-bold text-sm`.
- **SectionTitle**: `eyebrow(옵션) → h2 title → description(옵션)`, 항상 중앙 정렬, `light` prop으로 다크 배경 대응.
- **Card**: `bg-white border border-line rounded-md|lg` + 이미지 + 텍스트, hover 시 `-translate-y-1 hover:shadow-lg`, 우하단 원형 화살표 배지가 있는 경우 hover에 색 반전.
- **Badge**: 별도 컴포넌트 없음 — 원형 아이콘 배지(`rounded-full bg-blue/10 text-blue`) 패턴으로 통일.
- **Accordion(FAQ)**: `border-line rounded-md` 카드, `grid-rows-[0fr]↔[1fr]` 높이 애니메이션, `aria-expanded` 적용.
- **Breadcrumb**: `PageHero` 내장, `HOME › 상위 › 현재`, 현재 항목만 링크 없음.
- **Form**: 현재 `app/contact` 폼은 하드코딩 색/각진 보더의 레거시 패턴 — 리뉴얼 시 2번 토큰(`--surface` `--blue` `--line`)과 기존 라운드·포커스 컨벤션으로 교체 필요.
- **Tabs/Modal/Pagination**: 미구현. 추가 시 위 토큰과 카드/버튼 컨벤션을 그대로 따를 것(별도 색 신설 금지).

## 5. 페이지별 구성

- **메인**: Hero → StatsBar(실적 수치) → WhyUs(차별점) → Solutions(용도별 제품) → Projects(실적 캐러셀) → Contact CTA. "신뢰→차별점→탐색→증명→전환" 순서 유지.
- **서브페이지 공통**: `PageHero`(영문 eyebrow + 국문 title + breadcrumb)로 시작, 본문은 `py-16 md:py-24` 섹션 교차(`bg-white`/`bg-surface`), 하단은 항상 Contact CTA로 종료.
- **제품소개**: 목록은 용량별 카드 그리드, 카테고리 상세는 Hero(다크)→특징 바(다크)→차별점→적용분야(다크)→라인업(surface) 순서.
- **CTA 위계**: 1차(Header 고정 "견적문의") > 2차(Hero 내부 primary+outline) > 3차(페이지 하단 Contact 섹션, 전화/이메일 즉시 연결).
- **유지 규칙**: `PageHero` 구조, `SectionTitle` 3단 구조, 섹션 리듬(`py-16 md:py-24`), 토큰 색상, 카드 hover 패턴은 모든 페이지에서 고정. 그리드 열 수·정보 제시 방식(카드/표/타임라인)은 콘텐츠에 맞게 자유.

## 6. 인터랙션 · 접근성

- **모션**: hover는 색상/그림자 전환(150~300ms), 아코디언/드롭다운은 높이 애니메이션, 앵커 섹션은 `scroll-mt-20` + 전역 `scroll-behavior: smooth`.
- **키보드/포커스**: 네이티브 `<a>/<button>` 사용으로 기본 포커스는 가능하나, 폼 입력에 `focus-visible:ring` 등 명확한 포커스 링이 없음 — 리뉴얼 시 추가 필요. 드롭다운(헤더/ProductSidebar)에 `aria-expanded`/`aria-haspopup` 보강 필요.
- **대비/대체텍스트**: 다크 배경 위 `text-white/60` 같은 저알파 텍스트는 대비 확인 필요. 이미지 `alt`는 정보성(구체적 설명) vs 장식성(`alt=""`) 구분을 계속 유지.
- **`prefers-reduced-motion`**: 현재 미구현 — 전역 CSS에 모션 감소 가드 추가 권장.
- **터치 영역**: 버튼은 `min-h-12`(48px)로 충족. 헤더 햄버거(40px), 캐러셀 화살표, 폼의 좁은 분할 입력은 44px 기준보다 작아 리뉴얼 시 확대 검토.
- **점검 체크리스트**: 하드코딩 색 대신 토큰 클래스 사용 여부 / 섹션 패딩·`SectionTitle` 일관성 / 카드·버튼 hover 패턴 재사용 / 모바일·태블릿·데스크톱 3뷰포트 확인 / 이미지 alt / 키보드 Tab 순서.
