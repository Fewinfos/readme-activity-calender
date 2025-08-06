📦 GitHub Repository Stats Widget

브라우저에서 실시간으로 GitHub 저장소 통계를 시각화할 수 있는 오픈 소스 클라이언트 측 도구입니다. 개발자, 오픈 소스 관리자, 포트폴리오 제작자에게 완벽한 솔루션입니다.



🎯 목표

이 위젯은 GitHub REST API를 사용하여 공개 GitHub 저장소의 다양한 메타데이터와 인사이트를 가져와 표시합니다. 백엔드나 인증 없이 브라우저에서만 작동합니다.



✨ 기능

🔄 GitHub REST API를 통한 실시간 데이터 가져오기

⭐ 별, 포크, 워처, 이슈, 풀 리퀘스트 표시

👥 아바타와 커밋 수를 포함한 주요 기여자 시각화

📊 사용된 언어를 인터랙티브 차트로 표시

📅 저장소 생성일 및 마지막 업데이트 시간 표시

📜 라이선스 정보 표시

🎨 깔끔하고 반응형이며 커스터마이징 가능한 UI

💻 브라우저에서 직접 실행 가능 (서버 설정 필요 없음)

🧩 웹사이트나 README.md 파일에 쉽게 삽입 가능

📈 선택적으로 Chart.js를 통한 시각화 가능



🧱 기술 스택

HTML – 구조와 레이아웃



CSS – 스타일링과 반응형



JavaScript – 로직 및 API 처리



GitHub REST API – 데이터 소스



Chart.js – 그래프 및 차트 렌더링 (선택 사항)



📊 사용 가능한 위젯

🔍 저장소 통계

⭐ 별 / 🍴 포크 / 👁 워처 카운터



📅 저장소 생성일 및 마지막 업데이트 날짜



📜 라이선스 유형 표시



📊 언어 사용량 (파이, 바, 도넛 차트)



📦 의존성 그래프 (npm, pip 등)



📈 커밋 활동 히트맵



🕐 평균 PR 병합 시간



🧵 이슈 상태 분석 (Open / Closed / Pinned)



👥 기여자 위젯

👥 주요 기여자 (아바타 + 커밋 수)



📊 요일별 커밋 수



🗺 기여자 위치 맵 (공개 데이터 기준)



⏱ 최근 기여자 (최근 7일 / 30일 기준)



📈 시간에 따른 기여 현황 (누적 영역 그래프)



📊 그래프 기반 위젯

📊 저장소 상태에 대한 레이더 차트 (별, 포크, PR, 이슈)



📉 별/포크 성장 추세 라인 차트



🍩 언어 사용 도넛 차트



📈 이슈/PR 추세 영역 차트



📆 GitHub 스타일 캘린더 히트맵



⚙ DevOps \& CI/CD 위젯

🚦 GitHub Actions CI/CD 상태 배지



🧪 코드 커버리지 배지 (Codecov, Coveralls)



🔄 최근 워크플로 실행 위젯



🛠 빌드 히스토리 타임라인 (성공/실패 시각화)



📌 이슈 \& PR 위젯

📋 고정된 이슈 또는 토론



🔍 이슈 라벨 워드 클라우드



📬 PR 병합 상태/비율 추적기



📈 이슈 감정 분석 표시기 (키워드 기반)



🧩 기타 위젯

📌 즐겨찾기/저장소 북마크 버튼



🔍 다른 저장소를 입력할 수 있는 인라인 검색



🧠 AI 기반 커밋 요약 (선택 사항)



🔗 관련 저장소 위젯



🪄 iframe / HTML 임베드 형식으로 위젯 내보내기



📂 프로젝트 구조

bash

Copy code

github-repo-stats-widget/  

├── index.html         # 메인 HTML 파일  

├── style.css          # CSS 스타일  

├── repo.js            # 핵심 JavaScript 로직  

├── charts.js          # 차트 렌더링 로직  

├── assets/            # 아이콘, 스크린샷  

├── README.md          # 이 문서 파일  

└── LICENSE            # MIT 라이선스

🚀 배포 방법

이 위젯은 GitHub Pages 또는 Netlify, Vercel, Firebase와 같은 정적 호스팅 서비스를 통해 배포할 수 있습니다.



GitHub Pages를 통한 배포

1\.프로젝트를 GitHub에 푸시

2.Settings → Pages로 이동

3.Branch: main, Folder: / (root) 선택

4\.당신의 위젯은 다음 위치에 호스팅됩니다:

https://yourusername.github.io/github-repo-stats-widget/

