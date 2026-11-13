/**
 * 아이티스 포털 링크 목록 — 이 파일만 고치면 화면에 반영된다 (index.html 은 그대로 둔다).
 *
 * 묶음(group) 하나에 링크(items) 여러 개.
 *   name : 화면에 크게 보이는 이름
 *   url  : 같은 포털 안이면 '/ad-insight/' 처럼 경로만, 바깥 사이트면 https:// 전체 주소
 *   desc : 한 줄 설명
 *   tags : 검색에 함께 걸릴 말 (선택)
 *   sub  : 바로 가기 하위 링크 [이름, 경로] (선택) — 최대 3개, 자주 가는 페이지만 (4번째부터는 화면에 안 나온다)
 *   login: true 면 '로그인 필요' 표시 (선택)
 *
 * 묶음 아이콘 icon (선택): 'chart' | 'store' | 'office' | 'draft' — 없으면 링크 모양
 *
 * 공개 페이지다 — 관리자 화면 주소, 비밀번호, 내부 문서 주소는 넣지 않는다.
 * (예외: 회사 사람들이 함께 쓰는 그룹웨어 같은 공용 로그인 화면은 넣어도 된다)
 */
window.PORTAL_LINKS = [
  {
    group: '대시보드',
    icon: 'chart',
    note: '마케팅팀이 만든 서비스',
    items: [
      {
        name: '광고 인사이트',
        url: '/ad-insight/',
        desc: '매체 광고비 · 견적 · 카테고리 효율 · 키워드 · 구매 · 기기별 통계',
        tags: 'ad-insight 광고 견적 네이버 구글 CPA 종합 요약 매체 광고비 견적 상세 카테고리 효율 키워드 소재 구매 상세 기기별 통계',
        sub: [
          ['요약', '/ad-insight/itket'],
          ['광고비', '/ad-insight/itket/ads'],
          ['견적', '/ad-insight/itket/quotes'],
        ],
      },
      {
        name: '사이트 분석',
        url: '/analytics/',
        desc: '아이티켓 방문 · 유입 · 페이지 · 전환 (GA4)',
        tags: 'analytics 애널리틱스 GA4 방문 유입 전환 종합 요약 전환 분석 페이지 상품 URL 분석',
        sub: [
          ['요약', '/analytics/#overview'],
          ['전환', '/analytics/#conversion'],
          ['상품', '/analytics/#content'],
        ],
      },
    ],
  },
  {
    group: '홈페이지',
    icon: 'store',
    note: '운영 중인 쇼핑몰',
    items: [
      { name: '아이티켓', url: 'https://www.itket.com/', desc: 'HP 워크스테이션 · 서버 · GPU 서버 견적', tags: 'itket 아이티켓 GPU AI 서버 워크스테이션 견적 요청',
        sub: [
          ['GPU 서버', 'https://www.itket.com/gpu/gpu_main_intro.php'],
          ['워크스테이션', 'https://www.itket.com/ws/ws_intro.php'],
          ['견적', 'https://www.itket.com/dbk/dbk_estimate_list.php?page=1&ptype=e'],
        ],
      },
      { name: 'Z워크스테이션', url: 'https://www.zbyhp.co.kr/', desc: 'HP Z 워크스테이션 · 서버(타워·랙) · 모니터', tags: 'zbyhp 지비와이 HP Z 워크스테이션 서버 ML DL 모니터 랙 서버 견적 문의',
        sub: [
          ['워크스테이션', 'https://www.zbyhp.co.kr/goods/goods_list.php?cateCd=004'],
          ['랙 서버', 'https://www.zbyhp.co.kr/goods/goods_list.php?cateCd=003'],
          ['견적', 'https://www.zbyhp.co.kr/dbk/estimate_register.php'],
        ],
      },
      { name: '캐드코리아', url: 'https://www.cadkorea.co.kr/', desc: 'GstarCAD 판매 · 평가판 · 구매 상담 (DWG 호환 CAD)', tags: 'cadkorea 캐드 GstarCAD 지스타캐드 DWG 평가판 다운로드 견적 구매 상담',
        sub: [
          ['GstarCAD', 'https://www.cadkorea.co.kr/goods/goods_list.php?cateCd=001'],
          ['평가판', 'https://www.cadkorea.co.kr/its/its_downprod_list.php'],
          ['상담', 'https://www.cadkorea.co.kr/dbk/dbk_estimate_list.php'],
        ],
      },
      { name: '온코어', url: 'https://www.on-core.co.kr/', desc: 'AI 인프라 설계 · 구축 전문기업', tags: 'oncore on-core 온코어 서버 워크스테이션 견적 요청',
        sub: [
          ['서버', 'https://www.on-core.co.kr/goods/goods_list.php?cateCd=003'],
          ['워크스테이션', 'https://www.on-core.co.kr/goods/goods_list.php?cateCd=004'],
          ['견적', 'https://www.on-core.co.kr/dbk/dbk_estimate_list.php'],
        ],
      },
    ],
  },
  {
    group: '사내 도구',
    icon: 'office',
    note: '회사 공용',
    items: [
      { name: '그룹웨어', url: 'https://itketweb.cafe24.com/its/', desc: '아이티스정보통신 그룹웨어 · 업무일지 · 회의 자료', tags: 'groupware 그룹웨어 업무일지 결재 회의 사내', login: true },
    ],
  },
  {
    group: '시안 · 미리보기',
    icon: 'draft',
    note: '작업 중인 화면',
    items: [
      { name: '온코어 리뉴얼 제안서', url: '/on-core-renewal/', desc: '온코어 홈페이지 리뉴얼 기획안 · 시안', tags: 'oncore 리뉴얼 시안 제안서 실행 계획 디자인 시안',
        sub: [
          ['제안서', '/on-core-renewal/'],
          ['실행 계획', '/on-core-renewal/project-plan.html'],
          ['시안', '/on-core-renewal/renewal-plan.html'],
        ],
      },
    ],
  },
];
