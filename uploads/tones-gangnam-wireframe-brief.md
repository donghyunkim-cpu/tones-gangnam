# TONES CLINIC GANGNAM — 와이어프레임 브리프 (디자인 툴 복붙용)

> 사용법: 아래 블록을 그대로 디자인 툴(Claude Design / Figma AI 등) 프롬프트에 붙여 넣으면 됩니다. `[자료 대기]`는 클라이언트 자료 수급 후 교체할 자리. 카피는 초안이며 그대로 써도 무방.

---

## 0. 마스터 프롬프트 (툴에 가장 먼저 붙여 넣는 블록)

```
프로젝트: TONES CLINIC Gangnam — 서울 강남역 프리미엄 리프팅/인젝터블 클리닉 홈페이지 와이어프레임
타깃: 북미 영어권 의료관광 환자 (30~50대, 모바일 우선)
언어: 영어 기본, 한국어 토글
목표: 1) 온라인 예약/상담 폼 제출  2) 대표원장(Dr. Yang Jae-young) 페이지 도달
톤: Premium, Luxury, Warm, Friendly. 병원 느낌 최소화, 하이엔드 에스테틱 브랜드 느낌.
피할 것: 요소가 흩어진 레이아웃, 스톡/AI 생성 이미지 느낌, 파란색 병원 UI, 배너 난립.
원칙: 한 화면에 하나의 메시지. 여백 넓게. 실사 사진 자리(placeholder)는 크게. 모든 페이지에서 2클릭 안에 원장 페이지 도달. 모바일 하단 고정 CTA 바.
벤치마크: 청담서클의원(원장 중심 브랜딩), 오가나셀(첫 화면 의료진 단체 실사의 웅장함), FINE Clinic 영문 사이트 구조.
화면 크기: 데스크톱 1440, 모바일 390. 그레이스케일 로우파이(wireframe)로 시작.
```

---

## 1. 디자인 토큰 (초안)

```
Color
- Background: #FAF7F2 (warm ivory)
- Surface: #FFFFFF
- Text primary: #1F1D1B (deep charcoal)
- Text secondary: #6B6560
- Accent: #B8955A (champagne gold) — CTA, 라인, 아이콘
- Accent soft: #EFE6D6 — 섹션 배경 교차용
- Border: #E6E0D6

Typography
- Headline: Serif (Cormorant Garamond / Playfair Display), weight 500
  H1 56/64 · H2 40/48 · H3 28/36 (desktop)  /  H1 34 · H2 28 · H3 22 (mobile)
- Body: Sans (Inter / Pretendard), 16/26, 400
- Label/Eyebrow: Sans 12/16, 600, letter-spacing 0.12em, uppercase

Spacing
- Section padding: 120 desktop / 72 mobile
- Grid: 12col, gutter 24, margin 80 (desktop) / 4col, gutter 16, margin 20 (mobile)
- Radius: 4 (buttons), 8 (cards), 999 (pill tags)

Buttons
- Primary: Gold fill, charcoal text, 56h desktop / 52h mobile, label uppercase 13 tracking 0.08em
- Secondary: Charcoal outline 1px, transparent
- Text link: underline offset 6, gold on hover
```

---

## 2. 글로벌 컴포넌트

### 2-1. Header (sticky, 72h)
```
[Logo_h 좌측]   Doctor  Treatments  Results  International  Reviews  About   [EN | KO]  [ Book Now ]
- 스크롤 시 배경 ivory 90% blur, 하단 1px border
- 모바일: [Logo]  [EN|KO]  [≡]  → 풀스크린 메뉴, 하단에 Book Now / WhatsApp 큰 버튼
```

### 2-2. Mobile Sticky CTA Bar (모바일 전용, 하단 64h)
```
[ Book ]  [ WhatsApp ]  [ KakaoTalk ]   — 3등분, 가운데 Book은 gold fill
```

### 2-3. Footer
```
Row1: Logo_v_WH (다크 배경 시) | 주소 · 전화 · 시간 | Quick links | Social icons (Instagram, KakaoTalk, WhatsApp, Naver)
Row2: Privacy Policy · Terms · Medical Institution Info · Non-covered Fees Notice · © TONES CLINIC Gangnam
- 배경: charcoal, 텍스트 ivory
```

### 2-4. Notice Banner (조건부, 헤더 위 40h)
```
"⚠ Closed on Sep 22 (Mon). Online bookings still open."  [×]
- 관리자가 휴진일 등록 시 노출. 배경 accent soft.
```

### 2-5. Section Eyebrow 패턴
```
[EYEBROW 12px uppercase gold]
[H2 serif]
[1~2줄 lead 18px secondary]
```

---

## 3. 페이지별 와이어프레임

### PAGE 01 — HOME (`/`)

```
S1 HERO (100vh, 풀블리드 실사)
 - 배경: 의료진 단체 풀샷 또는 원장 풀샷 [자료 대기 — 촬영]. 하단 30% 다크 그라데이션.
 - 좌하단 정렬 텍스트 블록 (max-w 640):
   Eyebrow: GANGNAM STATION · SEOUL
   H1: Lifting, designed by an aesthetic eye.
   Lead: Personalized filler lifting & injectables by Dr. Yang Jae-young — in English, in the heart of Gangnam.
   Buttons: [ Book a Consultation ] (primary)  [ Meet Dr. Yang → ] (text link, white)
 - 우하단: 작은 신뢰 배지 3개 가로 — "English consultations" · "1 min from Gangnam Stn. Exit 10" · "Open 7 days"
 - 모바일: 세로컷 이미지, 텍스트 중앙 정렬, 버튼 풀폭 스택

S2 DOCTOR INTRO (2col, 이미지 5 : 텍스트 7)
 - 좌: 원장 프로필 사진 세로 4:5 [자료 대기]
 - 우:
   Eyebrow: THE DOCTOR
   H2: Dr. Yang Jae-young
   Body: [원장 소개 3줄 — 자료 대기. 임시: "Board-certified physician with 00+ years focused on facial balance and natural lifting. Every plan is designed and performed by Dr. Yang himself."]
   Bullet 3개: · Filler lifting specialist  · English-speaking consultations  · Personally performs every treatment
   Link: Read his story →
 - 모바일: 이미지 위, 텍스트 아래

S3 SIGNATURE TREATMENT — FILLER LIFTING (배경 accent soft)
 - Eyebrow: SIGNATURE
 - H2: Filler Lifting, the Tones way
 - Lead: Not more volume — better structure. Strategic placement that lifts, defines and stays natural.
 - 3col 카드 (아이콘 + 타이틀 + 2줄):
   1) Structure first — "Support points, not surface fill"
   2) Designed per face — "No preset shapes. Your bone, your plan."
   3) Minimal downtime — "Back to your trip the same day"
 - 하단 CTA: [ Explore Filler Lifting ]

S4 WHY PATIENTS FLY TO TONES (4col 아이콘 그리드 → 모바일 2col)
 - Eyebrow: WHY TONES GANGNAM
 - H2: Built for international patients
 - 카드 6개 (아이콘 + 타이틀 + 1줄):
   · English consultations — "Direct with the doctor, no translator gap"
   · One doctor, start to finish — "Consult, design, treat, follow-up"
   · Transparent quotes — "Written estimate before you fly"
   · Remote aftercare — "Photo check-ins after you go home"
   · Gangnam Station, 1 min — "Exit 10, 9F"
   · Open 7 days, no lunch break — "10:00–20:30 weekdays"

S5 RESULTS PREVIEW (가로 스크롤 캐러셀)
 - Eyebrow: RESULTS
 - H2: Real patients, real balance
 - 카드: Before | After 2분할 이미지 [자료 대기] + 캡션 "Filler lifting · 40s · 1 session"
 - 카드 4~6개, 우측 끝 "View all results →"
 - 하단 소형 텍스트: Individual results vary. Photos shared with patient consent.

S6 HOW IT WORKS (5 step 가로 타임라인 → 모바일 세로)
 - Eyebrow: FOR INTERNATIONAL PATIENTS
 - H2: From inquiry to aftercare
 - Steps:
   01 Send an inquiry — form or WhatsApp
   02 Online consultation — photos, goals, quote
   03 Confirm your visit — date, prep guide
   04 Treatment day — consult → design → treat, same day
   05 Aftercare — remote follow-up when you're home
 - CTA: [ Start Your Inquiry ]

S7 REVIEWS (3col 카드, 배경 white)
 - Eyebrow: REVIEWS
 - H2: What patients say
 - 카드: ★★★★★ / 인용 3줄 / 이름 이니셜 + 국가 (e.g., "J.M. · Los Angeles") / 소스 뱃지(Google)
 - [기존 사이트 후기 큐레이션 — 자료 대기]
 - 링크: Read more reviews →

S8 CLINIC TOUR (마소니 그리드 5장, 클릭 시 라이트박스)
 - Eyebrow: THE SPACE
 - H2: A calm 9th floor above Gangnam
 - 이미지: 공간 사진 1~8.png 중 5장 사용 (자료 있음)

S9 LOCATION & HOURS (2col: 지도 6 : 정보 6)
 - 좌: Google Map embed (EN) / Naver Map (KO)
 - 우:
   H3: TONES CLINIC Gangnam
   403 Gangnam-daero, 9F (343 Tower), Seocho-gu, Seoul
   Subway Line 2 · Gangnam Station Exit 10 · 1 min walk
   +82 2-6953-2667
   시간표:
     Mon–Fri  10:00–20:30
     Sat–Sun  10:00–16:30
     Holidays 10:00–17:00
     No lunch break · Irregular closures posted above
   Parking: No on-site parking. Nearby: Kyungdong paid parking.
   버튼: [ Get Directions ]  [ Book Now ]

S10 FINAL CTA (풀블리드 다크, 중앙 정렬)
 - H2: Plan your visit to Gangnam.
 - Lead: We reply within 24 hours, in English.
 - Buttons: [ Book a Consultation ]  [ Message on WhatsApp ]

FOOTER
```

---

### PAGE 02 — DR. YANG JAE-YOUNG (`/doctor`)

```
S1 HERO (2col, 텍스트 5 : 이미지 7)
 - 좌:
   Eyebrow: MEDICAL DIRECTOR
   H1: Dr. Yang Jae-young
   Sub: Filler Lifting · Injectables · Facial Balance
   Lead: [철학 한 줄 — 자료 대기. 임시: "A face should look rested, not treated."]
   Buttons: [ Book with Dr. Yang ]  [ View Results ]
 - 우: 원장 풀샷 4:5 [자료 대기]

S2 PHILOSOPHY (센터 정렬, max-w 760, 큰 serif 인용)
 - Eyebrow: PHILOSOPHY
 - 인용문 3~4문장 [원장 인터뷰 — 자료 대기]
 - 하단 서명 이미지 자리(optional)

S3 CREDENTIALS (2col: 좌 타임라인 / 우 자격·학회 리스트)
 - 좌 Timeline: 연도 · 항목 [자료 대기, 6~8줄]
 - 우 리스트: Board certification · Society memberships · Trainings [자료 대기]
 - 로고 스트립: 학회/협회 로고 [자료 대기]

S4 IN THE TREATMENT ROOM (3장 가로 사진: 상담 / 디자인(마킹) / 시술) [자료 대기 — 촬영]
 - 각 사진 아래 1줄 캡션

S5 ENGLISH CONSULTATION (배경 accent soft, 아이콘 + 텍스트 가로)
 - H3: Consultations in English
 - Body: [영어 진료 사실 확인 후 문구 확정. 임시: "Dr. Yang consults directly in English — no interpreter in between."]

S6 SIGNATURE CASES (3 cards Before/After) [자료 대기]

S7 CTA
 - H2: Ready to meet Dr. Yang?
 - [ Book a Consultation ]  [ WhatsApp ]
```

---

### PAGE 03 — TREATMENTS INDEX (`/treatments`)

```
S1 헤더 (센터)
 - Eyebrow: TREATMENTS
 - H1: Designed, not applied.
 - Lead: Every treatment starts with a facial design, not a menu.

S2 카테고리 탭 (가로 pill): All · Filler Lifting · Injectables · Lifting Devices · Skin & Laser

S3 카드 그리드 (3col → 모바일 1col)
 - 카드: 이미지 16:10 [자료 대기] / 카테고리 태그 / 타이틀 / 1줄 설명 / 메타 3개(Time · Downtime · Lasts) / "Learn more →"
 - 초안 목록 (기존 사이트 키워드 기반, 확정 필요):
   Filler Lifting (Signature) · Botox · Skin Boosters · Lip Filler · Forehead Filler · Ulthera · InMode · Laser Hair Removal · [추가 — 자료 대기]

S4 "Not sure where to start?" 배너
 - Body: Send us 3 photos. We'll suggest a plan and a quote.
 - [ Get a Free Assessment ]
```

---

### PAGE 04 — TREATMENT DETAIL 템플릿 (예: `/treatments/filler-lifting`)

```
S1 HERO (2col)
 - 좌: Eyebrow: SIGNATURE / H1: Filler Lifting / Lead 2줄 / 메타 4개 가로 (Duration 30–45 min · Anesthesia Topical · Downtime 0–2 days · Lasts 12–18 mo) / [ Book ] [ Get a Quote ]
 - 우: 시술 대표 이미지 [자료 대기]

S2 WHO IT'S FOR (2col 리스트)
 - 좌 "Good for": · Sagging mid-face · Flattened cheekbones · Jawline definition · Early jowls
 - 우 "Not for": · Significant skin laxity → see Lifting Devices

S3 THE TONES APPROACH (3 step 가로)
 - 01 Analyze — bone structure, fat pads, asymmetry
 - 02 Design — support points marked with you in the mirror
 - 03 Place — layered, minimal product, natural movement
 - 우측에 마킹 사진 [자료 대기]

S4 BEFORE & AFTER (슬라이더 비교 컴포넌트) [자료 대기]

S5 WHAT TO EXPECT (아코디언)
 - Before your visit / On the day / Recovery / Follow-up

S6 SAFETY & SIDE EFFECTS (회색 박스, 필수)
 - 본문 [의료광고 심의 문구 — 자료 대기]

S7 PRICING (조건부)
 - 옵션 A(가격 공개): 표 — Item / KRW / approx. USD
 - 옵션 B(비공개): "Pricing depends on product and amount. Written quote after online consultation." [ Get a Quote ]

S8 FAQ (아코디언 5개)
 - Does it hurt? / Can I fly the next day? / Which filler brands? / How long does it last? / Can I combine with Botox?

S9 RELATED TREATMENTS (3 cards)

S10 CTA
```

---

### PAGE 05 — RESULTS (`/results`)

```
S1 헤더: Eyebrow RESULTS / H1: Before & After / Lead: All photos shared with written consent. Individual results vary.
S2 필터 바: Treatment (드롭다운) · Age group · Sessions
S3 그리드 (3col → 2col 모바일): Before/After 2분할 카드 + 캡션 + 시술명 태그 [자료 대기]
S4 CTA 배너: "Want a plan like this?" [ Send Your Photos ]
```

---

### PAGE 06 — FOR INTERNATIONAL PATIENTS (`/international`)

```
S1 HERO (센터, 배경 accent soft)
 - Eyebrow: INTERNATIONAL PATIENTS
 - H1: Your Seoul treatment, planned before you land.
 - Lead: One doctor. English throughout. Written quote in advance.
 - [ Start Your Inquiry ]  [ WhatsApp ]

S2 HOW IT WORKS (5 step, HOME S6 확장판 — 각 step에 2~3줄 설명 + 소요 시간)

S3 WHAT WE HANDLE / WHAT YOU PREPARE (2col 체크리스트)
 - We handle: consultation, plan, quote, appointment, aftercare guide, remote follow-up
 - You prepare: 3 photos (front/45°/side), goals, travel dates, [passport for tax refund — 확인 필요]

S4 PRICING GUIDE (조건부 — 표 or 안내문) [자료 대기 Q6]

S5 PAYMENT & DOCUMENTS (아이콘 카드 4개)
 - Cards accepted (Visa/Master/Amex — 확인) · Tax refund [확인] · Receipt in English · Treatment record on request

S6 TRAVEL & STAY
 - 좌: 지도 / 우: Getting here (Incheon → Gangnam 60~70 min by taxi/AREX+Line 2), Stay nearby (Gangnam / Seocho / Sinnonhyeon 호텔 카테고리), Best time to book (평일 오전)

S7 FAQ (아코디언 8개)
 - Do I need an interpreter? / How far in advance should I book? / Can I do multiple treatments in one visit? / What if I have a reaction after I fly home? / Do you accept international insurance? / Is there parking? / Do you have Sunday hours? / Can I bring a companion?

S8 CTA
```

---

### PAGE 07 — REVIEWS (`/reviews`)

```
S1 헤더: H1 Patient reviews / 평점 요약 (★4.9 · 000 reviews · Google/Naver)
S2 필터: Source · Treatment · Language
S3 마소니 카드 그리드 [자료 대기 — 기존 사이트 후기 큐레이션]
S4 CTA
```

---

### PAGE 08 — ABOUT / WHY TONES GANGNAM (`/about`)

```
S1 HERO: 의료진·스태프 단체사진 풀블리드 [자료 대기] + H1 "A clinic built around one standard."
S2 STORY (센터 텍스트 max-w 720) [자료 대기]
S3 TRUST STACK (4col 숫자 카드): Years in practice · Treatments performed · Countries served · Return rate [숫자 자료 대기]
S4 OUR TEAM (카드 그리드: 사진 + 이름 + 역할 + 언어) [자료 대기 Q8]
S5 CLINIC TOUR (풀 갤러리 8장 — 자료 있음)
S6 EQUIPMENT (로고/사진 스트립: Ulthera, InMode 등 — 확인 필요)
S7 CTA
```

---

### PAGE 09 — BOOK / CONTACT (`/book`)

```
S1 2col (폼 7 : 사이드 5)
 좌 FORM
  - H1: Book a consultation
  - Lead: We reply within 24 hours. No deposit required to inquire.
  - 필드 (순서대로):
    Full name*
    Email*
    Phone / WhatsApp* (국가코드 셀렉트)
    Country of residence*
    Preferred visit dates (date range picker)
    Treatments of interest (멀티 체크: Filler Lifting / Botox / Skin Boosters / Lifting Devices / Laser / Not sure)
    Tell us about your concern (textarea, 500자)
    Upload photos (optional, up to 3, jpg/png/heic)
    ☐ I agree to the Privacy Policy and overseas data transfer notice*
    [ Send Inquiry ] (풀폭 primary)
  - 제출 후 상태: "Thank you, [Name]. We've emailed a confirmation and will reply within 24 hours."

 우 SIDEBAR (sticky)
  - 카드 1 "Prefer to chat?": [WhatsApp] [KakaoTalk] [Instagram DM] 버튼 세로 스택
  - 카드 2 "Visit us": 주소 / 지도 썸네일 / 시간표 / 휴진 공지
  - 카드 3 "Call": +82 2-6953-2667 (Korean & English, 10:00–20:30 KST)

S2 FAQ 미니 (3개): How soon will you reply? / Is a deposit required? / Can I reschedule?
```

---

### PAGE 10 — EVENTS (`/events`)

```
S1 헤더: H1 Current offers
S2 카드 그리드: 이미지 4:5 / 타이틀 / 기간 / 1줄 / "View details →" (만료 자동 숨김)
S3 상세 모달 또는 페이지: 이미지 / 본문 / 조건 / [ Book This Offer ]
```

---

### PAGE 11 — LEGAL (`/privacy`, `/terms`, `/medical-info`, `/fees`)

```
단일 컬럼 max-w 760, 목차 사이드 sticky. 본문 [자료 대기 Q10]. 
/fees: 비급여 진료비 고지 표 (항목 / 단위 / 금액) [자료 대기]
```

---

## 4. 모바일 전용 메모

```
- 모든 HERO: 이미지 세로컷(4:5 이상), 텍스트 하단 정렬, 버튼 풀폭 2단 스택
- 카드 그리드: 3col → 1col, 가로 스크롤 캐러셀은 snap + 우측 peek 24px
- 하단 고정 CTA 바 항상 노출 (푸터 도달 시 숨김)
- 헤더 메뉴: 풀스크린 오버레이, 메뉴 하단에 WhatsApp / KakaoTalk / Call 3버튼
- 폼: 한 화면 한 필드 그룹, 키보드 올라와도 CTA 보이게
```

---

## 5. 자료 대기 목록 (와이어프레임 → 디자인 전환 전 필요)

```
[촬영] 의료진 단체 풀샷(가로 16:9 + 세로 4:5) / 원장 프로필 3컷 / 상담·마킹·시술 장면 3컷
[텍스트] 원장 소개 3줄, 철학 인터뷰 3~4문장, 경력 타임라인 6~8줄, 자격·학회 리스트
[텍스트] 확정 시술 목록 + 각 시술 한 줄 정의·메타(시간/마취/다운타임/지속)
[이미지] 전후사진 동의 확보분 (최소 6세트)
[텍스트] 후기 10건 큐레이션 (이니셜·국가·소스)
[결정] 가격 공개 여부, 영어 진료 문구, WhatsApp 라우팅, 도메인
[파일] 로고 AI/SVG, 브랜드 컬러 코드
```
