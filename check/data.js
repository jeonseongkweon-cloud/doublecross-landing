/* ==========================
🔴🔴🔴 CHANGE ZONE : 여기만 수정하세요 🔴🔴🔴
1) DOJANGS / BRANCHES / CERTS 배열에 계속 추가하면 됩니다.
2) 검색은 "부분 포함" 방식(계명 / 태권 / 울산 등 일부만 입력해도 잡힘)
========================== */

// ✅ 1) 공식 지정도장/지부 (이름/지역/도장명/관장명 등으로 검색)
const DOJANGS = [
  {
    type: "도장",
    country: "대한민국",
    region: "울산",
    city: "울산",
    dojangName: "계명태권도",
    masterName: "전성권",
    contact: "010-4477-2772",
    photo: "", // 사진 URL(있으면 넣기)
    link: "https://doublecross.kr" // 대문/도장페이지
  },
  {
    type: "지부",
    country: "대한민국",
    region: "대구",
    city: "대구",
    dojangName: "더블크로스 대구지부",
    masterName: "홍길동",
    contact: "010-0000-0000",
    photo: "",
    link: "https://doublecross.kr"
  }
];

// ✅ 2) 단증/자격증 (인증번호로 확인하는 영역)
const CERTS = [
  {
    type: "단증",
    category: "태권도",
    certNo: "TK-2026-0001",
    name: "홍길동",
    issuedBy: "DOUBLE CROSS",
    issuedAt: "2026-02-24",
    link: "https://doublecross.kr"
  },
  {
    type: "자격증",
    category: "지도자",
    certNo: "LIC-2026-0001",
    name: "전성권",
    issuedBy: "DOUBLE CROSS",
    issuedAt: "2026-02-24",
    link: "https://doublecross.kr"
  }
];

/* ==========================
✅ 검색에 쓰는 통합 데이터(아래는 건드리지 않아도 됩니다)
========================== */
window.DC_DATA = {
  DOJANGS,
  CERTS
};
