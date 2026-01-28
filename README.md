<h1><img src="/assets/images/logoimage.png" alt="DIARO Logo">DIARO</h1>

> Digital + Analog + Road : 디지털의 길 위에서 나라는 우주 한 점이 아날로그 영혼을 그려 나가다. 

[![DIARO Preview](./assets/images/intro.png)](#📋-목차)

## 📋 목차

> 세상은 끊임없이 돌아갑니다. 수많은 정보와 소음, 타인의 시선이 뒤엉킨 거대한
멀티버스(Multi-verse) 속에서 우리는 종종 길을 잃곤 합니다.
 
> 하지만 기억해야 합니다. 세상이 아무리 빠르게 변하고 복잡하게 회전해도, 그 모든 회전의 중심축은 바로 '나'입니다.  
> 나의 시간이 흐르고, 나의 숨결이 닿고, 나의 손길이 머물고, 나의 생각이 맺히는 곳.   
> 그곳에서 비로소 세상은 의미를 가집니다.
 
> 디아로는 복잡하고 딱딱하며 차가운 기술을 이야기하지 않습니다.
> 우리는 당신이 이 광활한 우주 속에서 오로지 '나'라는 그림을 그려나가는 여정, 그 길을 함께
걷는 따뜻한 동반자가 되고자 합니다.

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [개발 가이드](#-개발-가이드)
- [배포](#-배포)
- [라이센스](#-라이센스)
- [문의](#-문의)

## 🎯 프로젝트 소개

> DIARO는 브랜드 아이덴티티를 표현하는 원페이지 웹사이트로, 4단계의 브랜드 철학을 시각적으로 전달합니다.


### 브랜드 철학 - 제품명

1. **자각 (自覺) - 이순간 (ESUNGAN)**: 모든 것은 지금 여기에서 시작된다. 과거도 미래도 아닌, 내가 온전히 통제할 수 있고, 살아 숨 쉬는 유일한 실체는 바로 '지금 딱 이순간' 입니다. 세상이 재촉하는 시계가 아닌 나의 호흡에 귀를 기울여 보세요. 밖으로 흩어졌던 정신은 비로소 내 안으로 모여듭니다. 내가 깨어있는 이 찰나의 순간이 바로 내 우주의 태동입니다.

2. **공명 (共鳴) - 스머든 (SMUDEUN)**: 우주의 기운이 나에게 스며든다. 나를 둘러싼 세계는 단순한 배경이 아닙니다. 창가를 스치는 바람, 계절의 온도, 하늘의 빛깔... 우주의 흐름이 부드럽게 스며들어(Smudeun) 나의 기분과 공명합니다. 안과 밖의 경계가 사라지고, 나는 거대한 자연의 일부가 되어 흐릅니다. 변화하는 날씨는 당신의 감각을 깨우는 우주의 초대장입니다.

3. **안식 (安息) - 하우리 (HAURI)**: 나의 손길이 머무는 안식처. 우주의 기운을 품고 돌아온 곳. 당신의 취향과 기억이 머무는 이 공간에서 비로소 세상은 의미를 가집니다. 차가운 기술과 따뜻한 아날로그가 균형을 이루는 곳입니다. 내 손끝이 닿는 모든 것도 나의 우주가 됩니다. 

4. **사유 (思惟) - 노티모 (NOTIMO)**: 흩어지는 감각을 붙잡아 나로 인한 새로운 우주 역사가 창조됩니다. 나라는 점이 우주 화폭에 그림을 그려 나가는 그 경이로운 여정에, 디아로가 함께하겠습니다. 

## ✨ 주요 기능

- **비디오 배경**: 브랜드 무드를 전달하는 전체 화면 비디오 섹션
- **반응형 디자인**: 모바일/태블릿/데스크톱 모든 디바이스 지원
- **섹션별 레이아웃**: 그리드 기반의 교차 레이아웃으로 시각적 리듬감 제공
- **최적화된 미디어**: 비디오 자동 재생 및 이미지 최적화
- **깔끔한 타이포그래피**: 반응형 폰트 크기로 가독성 극대화

## 🛠 기술 스택

### Core
- **HTML5** - 시맨틱 마크업
- **CSS3** - Grid, Flexbox, Media Queries
- **Vanilla JavaScript** - 프레임워크 없는 순수 구현

### Development
- **Vite 5.4** - 빠른 개발 서버 및 빌드 도구
- **Node.js 18+** - 런타임 환경

### Assets
- **Video**: MP4 포맷 (intro, section1, section2, outro)
- **Image**: JPG 포맷 (section3, section4)

## 🚀 시작하기

### 필요 조건

- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치

```bash
# 저장소 클론
git clone <!-- TODO: 저장소 URL 추가 -->
cd DIARO

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 로컬에서만 실행
npm run dev

# 네트워크에서 접근 가능하게 실행 (다른 기기에서 테스트 시)
npm run dev -- --host
```

브라우저에서 다음 주소로 접속:
- Local: `http://localhost:5173`
- Network: `http://[your-ip]:5173`

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 📁 프로젝트 구조

```
DIARO/
├── public/
│   └── assets/
│       ├── videos/              # 비디오 파일
│       │   ├── hero-intro.mp4   # 인트로 비디오
│       │   ├── 01-awareness-esungan.mp4   # 섹션1: 자각 - 이순간
│       │   ├── 02-resonance-smudeun.mp4   # 섹션2: 공명 - 스머든
│       │   └── hero-outro.mp4   # 아웃트로 비디오
│       └── images/              # 이미지 파일
│           ├── 03-rest-desk.jpg       # 섹션3: 안식 - 하우리
│           ├── 04-reflection-note.jpg # 섹션4: 사유 - 노티모
│           ├── logo.png               # 로고 (트리거용)
│           ├── logoimage.png          # 로고 (모달 헤더용)
│           └── intro.png              # 프리뷰 이미지
├── index.html                # 메인 HTML 파일 (CSS, JavaScript 포함)
├── package.json              # 프로젝트 메타데이터 및 의존성
├── package-lock.json         # 의존성 잠금 파일
└── README.md                 # 프로젝트 문서
```

## 💻 개발 가이드

### 코드 스타일

- **들여쓰기**: 4 spaces
- **CSS 방법론**: BEM 네이밍 컨벤션 일부 적용
- **반응형 브레이크포인트**: 768px (모바일/데스크톱)

### 섹션 구조

```html
<!-- 비디오 배경 섹션 -->
<section>
    <video autoplay muted loop playsinline>
        <source src="/assets/videos/video.mp4" type="video/mp4">
    </video>
</section>

<!-- 콘텐츠 섹션 -->
<section>
    <div class="section-grid [reverse]">
        <div class="media-box">
            <!-- 비디오 또는 이미지 -->
        </div>
        <div class="text-content">
            <!-- 텍스트 콘텐츠 -->
        </div>
    </div>
</section>
```

### 미디어 추가 방법

1. 미디어 파일을 `public/assets/videos/` 또는 `public/assets/images/`에 추가
2. `index.html`에서 해당 경로로 참조
3. 비디오는 `autoplay muted loop playsinline` 속성 사용 권장

### CSS 커스터마이징

주요 CSS 변수 및 값:
- 최대 너비: `1200px`
- 미디어 박스 비율: `4:5`
- 반응형 폰트: `clamp()` 함수 사용
- 색상: `#000` (배경), `#fff` (텍스트), `#999`, `#ccc` (보조)

## 🌐 배포

### 정적 호스팅 서비스

빌드된 파일(`dist/` 폴더)을 다음 서비스에 배포 가능:

<!-- TODO: 실제 배포 URL 추가 -->
- **Vercel**: [배포 가이드](https://vercel.com)
- **Netlify**: [배포 가이드](https://netlify.com)
- **GitHub Pages**: [배포 가이드](https://pages.github.com)
- **AWS S3 + CloudFront**
- **Firebase Hosting**

### 배포 명령어 예시

```bash
# Vercel
npx vercel

# Netlify
npx netlify deploy --prod

# GitHub Pages
npm run build
# dist 폴더를 gh-pages 브랜치에 푸시
```

## 📊 성능 최적화

- ✅ 비디오 자동 재생 최적화 (`autoplay muted loop playsinline`)
- ✅ 반응형 이미지 및 비디오
- ✅ CSS Grid/Flexbox로 레이아웃 최적화
- ✅ 외부 의존성 최소화 (Vite만 사용)
- ⚠️ TODO: 이미지 lazy loading 구현
- ⚠️ TODO: 비디오 포맷 최적화 (WebM 추가)

## 🐛 트러블슈팅

### 비디오가 재생되지 않는 경우
- 브라우저가 자동 재생을 지원하는지 확인
- `muted` 속성이 있는지 확인
- iOS Safari의 경우 `playsinline` 속성 필수

### 개발 서버가 다른 기기에서 접속되지 않는 경우
- `--host` 플래그 사용 확인
- 방화벽 설정 확인
- 동일한 네트워크에 연결되어 있는지 확인

## 📄 라이센스

> 이 프로젝트는 [라이센스 타입]에 따라 라이센스가 부여됩니다.

## 👥 기여

> 기여를 환영합니다! 다음 단계를 따라주세요:

1. 이 저장소를 Fork합니다
2. Feature 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## ♥️ 에필로그

### 중심을 잡는 힘
- 세상이 복잡할수록 우리는 단순해져야 합니다.
- 멀리서 답을 찾으려 하지 마십시오.
- 지금 이 순간에 서서,
- 나에게 스며든 기운을 느끼고,
- 나의 머무는 공간을 사랑하며,
- 나의 생각을 기록하는 것.
- 그것이 흔들리는 세상 속에서
- '나'라는 중력을 잃지 않고 살아가는 유일한 방법입니다.

## 📞 문의
### "디지털의 길 위에서, 아날로그의 영혼을 그려 나가다."

- **관리자**: 한승만 ❤️ DIARO
- **이메일**: [digilogbiz@gmail.com](mailto:digilogbiz@gmail.com)
- **웹사이트**: [http://diaro.site](http://diaro.site)

---



