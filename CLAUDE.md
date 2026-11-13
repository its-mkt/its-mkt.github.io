# its.itket.com (아이티스 포털) 프로젝트 규칙

`https://its.itket.com/` 첫 화면 — 대시보드·홈페이지·사내 도구 링크를 모은 **아이티스 포털** (회사 공용, 대시보드는 마케팅팀이 만듦).
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
| `404.html` | 없는 주소 안내 → 포털로 |
| `favicon.png` | 아이티스 로고(512px, 흰 둥근 바탕) — 파비콘과 머리 로고(`.mark`) 공용. 원본은 회사 로고 PNG 의 여백만 잘라 줄인 것 |
| `apple-touch-icon.png` | 휴대폰 홈 화면 아이콘(180px, 흰 바탕) |
| `README.md` | 저장소 소개 |

## 규칙

- **공개 페이지다.** 관리자 화면 주소(고도몰 관리자, Supabase, Apps Script 편집기 등), 비밀번호, 내부 문서·시트 주소는 넣지 않는다
  - 예외: 그룹웨어처럼 회사 사람들이 함께 쓰는 로그인 화면은 넣어도 된다 (사용자 결정 2026-11-13 — 포털은 마케팅팀 전용이 아니라 회사 공용)
- 같은 포털 안 링크는 경로만(`/ad-insight/`), 바깥 사이트는 `https://` 전체 주소 — 바깥 링크는 화면에서 자동으로 새 탭
- 외부 스크립트는 넣지 않는다 (폰트 CSS 하나만 jsdelivr). 빌드 도구를 들이기 전에 먼저 사용자와 상의한다
- 색은 `:root` 토큰으로, 다크 모드는 `prefers-color-scheme` 로 같이 맞춘다. 휴대폰 폭(약 360px)에서 가로 스크롤이 생기지 않게 한다
- 새 서비스를 만들면: 그 저장소 Pages 를 켜고(사용자 도메인 비움) → 여기 `links.js` 에 한 줄 추가

## 확인·배포

- 로컬 확인: `index.html` 을 브라우저로 바로 열어도 된다(`links.js` 를 script 로 읽어 file:// 에서도 동작). 같은 포털 경로 링크는 로컬에선 안 열린다
- 배포: `main` 에 push 하면 Pages 가 1분 안에 반영한다 (PR 없이 바로 push 해도 되는 작은 저장소 — 단, 사용자가 배포를 요청했을 때만)
- 반영 확인: `curl -s https://its.itket.com/ | grep '<title>'`, 브라우저에서 링크·검색·다크 모드 확인
- 커밋 메시지: Conventional Commits, 한국어 요약
