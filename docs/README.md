# Vallab 소개 사이트

Vallab 회사와 팀원을 소개하는 Next.js 기반 웹사이트입니다.

## 프로젝트 개요

이 프로젝트는 Vallab 회사의 정보와 팀원 소개를 제공하는 소개 사이트입니다.

### Vallab 소개

**Vallab**은 **Value + Laboratory**의 합성어로, "단순히 서비스를 만들어드리는 것이 아닌 **가치를 만들겠습니다**"라는 목표를 가진 회사입니다.

### 주요 서비스

- **Vality**: 창작자를 위한 뉴스레터 SaaS 서비스

## 사이트 구조

### 주요 페이지

1. **홈페이지 (/)**
   - Vallab 소개
   - 만들고 있는 주요 서비스 (Vality)
   - 만들어줬던 서비스들 (외주 프로젝트)
   - CTA (Call to Action)

2. **About Me (/about-me)**
   - 개인 소개
   - 역할/포지션
   - 경력/경험
   - 기술 스택
   - 연락처/소셜 링크

3. **Contact (/contact)**
   - 연락처 폼
   - 회사 정보
   - 문의하기

## 기술 스택

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Domain**: vallab.io

## 프로젝트 구조

```
web/
├── app/
│   ├── page.tsx              # 홈페이지
│   ├── about-me/
│   │   └── page.tsx          # About Me 페이지
│   ├── contact/
│   │   └── page.tsx          # Contact 페이지
│   ├── layout.tsx            # 루트 레이아웃
│   └── globals.css           # 전역 스타일
├── components/
│   ├── ui/                   # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── Header.tsx            # 헤더/네비게이션
│   ├── Footer.tsx            # 푸터
│   └── ...
├── lib/
│   ├── utils.ts              # 유틸리티 함수 (cn 등)
│   └── ...
├── public/
│   ├── images/               # 이미지 파일
│   └── ...
├── docs/                     # 프로젝트 문서
│   ├── README.md
│   ├── PROJECT_PLAN.md
│   ├── BRAND_GUIDELINES.md
│   └── CONTENT_STRUCTURE.md
├── components.json           # shadcn/ui 설정
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 주요 기능

### 네비게이션
- 반응형 헤더 메뉴
- 부드러운 스크롤 애니메이션
- 활성 페이지 하이라이트

### 링크 연결
- 외부 소셜 미디어 링크
- 회사 웹사이트/블로그 링크
- 포트폴리오/프로젝트 링크
- 이메일/연락처 링크

### 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- 터치 친화적 인터페이스

## 개발 가이드

### 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm run start
```

## 컨텐츠 작성 가이드

### 홈페이지
다음 정보를 포함해야 합니다:
- Vallab 소개
  - 회사명 및 로고
  - Vallab의 의미 (Value + Laboratory)
  - 회사 목표: "단순히 서비스를 만들어드리는 것이 아닌 가치를 만들겠습니다"
- 만들고 있는 주요 서비스
  - Vality: 창작자를 위한 뉴스레터 SaaS 서비스
  - 서비스 설명 및 특징
  - 서비스 링크
- 만들어줬던 서비스들 (외주)
  - 각 외주 프로젝트별 카드/섹션
  - 프로젝트명, 설명, 기술 스택
  - 프로젝트 링크 (가능한 경우)
  - 클라이언트 정보 (공개 가능한 경우)

### About Me 페이지
다음 정보를 포함해야 합니다:
- 이름 및 프로필 사진
- 역할/포지션
- 경력 및 경험
- 기술 스택
- 개인 프로젝트/포트폴리오 링크
- 소셜 미디어 링크 (GitHub, LinkedIn, 블로그 등)

## 다음 단계

1. [ ] Next.js 프로젝트 초기화
2. [ ] 기본 레이아웃 및 네비게이션 구현
3. [ ] 홈페이지 구현
   - [ ] Vallab 소개 섹션
   - [ ] 만들고 있는 주요 서비스 (Vality) 섹션
   - [ ] 만들어줬던 서비스들 (외주) 섹션
4. [ ] About Me 페이지 구현
5. [ ] Contact 페이지 구현
6. [ ] 반응형 디자인 적용
7. [ ] SEO 최적화
8. [ ] 배포 설정

## 참고사항

- 모든 링크는 새 탭에서 열리도록 설정 (`target="_blank"`, `rel="noopener noreferrer"`)
- 이미지는 최적화된 형식 사용 (WebP 권장)
- 접근성 고려 (ARIA 라벨, 키보드 네비게이션 등)
- 다크 모드 지원 (선택사항)

## 문서

더 자세한 정보는 `docs` 폴더의 문서를 참고하세요:

- [프로젝트 계획서](./PROJECT_PLAN.md)
- [브랜드 가이드라인](./BRAND_GUIDELINES.md)
- [컨텐츠 구조 가이드](./CONTENT_STRUCTURE.md)
