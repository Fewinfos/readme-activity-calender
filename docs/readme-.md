<!-- Banner Image -->
<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Welcome to FEWINFOS Contribution - GitHub Repository Stats Widget" width="100%">
</div>

# 📦 GitHub 저장소 통계 위젯

실시간 *GitHub 저장소 통계*를 시각화하는 오픈 소스의 완전 클라이언트 사이드 도구입니다. 개발자, 오픈 소스 유지보수자, 포트폴리오 작성자에게 완벽한 도구입니다.

---

## 🎯 목적

이 위젯은 GitHub REST API를 사용하여 퍼블릭 GitHub 저장소의 다양한 메타데이터와 인사이트를 가져와 표시합니다. *브라우저 내에서만 작동*하며 백엔드나 인증이 필요하지 않습니다.

---

## ✨ 기능

- 🔄 GitHub REST API를 통한 실시간 데이터 가져오기
- ⭐ 별, 포크, 감시자, 이슈, 풀 리퀘스트 표시
- 👥 아바타 및 커밋 수로 주요 기여자 시각화
- 📊 사용된 언어를 인터랙티브한 차트로 표시
- 📅 저장소 생성일 및 마지막 업데이트 시간 표시
- 📜 라이선스 정보 표시
- 🎨 깔끔하고 반응형이며 사용자 정의 가능한 UI
- 💻 브라우저에서 바로 작동 (서버 설정 불필요)
- 🧩 웹사이트 또는 README.md 파일에 쉽게 임베드 가능
- 📈 Chart.js를 통한 추가 시각화 가능 (옵션)

---

## 🧱 기술 스택

- *HTML* – 구조 및 레이아웃
- *CSS* – 스타일링 및 반응형 디자인
- *JavaScript* – 로직 및 API 처리
- *GitHub REST API* – 데이터 소스
- *Chart.js* – 그래프 및 차트 렌더링 (옵션)

---
## 📊 제공 위젯

### 🔍 저장소 통계

- ⭐ 별 / 🍴 포크 / 👁 감시자 수
- 📅 저장소 생성일 및 마지막 업데이트 날짜
- 📜 라이선스 유형 표시
- 📊 언어 사용 (원형, 막대, 도넛 차트)
- 📦 종속성 그래프 (npm, pip 등)
- 📈 커밋 활동 히트맵
- 🕐 평균 PR 병합 시간
- 🧵 이슈 상태 분류 (열림 / 닫힘 / 고정됨)

### 👥 기여자 위젯

- 👥 주요 기여자 (아바타 + 커밋 수)
- 📊 요일별 기여도
- 🗺 기여자 위치 지도 (공개 데이터 기반)
- ⏱ 최근 기여자 (최근 7일 / 30일)
- 📈 시간에 따른 기여도 (스택 면적 그래프)

### 📊 그래프 기반 위젯

- 📊 저장소 건강 상태 레이더 차트 (별, 포크, PR, 이슈 등)
- 📉 별/포크 증가 추이 선형 차트
- 🍩 언어 사용 도넛 차트
- 📈 이슈/PR 추세 영역 차트
- 📆 GitHub 스타일 캘린더 히트맵

### ⚙ DevOps 및 CI/CD 위젯

- 🚦 GitHub Actions CI/CD 상태 배지
- 🧪 코드 커버리지 배지 (Codecov, Coveralls)
- 🔄 마지막 워크플로우 실행 표시
- 🛠 빌드 히스토리 타임라인 (성공/실패 시각화)

### 📌 이슈 및 PR 위젯

- 📋 고정된 이슈 또는 토론
- 🔍 이슈 라벨 워드 클라우드
- 📬 PR 병합 상태/비율 추적기
- 📈 이슈 감정 분석 표시기 (키워드 기반)

### 🧩 기타 위젯

- 📌 즐겨찾기/북마크 버튼
- 🔍 저장소 검색 기능 내장
- 🧠 AI 기반 커밋 요약 (옵션)
- 🔗 관련 저장소 위젯
- 🪄 iframe / HTML 임베드로 위젯 내보내기

## 📂 프로젝트 구조

```
github-repo-stats-widget/
├── index.html         # 메인 HTML 파일
├── style.css          # CSS 스타일
├── repo.js            # 핵심 JavaScript 로직
├── charts.js          # 차트 렌더링 로직
├── assets/            # 아이콘, 스크린샷 등
├── README.md          # 문서 파일
└── LICENSE            # MIT 라이선스
```
---

## 🚀 배포 방법

이 위젯은 *GitHub Pages* 또는 Netlify, Vercel, Firebase와 같은 정적 호스팅 서비스를 통해 배포할 수 있습니다.

### GitHub Pages로 배포하기

1. 프로젝트를 GitHub에 푸시하세요.
2. *Settings → Pages*로 이동하세요.
3. 브랜치를 main, 폴더는 `/ (root)`로 설정하세요.
4. 위젯은 다음 위치에 호스팅됩니다:  
   `https://yourusername.github.io/github-repo-stats-widget/`