<!-- 배너 이미지 --> <div align="center"> <img src="./assets/fewinfos-banner.png" alt="FEWINFOS Contribution에 오신 것을 환영합니다 - GitHub 저장소 통계 위젯" width="100%"> </div>
📦 GitHub 저장소 통계 위젯
실시간 GitHub 저장소 통계를 인터랙티브하고 사용자 정의 가능한 형식으로 시각화하는 완전한 클라이언트 사이드 오픈소스 도구입니다.
개발자, 오픈소스 유지 관리자, 포트폴리오 제작자에게 이상적입니다.

🎯 목표
이 위젯은 GitHub REST API를 사용하여 공개 저장소에 대한 다양한 메타데이터와 인사이트를 가져와 브라우저에서 직접 표시합니다.
백엔드나 인증 없이 오직 브라우저에서만 동작합니다.

✨ 주요 기능
🔄 GitHub REST API를 통한 실시간 데이터 가져오기

⭐ 스타, 포크, 워처, 이슈, 풀 리퀘스트 수 표시

👥 아바타 및 커밋 수를 포함한 주요 기여자 시각화

📊 사용된 프로그래밍 언어를 인터랙티브한 차트로 표시

📅 저장소 생성일 및 마지막 업데이트 일시 표시

📜 라이선스 정보 표시

🎨 깔끔하고 반응형이며 사용자 정의 가능한 UI

💻 모든 브라우저에서 작동 (서버 설정 불필요)

🧩 웹사이트 또는 README.md에 쉽게 삽입 가능

📈 Chart.js를 통한 선택적 시각화 지원

🧱 기술 스택
HTML – 구조 및 레이아웃

CSS – 스타일링 및 반응형 디자인

JavaScript – 로직 및 API 처리

GitHub REST API – 데이터 소스

Chart.js – 그래프 및 차트 렌더링 (선택 사항)

📊 제공 위젯 목록
🔍 저장소 통계
⭐ 스타 / 🍴 포크 / 👁 워처 수 카운터

📅 저장소 생성일 및 마지막 업데이트 날짜

📜 라이선스 유형 표시

📊 언어 사용 통계 (파이 차트, 막대 차트, 도넛 차트)

📦 의존성 그래프 (npm, pip 등)

📈 커밋 활동 히트맵

🕐 평균 PR 병합 시간

🧵 이슈 상태 분석 (오픈 / 클로즈 / 고정됨)

👥 기여자 위젯
👥 주요 기여자 (아바타 + 커밋 수)

📊 요일별 기여 분석

🗺 기여자 위치 지도 (공개 데이터 기반)

⏱ 최근 기여자 (최근 7일 / 30일 기준)

📈 시간에 따른 기여 추이 (누적 영역 그래프)

📊 그래프 기반 위젯
📊 저장소 상태 레이더 차트 (스타, 포크, PR, 이슈 등)

📉 스타/포크 성장 추세 선형 차트

🍩 언어 사용 도넛 차트

📈 이슈 및 PR 추세 영역 차트

📆 GitHub 스타일의 캘린더 히트맵

⚙ DevOps 및 CI/CD 위젯
🚦 GitHub Actions CI/CD 상태 배지

🧪 코드 커버리지 배지 (Codecov, Coveralls)

🔄 마지막 워크플로 실행 상태 표시

🛠 빌드 이력 타임라인 (성공/실패 시각화)

📌 이슈 & PR 위젯
📋 고정된 이슈 또는 토론

🔍 이슈 라벨 워드 클라우드

📬 PR 병합 상태 및 비율 추적기

📈 이슈 감정 지표 (키워드 기반)

🧩 기타 위젯
📌 즐겨찾기 / 북마크 버튼

🔍 다른 저장소 검색 기능

🧠 AI 기반 커밋 요약 (선택적)

🔗 관련 저장소 추천

🪄 iframe / HTML로 위젯 내보내기 기능

📂 프로젝트 구조
bash
Copy code
github-repo-stats-widget/
├── index.html         # 메인 HTML 파일
├── style.css          # CSS 스타일 시트
├── repo.js            # 핵심 JavaScript 로직
├── charts.js          # 차트 렌더링 로직
├── assets/            # 아이콘, 스크린샷 등
├── README.md          # 문서 파일
└── LICENSE            # MIT 라이선스

🚀 배포 방법
이 위젯은 GitHub Pages 또는 Netlify, Vercel, Firebase와 같은 정적 호스팅 서비스를 통해 배포할 수 있습니다.

GitHub Pages로 배포하기
프로젝트를 GitHub에 푸시

Settings → Pages로 이동

브랜치: main, 폴더: / (root) 선택

위젯은 아래 URL에 호스팅됩니다:
"https://yourusername.github.io/github-repo-stats-widget/"