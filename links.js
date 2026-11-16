/**
 * 아이티스 포털 링크 목록 — 이 파일만 고치면 화면에 반영된다 (index.html 은 그대로 둔다).
 *
 * 묶음(group) 하나에 링크(items) 여러 개.
 *   id   : 짧은 영문 이름표 (묶음·링크 모두, 서로 겹치지 않게) — 화면에서 기본 클래스와 함께 붙는다
 *          섹션 .sec.<id> · 카드 격자 .grid.<id> · 카드 .card.<id>   예) .sec.dash  .grid.dash  .card.ads
 *          카드 상태: .in(포털 안) / .out(바깥 사이트) / .soon(준비 중) / .login(로그인 필요) / .sub(바로 가기 있음)
 *          한 번 정한 id 는 바꾸지 않는다 (즐겨찾기가 id 로 저장된다). 'fav' 는 즐겨찾기 묶음이 쓰므로 쓰지 않는다
 *   name : 화면에 크게 보이는 이름
 *   url  : 같은 포털 안이면 '/ad-insight/' 처럼 경로만, 바깥 사이트면 https:// 전체 주소
 *   desc : 한 줄 설명
 *   logo : 카드 아이콘 이미지 (선택, 정사각형 PNG·SVG — icons/ 폴더). 없거나 못 불러오면 이름 첫 글자를 보여 준다
 *   tags : 검색에 함께 걸릴 말 (선택)
 *   sub  : 바로 가기 하위 링크 [이름, 경로] (선택) — 최대 6개, 자주 찾는 순서로 (쇼핑몰은 견적 페이지가 맨 앞). 카드 폭에 한 줄로 들어가는 만큼 늘 보이고,
 *          둘째 줄은 카드에 마우스를 올리면(휴대폰은 '더보기') 펼쳐진다. 펼쳐도 2줄까지라 셋째 줄로 넘치는 것과
 *          7번째부터는 화면에 안 나온다 (중요한 것을 앞에 둔다).
 *          이름은 짧게 줄이지 않아도 된다 (예: '매체 광고비', '서버 · 주변장치')
 *          주소를 비우면(['온코어', '']) 누를 수 없는 '준비 중' 칩이 된다
 *   self : false 면 리스트형에서 펼쳤을 때 맨 앞 '○○ 열기' 칩을 뺀다 (선택) — 칩 중 하나를 골라야 하는 카드(이카운트·관리자·광고 매체)
 *   subLabel: 바로 가기 칩 위 제목 (선택, 기본 '자주 찾는 페이지')
 *   soon : true 면 '준비 중' — 누를 수 없는 흐린 카드, url·sub 없어도 된다 (선택)
 *   login: true 면 '로그인 필요' 표시 (선택). sub 를 적으면 바로 가기도 나온다 (고도몰 관리자 카드의 쇼핑몰별 관리자처럼)
 *
 * 묶음 아이콘 icon (선택): 'chart' | 'store' | 'office' | 'draft' — 없으면 링크 모양
 *
 * 공개 페이지다 — 관리자 화면 주소, 비밀번호, 내부 문서 주소는 넣지 않는다.
 * (예외: 그룹웨어 같은 회사 공용 로그인 화면, 그리고 사용자가 정한 '고도몰 관리자' 카드 하나(NHN커머스 통합 관리자 + 쇼핑몰 4곳 관리자 로그인 칩) — 모두 login: true. 자세한 건 CLAUDE.md)
 */
window.PORTAL_LINKS = [
  {
    id: 'dash',
    group: '대시보드',
    icon: 'chart',
    note: '광고 · 사이트 성과 분석',
    items: [
      {
        id: 'ads',
        logo: 'icons/ad-insight.svg',
        name: '광고 인사이트',
        url: '/ad-insight/',
        desc: '매체 광고비 · 견적 · 구매 통계',
        tags: 'ad-insight 광고 견적 네이버 구글 CPA 종합 요약 매체 광고비 견적 상세 카테고리 효율 키워드 소재 구매 상세 기기별 통계 아이티켓 itket 온코어 oncore',
        subLabel: '사이트',
        sub: [
          ['아이티켓', '/ad-insight/itket'],
          ['온코어', ''],
        ],
      },
      {
        id: 'ga',
        name: '사이트 분석',
        url: '/analytics/',
        desc: '방문 · 유입 · 전환',
        tags: 'analytics 애널리틱스 GA4 방문 유입 전환 종합 요약 전환 분석 페이지 상품 URL 분석 페이지 GA4 아이티켓 itket 온코어 oncore',
        subLabel: '사이트',
        sub: [
          ['아이티켓', '/analytics/'],
          ['온코어', ''],
        ],
      },
    ],
  },
  {
    id: 'home',
    group: '홈페이지',
    icon: 'store',
    note: '운영 중인 쇼핑몰',
    items: [
      { id: 'itket', logo: 'logo.png', name: '아이티켓', url: 'https://www.itket.com/', desc: 'HP 워크스테이션 · GPU 서버', tags: 'itket 아이티켓 GPU AI 서버 워크스테이션 견적 요청 서버 견적',
        sub: [
          ['견적 요청', 'https://www.itket.com/dbk/dbk_estimate_list.php?page=1&ptype=e'],
          ['GPU · AI 서버', 'https://www.itket.com/gpu/gpu_main_intro.php'],
          ['워크스테이션', 'https://www.itket.com/ws/ws_intro.php'],
          ['서버 · 주변장치', 'https://www.itket.com/server/server_intro.php'],
        ],
      },
      { id: 'zbyhp', logo: 'icons/zbyhp.png', name: 'zbyhp', url: 'https://www.zbyhp.co.kr/', desc: 'HP Z 워크스테이션 · 서버', tags: 'zbyhp 지비와이 Z워크스테이션 HP Z 워크스테이션 서버 ML DL 모니터 랙 서버 견적 문의 타워 랙 모니터',
        sub: [
          ['견적 요청', 'https://www.zbyhp.co.kr/dbk/estimate_register.php'],
          ['워크스테이션', 'https://www.zbyhp.co.kr/goods/goods_list.php?cateCd=004'],
          ['랙 서버', 'https://www.zbyhp.co.kr/goods/goods_list.php?cateCd=003'],
          ['타워 서버', 'https://www.zbyhp.co.kr/goods/goods_list.php?cateCd=002'],
        ],
      },
      { id: 'cad', logo: 'icons/cadkorea.png', name: '캐드코리아', url: 'https://www.cadkorea.co.kr/', desc: 'GstarCAD 판매 · 평가판', tags: 'cadkorea 캐드 GstarCAD 지스타캐드 DWG 평가판 다운로드 견적 구매 상담 구매 상담 DWG 호환 CAD',
        sub: [
          ['견적 요청', 'https://www.cadkorea.co.kr/dbk/dbk_estimate_list.php'],
          ['평가판 다운로드', 'https://www.cadkorea.co.kr/its/its_downprod_list.php'],
          ['GstarCAD', 'https://www.cadkorea.co.kr/goods/goods_list.php?cateCd=001'],
          ['고객 성공사례', 'https://www.cadkorea.co.kr/board/list.php?bdId=customersuccess'],
        ],
      },
      { id: 'oncore', logo: 'icons/oncore.png', name: '온코어', url: 'https://www.on-core.co.kr/', desc: 'AI 인프라 설계 · 구축', tags: 'oncore on-core 온코어 서버 워크스테이션 데스크탑 데스크톱 견적 요청 전문기업',
        sub: [
          ['견적 요청', 'https://www.on-core.co.kr/dbk/dbk_estimate_list.php'],
          ['서버', 'https://www.on-core.co.kr/goods/goods_list.php?cateCd=003'],
          ['데스크탑', 'https://www.on-core.co.kr/goods/goods_list.php?cateCd=005'],
          ['노트북', 'https://www.on-core.co.kr/goods/goods_list.php?cateCd=006'],
        ],
      },
    ],
  },
  {
    id: 'tools',
    group: '업무 도구',
    icon: 'office',
    note: '업무에 쓰는 사이트',
    items: [
      { id: 'gw', logo: 'icons/groupware.png', name: '그룹웨어', url: 'https://itketweb.cafe24.com/its/', desc: '사내 업무일지 · 회의 자료', tags: 'groupware 그룹웨어 업무일지 결재 회의 사내 아이티스정보통신', login: true },
      { id: 'erp', logo: 'icons/ecount.png', name: '이카운트 ERP', url: 'https://login.ecount.com/', desc: '재고 · 회계 · 판매 · 급여', self: false, tags: 'ecount 이카운트 ERP erp 재고 회계 판매 구매 매출 매입 거래처 전표 급여 급여명세서 명세서 월급 userpay pay 페이 고객 포털 고객포털 거래처 포털 c-portal cportal 견적 미수', login: true,
        subLabel: '로그인',
        sub: [
          ['ERP', 'https://login.ecount.com/'],
          ['급여명세서', 'https://pay.ecount.com/'],
          ['고객 포털', 'https://c-portal.ecount.com/'],
        ],
      },
      { id: 'admin', logo: 'icons/godo.png', name: '고도몰 관리자', url: 'https://gdadmin.itket.com/', desc: '쇼핑몰 관리자 로그인', self: false, tags: 'gdadmin admin 관리자 어드민 통합관리자 통합 관리자 고도몰 godo godomall NHN커머스 nhn commerce 쇼핑몰 솔루션 가이드 1:1 문의 공지 앱 스토어 아이티켓 itket 지비와이 zbyhp 캐드코리아 cadkorea 온코어 oncore on-core 상품 주문 회원', login: true,
        subLabel: '관리자 로그인',
        sub: [
          ['itket', 'https://gdadmin.itket.com/'],
          ['zbyhp', 'https://gdadmin.zbyhp.co.kr/'],
          ['cadkorea', 'https://gdadmin.cadkorea.co.kr/'],
          ['oncore', 'https://gdadmin.on-core.co.kr/'],
          ['통합 관리자', 'https://accounts.godo.co.kr/login?continue=https://www.godo.co.kr/etc/login/gateway.gd?requestURL=https%3A%2F%2Fwww.godo.co.kr%2F'],
        ],
      },
      { id: 'media', name: '광고 매체', url: 'https://ads.google.com/nav/login', desc: '구글 · 네이버 · OpenAI 광고 관리', self: false, tags: 'media 광고 매체 광고 관리자 ads manager 구글 광고 google ads 애즈 네이버 광고 naver 네이버애즈 naver ads 검색광고 searchad 파워링크 openai 오픈ai chatgpt 챗gpt 광고 캠페인 키워드', login: true,
        subLabel: '광고 관리자',
        sub: [
          ['구글 광고', 'https://ads.google.com/nav/login'],
          ['네이버 광고', 'https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fads.naver.com%2F'],
          ['OpenAI 광고', 'https://ads.openai.com/auth/login'],
        ],
      },
    ],
  },
  {
    id: 'draft',
    group: '시안 · 미리보기',
    icon: 'draft',
    note: '작업 중인 화면',
    items: [
      { id: 'renewal', logo: 'icons/oncore.png', name: '온코어 리뉴얼 제안서', url: '/on-core-renewal/renewal-plan.html', desc: '홈페이지 리뉴얼 기획안 · 시안', tags: 'oncore 리뉴얼 시안 제안서 실행 계획 디자인 시안',
        sub: [
          ['제안서', '/on-core-renewal/'],
          ['디자인 시안', '/on-core-renewal/renewal-plan.html'],
          ['실행 계획', '/on-core-renewal/project-plan.html'],
        ],
      },
    ],
  },
];
