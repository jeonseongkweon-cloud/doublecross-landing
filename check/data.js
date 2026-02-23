/* ===================================================
🔴🔴🔴 DOUBLE CROSS 통합 조회 데이터 🔴🔴🔴
여기만 수정하세요.

1) 도장/지부는 DOJANGS 배열에 추가
2) 단증/자격증은 CERTS 배열에 추가
3) 쉼표(,) 빠지지 않도록 주의
=================================================== */

/* ===============================
1️⃣ 공식 지정도장 / 지부
이름/지역/도장명/관장명 등으로 검색 가능
=============================== */

window.DOJANGS = [

  {
    type: "도장",
    country: "대한민국",
    region: "울산",
    city: "울산",
    dojangName: "계명태권도",
    masterName: "전성권",
    contact: "010-4477-2772",
    photo: "",
    link: "https://doublecross.kr"
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


/* ===============================
2️⃣ 단증 / 자격증
⚠ 인증번호로만 검색됩니다.
=============================== */

window.CERTS = [

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
    type: "단증",
    category: "태권검도",
    certNo: "TKK-2026-0001",
    name: "김태권",
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
