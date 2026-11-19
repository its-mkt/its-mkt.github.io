# its.itket.com (아이티스 포털) 프로젝트 규칙

`https://its.itket.com/` 첫 화면 — 대시보드·홈페이지·업무 도구 링크를 모은 **아이티스 포털** (회사 공용, 대시보드는 마케팅팀이 만듦).
빌드 없는 정적 사이트(HTML 하나 + 링크 목록 JS)이고, GitHub Pages(브랜치 배포)로 나간다.

## 저장소·도메인 (바꾸지 말 것)

- GitHub 저장소 이름은 반드시 **`its-mkt/its-mkt.github.io`** — 조직 대표 Pages 사이트라야 `its.itket.com` 아래 경로가 동작한다.
  로컬 폴더 이름(`its.itket.com`)은 달라도 된다
- `CNAME` 파일(`its.itket.com`)은 GitHub 가 관리한다. 지우거나 고치지 않는다
- 자체 도메인이 없는 다른 저장소의 Pages 는 자동으로 `its.itket.com/<저장소 이름>/` 에서 열린다
  - `/ad-insight/` ← its-mkt/ad-insight (vite base `/ad-insight/`)
  - `/analytics/` ← its-mkt/analytics (해시 라우팅, base `./`)
  - `/on-core-renewal/` ← its-mkt/on-core-renewal (온코어 리뉴얼 시안, 원본은 on-core.co.kr/renewal)
  - 그래서 **이 저장소에 `ad-insight/`, `analytics/`, `on-core-renewal/` 같은 폴더를 만들면 안 된다** (그 경로를 가로챈다)
- DNS: itket.com 은 NHN 네임서버, CNAME `its` → `its-mkt.github.io` (2026-11-13 등록). 고도몰 관리자에선 TXT 만 가능 → 바꿀 일이 있으면 NHN 1:1 문의 (문의 계정은 공개 저장소라 적지 않음 — 담당자에게 확인)

## 파일

| 파일 | 내용 |
|---|---|
| `links.js` | **링크 목록 — 링크 추가·수정은 이 파일만** 고친다 (묶음 `group` → 링크 `items`, 필드 설명은 파일 맨 위 주석) |
| `index.html` | 화면(목록 그리기·검색). 링크를 여기에 직접 쓰지 않는다 |
| `common.css` | 공용 스타일 — 색·간격·모서리 토큰, 기본 리셋, 공용 컴포넌트(`.btn`·`.pill`·`.ico`·`.kbd`·`.ibtn` 아이콘 버튼·`.chip` 칩) — 새 버튼·칩은 이걸 먼저 쓰고 위치·강조색만 덧붙인다. 아이콘 버튼 크기는 토큰 `--ibtn`(28px) — ☆·⌄ 자리 계산도 이 값을 쓴다. index·404 가 함께 쓴다 (404 는 `/common.css` 절대 경로) |
| `icons/` | 카드 아이콘(각 사이트 파비콘·로고, 정사각형 PNG·SVG). `links.js` 의 `logo` 로 연결, 아이티켓은 `logo.png`(IT 마크), 그룹웨어는 그룹웨어 파비콘(/its2/include/common/favicon.ico)을 바꾼 `icons/groupware.png`, 웹메일은 후이즈메일 파비콘(192px)을 받은 `icons/mail.png` |
| `404.html` | 없는 주소 안내 → 포털로 |
| `favicon.png` | 파비콘(512px, 흰 둥근 바탕 — 어두운 탭에서도 보이게). 원본은 회사 로고 PNG 의 여백만 잘라 줄인 것 |
| `logo.png` · `logo-dark.png` | 머리 로고(`.mark`, 256px, 투명 배경) — 다크 모드는 IT 글자만 흰색인 `logo-dark.png` |
| `apple-touch-icon.png` | 휴대폰 홈 화면 아이콘(180px, 흰 바탕) |
| `README.md` | 저장소 소개 |

## 규칙

- **공개 페이지다.** 관리자 화면 주소(고도몰 관리자, Supabase, Apps Script 편집기 등), 비밀번호, 내부 문서·시트 주소는 넣지 않는다
  - 예외: 그룹웨어처럼 회사 사람들이 함께 쓰는 로그인 화면은 넣어도 된다 (사용자 결정 2026-11-13 — 포털은 마케팅팀 전용이 아니라 회사 공용). 이카운트 ERP 로그인(`https://login.ecount.com/`, id `erp`)·급여명세서(`https://pay.ecount.com/`)·고객 포털(`https://c-portal.ecount.com/`) 로그인(같은 카드의 칩)도 같은 예외로 추가 (2026-11-16). 회사 웹메일(후이즈메일) 로그인 `http://w.itket.com/`(id `mail`)도 같은 예외로 추가 (2026-11-19) — https 는 인증서가 `*.whoisworks.com` 이라 맞지 않아 http 로 둔다
  - 예외: 아이티켓 고도몰 관리자 로그인 `https://gdadmin.itket.com/` 은 위험(공개 페이지에 관리자 주소 노출)을 알고 넣기로 함 (사용자 결정 2026-11-13, 고도몰(NHN커머스) 로그인과 용도가 달라 따로 둔다). 2026-11-16 사용자 결정으로 쇼핑몰 4곳 관리자 로그인(gdadmin.itket.com·gdadmin.zbyhp.co.kr·gdadmin.cadkorea.co.kr·gdadmin.on-core.co.kr)을 모두 넣는다 (11-13 의 "온코어 관리자는 두지 않는다"는 철회). 쇼핑몰별 카드를 만들지 않고 `고도몰 관리자` 카드 하나(id `admin`, `login: true`)에 바로 가기 칩(`subLabel: '관리자 로그인'`)으로 둔다. 같은 날 사용자 결정으로 따로 있던 `고도몰` 카드(id `godo`, NHN커머스 통합 관리자 로그인 `accounts.godo.co.kr`)는 없애고 이 카드의 마지막 칩 `통합 관리자` 로 합쳤다 (11-13 의 "따로 둔다"는 철회). 관리자 로그인 첫 화면만 넣고, 그 밖의 관리자·관리자 안쪽 주소는 여전히 넣지 않는다. 그래서 index.html·404.html 의 `<meta name="robots" content="noindex, nofollow">` 는 빼지 않는다
- 같은 포털 안 링크는 경로만(`/ad-insight/`), 바깥 사이트는 `https://` 전체 주소 — 바깥 링크는 화면에서 자동으로 새 탭
- 외부 스크립트는 넣지 않는다 (폰트 CSS 하나만 jsdelivr). 빌드 도구를 들이기 전에 먼저 사용자와 상의한다
- 보기 방식: 목록 위 오른쪽 `.seg` 버튼으로 카드형·리스트형 전환. 기본값은 처음 열 때(고른 적이 없을 때) 휴대폰 폭(767px 이하)이면 리스트형, 그 밖은 카드형 — 회전·창 크기로는 안 바뀐다. 휴대폰 폭 리스트형은 줄을 누르면 바로 열리고 펼치기는 ⌄ 로만('○○ 열기' 칩 숨김, 대신 펼치면 주소 .url 표시), PC 리스트형은 줄을 누르면 펼친다 (사용자 결정 2026-11-16). 리스트형은 `#groups.list` 로 스타일을 나누고, 바로 가기가 있는 줄은 줄을 누르거나 ⌄(`.acc`)를 누르면 줄 아래에 칩을 펼친다(카드에 `.expand`). 카드 주소는 펼친 칩 맨 앞 `.subs-self`('○○ 열기', 칩 중에서 골라야 하는 카드는 links.js `self: false` 로 뺌), Ctrl·Shift 클릭과 검색 Enter 는 바로 이동, 고른 값은 localStorage `its-portal-view` 에 기억
- 즐겨찾기: 카드 오른쪽 위 ☆(`.star`, 준비 중 카드는 없음)를 누르면 맨 위 `즐겨찾기` 묶음(`#fav`·`.sec.fav`)에 고른 순서대로 사본이 모인다. 저장은 localStorage `its-portal-fav`(카드 id 배열)뿐이라 DB 없음 — 브라우저마다 따로. 사본 카드는 id 속성 없이 원래 묶음 색(`.t1`~`.t4`)을 붙이고, 검색 중엔 묶음을 숨긴다. 링크 id `fav` 는 쓰지 않는다 (2026-11-16)
- 버튼·태그(`.btn`·`.pill`·`.kbd`·바로 가기 칩 등)의 높이는 `height` 로 정하고 위아래 `padding` 은 0, 좌우 padding 만 쓴다 (예: 칩 24px, 알약·키 20px, 버튼 40/48px). 터치 화면(`pointer: coarse`)이거나 휴대폰 폭(767px 이하)이면 칩 32px·글자 14px(작은 글자 `--fs-2xs` 는 12px), 누르는 곳 넓히기(`::after`)는 터치 화면에서만, 휴대폰 폭(767px 이하)에선 카드 안쪽 여백 `--card-pad` 16→12px (리스트형 줄 좌우 여백·☆·⌄ 위치도 이 값을 따라감)·카드 이름 `.name` 18→16px, 아이콘 버튼·더보기·로고는 보이는 크기는 두고 `::after` 로 누르는 곳만 44px 안팎으로 넓힌다. 호버 효과는 `@media (hover: hover)` 안에만 (휴대폰에서 누른 뒤 남지 않게)
- 간격·크기는 짝수 단위만: 2/4/8/12/16/20/24/28/32/40/48/64px (`common.css` 의 `--s-*`·`--r-*` 토큰 사용). 글자 크기와 1px 테두리는 예외, 홀수 크기는 쓰지 않는다 (사용자 결정 2026-11-13)
- 화면 폭 기준(브레이크포인트)은 기기 단위 767/768/1024/1280 만 쓴다 — ~767 휴대폰(1열·휴대폰 크기) · 768 태블릿(2열) · 1024 작은 PC(리스트형 주소 보임) · 1280 PC(4열). 열은 짝수(1·2·4)만 (사용자 결정 2026-11-16)
- 색은 `:root` 토큰으로, 다크 모드는 `prefers-color-scheme` 로 같이 맞춘다. 휴대폰 폭(약 360px)에서 가로 스크롤이 생기지 않게 한다
- 이중 클래스: `links.js` 의 짧은 `id` 가 기본 클래스와 함께 붙는다 — 섹션 `.sec.<id>`, 카드 격자 `.grid.<id>`, 카드 `.card.<id>` (예: `.sec.dash`, `.card.ads`). 카드 상태 `.in`/`.out`/`.soon`/`.login`/`.sub`, 즐겨찾기 버튼 `.star`. id 는 짧게, 서로·기존 클래스와 겹치지 않게, 한 번 정하면 바꾸지 않는다
- 새 서비스를 만들면: 그 저장소 Pages 를 켜고(사용자 도메인 비움) → 여기 `links.js` 에 한 줄 추가

## 확인·배포

- 로컬 확인: `index.html` 을 브라우저로 바로 열어도 된다(`links.js` 를 script 로 읽어 file:// 에서도 동작). 같은 포털 경로 링크는 로컬에선 안 열린다
- 배포: `main` 에 push 하면 Pages 가 1분 안에 반영한다 (PR 없이 바로 push 해도 되는 작은 저장소 — 단, 사용자가 배포를 요청했을 때만)
- 반영 확인: `curl -s https://its.itket.com/ | grep '<title>'`, 브라우저에서 링크·검색·다크 모드 확인
- 커밋 메시지: Conventional Commits, 한국어 요약
