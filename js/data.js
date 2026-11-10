/* =========================================================
   최예지 포트폴리오 — 내용 데이터
   ---------------------------------------------------------
   글, 이미지 경로, 영상 링크처럼 자주 바꾸는 내용은 모두 여기에 있어요.
   디자인(색, 크기)은 css/style.css, 동작은 js/main.js에 있어요.

   1. 공통 정보 (이메일)
   2. 분홍 세계 — 에이블리
   3. 파랑 세계 — 포켓몬 챔피언스
   ========================================================= */


/* ===== 1. 공통 정보 ===== */
var SITE = {
  email: "artj0@naver.com",

  /* 프로필: 각 세계 맨 아래 프로필 카드와 입구의 프로필 창에 함께 쓰여요 */
  profile: {
    name: "최예지",
    info: "1998년생 · 여성",
    role: "콘텐츠 마케터",
    intro: "한 줄 소개는 곧 채워질 자리예요",          /* 한 줄 자기소개 */
    photo: "images/profile/character.webp",            /* 프로필 카드 캐릭터 */
    careers: [                                         /* [기간, 회사 · 직무, 업무, 성과] — 성과가 없으면 "" */
    ["2025.03 – 2026.05", "연세백퍼센트병원 · 홍보과",
     "블로그 기획·운영과 SEO, SNS·유튜브 기획·제작, 온·오프라인 홍보물 디자인, 외부 대행사 콘텐츠 QA",
     "신규 블로그 6개월 만에 월 방문자 3,800명, 내원·예약 전환율 약 20% 상승, 블로그 조회수 약 2배 증가"],
    ["2024.04 – 2025.01", "㈜HUC 해움메디 · 영상디자인팀",
     "병·의원 유튜브 정보성 영상 촬영·편집, 디지털 사이니지(DID) 모션그래픽, 광고 디자인",
     ""],
    ["2022.09 – 2023.09", "㈜카피바라 · 콘텐츠기획팀",
     "유튜브 채널 '타이거팁' 개설·기획·제작, 국제문화교류진흥원(IICE) 정부지원사업 협업, 인쇄물 디자인",
     "개설 3개월 만에 구독자 400명, 단일 영상 5만 회·3만 회 조회 달성"]
  ]
  }
};


/* ===== 2. 분홍 세계 — 에이블리 ===== */
var PINK = {
  title: "에이블리에서 입어봐!",
  subtitle: "AI 피팅룸 서비스 광고 · 50초 디지털 광고",

  /* 영상: 유튜브면 영상 ID (주소 v= 뒤 부분), mp4면 파일 경로. 비워 두면 안내 문구가 나와요
     예) video: "abc123XYZ"   또는   video: "videos/ably.mp4" */
     video: "videos/ably.mp4",
     thumbnail: "images/thumbnails/ably.jpg",

  /* 띠지 장면: 이미지 경로와 아래 표시되는 시간. 줄을 더하거나 지우면 장 수가 바뀌어요 */
  scenes: [
    ["images/scenes/ably/01.jpg", "0:00"],
    ["images/scenes/ably/02.jpg", "0:02"],
    ["images/scenes/ably/03.jpg", "0:06"],
    ["images/scenes/ably/04.jpg", "0:15"],
    ["images/scenes/ably/05.jpg", "0:19"],
    ["images/scenes/ably/06.jpg", "0:24"],
    ["images/scenes/ably/07.jpg", "0:28"],
    ["images/scenes/ably/08.jpg", "0:29"],
    ["images/scenes/ably/09.jpg", "0:35"],
    ["images/scenes/ably/10.jpg", "0:38"],
    ["images/scenes/ably/11.jpg", "0:40"],
    ["images/scenes/ably/12.jpg", "0:43"],
    ["images/scenes/ably/13.jpg", "0:45"]
  ],

  /* 기획서 페이지 이미지 (순서대로) */
  docs: [
    "images/docs/ably/cover.jpg",
    "images/docs/ably/01.jpg", "images/docs/ably/02.jpg", "images/docs/ably/03.jpg",
    "images/docs/ably/04.jpg", "images/docs/ably/05.jpg", "images/docs/ably/06.jpg",
    "images/docs/ably/07.jpg", "images/docs/ably/08.jpg", "images/docs/ably/09.jpg",
    "images/docs/ably/10.jpg", "images/docs/ably/11.jpg", "images/docs/ably/12.jpg"
  ],

  /* 챕터 버튼: [버튼 이름, 시작 페이지 번호(0부터 셈)] */
  chapters: [["표지", 0], ["배경", 1], ["사용자", 3], ["문제와 해결", 4], ["영상 기획", 8], ["스토리보드", 10]],
  contact: "같이 일해요, 편하게 연락 주세요.",
  note: "",                       /* 맨 아래 작은 안내 문구 */
  otherLabel: "파랑 세계 보기"     /* 상단 오른쪽 버튼 글자 */
};


/* ===== 3. 파랑 세계 — 포켓몬 챔피언스 ===== */
var BLUE = {
  title: "POKEMON CHAMPIONS",
  subtitle: "시네마틱 티저 광고 · 약 50초",
  video: "videos/pokemon.mp4",
  thumbnail: "images/thumbnails/pokemon.jpg",
  scenes: [
    ["images/scenes/pokemon/01.jpg", "0:00"],
    ["images/scenes/pokemon/02.jpg", "0:05"],
    ["images/scenes/pokemon/03.jpg", "0:11"],
    ["images/scenes/pokemon/04.jpg", "0:13"],
    ["images/scenes/pokemon/05.jpg", "0:15"],
    ["images/scenes/pokemon/06.jpg", "0:20"],
    ["images/scenes/pokemon/07.jpg", "0:23"],
    ["images/scenes/pokemon/08.jpg", "0:26"],
    ["images/scenes/pokemon/09.jpg", "0:29"],
    ["images/scenes/pokemon/10.jpg", "0:33"],
    ["images/scenes/pokemon/11.jpg", "0:41"],
    ["images/scenes/pokemon/12.jpg",],
    ["images/scenes/pokemon/13.jpg",]
  ],
  docs: [
    "images/docs/pokemon/cover.jpg",
    "images/docs/pokemon/01.jpg", "images/docs/pokemon/02.jpg",
    "images/docs/pokemon/03.jpg", "images/docs/pokemon/04.jpg"
  ],
  chapters: [["표지", 0], ["개요", 1], ["스토리보드", 2]],
  contact: "긴장감 있는 기획이 필요하다면 연락 주세요.",
  note: "이 작업은 수강 과제로 제작한 가상 기획입니다. 포켓몬과 관련 이미지의 권리는 원 권리자에게 있습니다.",
  otherLabel: "분홍 세계 보기"
};
