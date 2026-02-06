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
   - 주요 서비스/제품 하이라이트
   - CTA (Call to Action)

2. **About Vallab (/about)**
   - 회사 소개
   - 회사 역사
   - 미션/비전
   - 주요 서비스/제품
   - 연락처 정보

3. **About Me (/about-me)**
   - 개인 소개
   - 경력/경험
   - 기술 스택
   - 연락처/소셜 링크

4. **Contact (/contact)**
   - 연락처 폼
   - 회사 정보
   - 위치 정보 (선택사항)

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
│   ├── about/
│   │   └── page.tsx          # About Vallab 페이지
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

### About Vallab 페이지
다음 정보를 포함해야 합니다:
- 회사명 및 로고
- Vallab의 의미 (Value + Laboratory)
- 회사 목표: "단순히 서비스를 만들어드리는 것이 아닌 가치를 만들겠습니다"
- 주요 서비스: Vality (창작자를 위한 뉴스레터 SaaS)
- 팀 규모 및 문화
- 연락처 정보

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
4. [ ] About Vallab 페이지 구현
5. [ ] About Me 페이지 구현
6. [ ] Contact 페이지 구현
7. [ ] 반응형 디자인 적용
8. [ ] SEO 최적화
9. [ ] 배포 설정

## 참고사항

- 모든 링크는 새 탭에서 열리도록 설정 (`target="_blank"`, `rel="noopener noreferrer"`)
- 이미지는 최적화된 형식 사용 (WebP 권장)
- 접근성 고려 (ARIA 라벨, 키보드 네비게이션 등)
- 다크 모드 지원 (선택사항)
